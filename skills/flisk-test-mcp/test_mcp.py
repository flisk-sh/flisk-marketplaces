#!/usr/bin/env python3
"""Test Flisk MCP servers and plugin folders, and write the evidence.

Standard library only. Usage:
  python3 test_mcp.py <evidence-dir> [--servers name,name] [--plugins-root <dir>]

For each server it runs the protocol checks (initialize, tools, prompts, calls,
errors, HTTP rules, icons) and writes <evidence-dir>/<name>.json. For each plugin
folder it checks the manifest and skills, and that .mcp.json points at a live
server. It writes <evidence-dir>/summary.md and exits 1 if any check fails.
"""
import json, os, re, sys, time, urllib.request, urllib.error
from datetime import datetime, timezone

ACCEPT = "application/json, text/event-stream"

# Expected contents of each server. Update here when a tool or prompt is added.
SERVERS = {
    "build-me-an-app": dict(
        url="https://mcp.flisk.sh/mcp", icon="https://mcp.flisk.sh/icon-512.png", server_name="flisk-app-builder",
        tools={"plan_app": {"what": "an online shop for a bakery"}, "list_app_starters": {}},
        prompts={"build_my_app": {"what": "an online shop for a bakery"}, "pick_a_starter": {}},
        required_args={"build_my_app": ["what"]},
    ),
    "put-my-page-online": dict(
        url="https://pages.flisk.si/mcp", icon="https://pages.flisk.si/icon-512.png", server_name="flisk-pages",
        tools={"check_page": {"name": "index.md", "content": "# Hello\n\nA page that passes the check.\n"}, "how_to_put_page_online": {}},
        prompts={"put_my_page_online": {}},
        required_args={},
    ),
    "get-my-site-found-by-ai": dict(
        url="https://citable.flisk.si/mcp", icon="https://citable.flisk.si/icon-512.png", server_name="citable",
        tools={"check_site": {"url": "example.com"}},
        prompts={"check_my_site": {"url": "example.com"}},
        required_args={"check_my_site": ["url"]},
    ),
    "improve-my-readme": dict(
        url="https://readme.flisk.si/mcp", icon="https://readme.flisk.si/icon-512.png", server_name="readme-score",
        tools={"score_readme": {"readme": "# Demo\n\nA tool that does one thing.\n\n## Install\n\nnpm i demo\n\n## Usage\n\ndemo run\n"}},
        prompts={"improve_my_readme": {"repo": "flisk-sh/flisk"}},
        required_args={"improve_my_readme": ["repo"]},
    ),
    "helpdock": dict(
        url="https://helpdock.flisk.sh/mcp", icon="https://helpdock.flisk.sh/icon-512.png", server_name="helpdock",
        tools={"search_docs": {"query": "deploy"}, "ask_help_center": {"question": "how do I start"}},
        prompts={},  # none yet: see the Helpdock PR. An empty list is expected, not a failure.
        required_args={},
    ),
}

# Plugin folders: local path (relative to --plugins-root) and the server they must point at.
PLUGINS = {
    "flisk-claude": dict(path="flisk/plugins/flisk-claude", server=None),  # local stdio server: checked as a script
    "put-my-page-online": dict(path="pages/plugins/put-my-page-online", server="https://pages.flisk.si/mcp"),
    "ai-search-checker": dict(path="citable/plugins/ai-search-checker", server="https://citable.flisk.si/mcp"),
    "readme-checker": dict(path="readme-score/plugins/readme-checker", server="https://readme.flisk.si/mcp"),
}


class Check:
    def __init__(self, name):
        self.name, self.ok, self.detail = name, False, ""

    def done(self, ok, detail=""):
        self.ok, self.detail = bool(ok), str(detail)[:400]
        return self

    def as_dict(self):
        return {"check": self.name, "ok": self.ok, "detail": self.detail}


def http(url, method="POST", body=None, accept=ACCEPT, headers=None, timeout=30):
    data = None if body is None else (body if isinstance(body, bytes) else json.dumps(body).encode())
    h = {"content-type": "application/json", "user-agent": "flisk-test-mcp/1.0 (+https://flisk.sh)"}
    if accept is not None:
        h["accept"] = accept
    h.update(headers or {})
    req = urllib.request.Request(url, data=data, method=method, headers=h)
    for attempt in (1, 2, 3):
        try:
            return _open(req, timeout)
        except Exception as e:  # network errors are evidence too, after one retry
            last = f"{type(e).__name__}: {e}"
            time.sleep(5)
    return 0, "", last


def _open(req, timeout):
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, r.headers.get("content-type", ""), r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("content-type", ""), e.read().decode("utf-8", "replace")


def parse(text):
    """Return the JSON-RPC message, from a plain JSON body or an event stream."""
    t = text.strip()
    if t.startswith("{"):
        return json.loads(t)
    for line in t.splitlines():
        if line.startswith("data:"):
            return json.loads(line[5:].strip())
    raise ValueError("no JSON-RPC message in body")


def rpc(url, method, params=None, id_=1, accept=ACCEPT):
    msg = {"jsonrpc": "2.0", "id": id_, "method": method}
    if params is not None:
        msg["params"] = params
    status, ctype, text = http(url, body=msg, accept=accept)
    try:
        return status, parse(text), text
    except Exception:
        return status, None, text


def run_server(name, spec):
    url, out = spec["url"], []
    add = lambda c: out.append(c.as_dict())

    # 1. initialize
    c = Check("initialize")
    st, msg, raw = rpc(url, "initialize", {"protocolVersion": "2025-03-26", "capabilities": {}, "clientInfo": {"name": "flisk-test", "version": "1"}})
    res = (msg or {}).get("result", {})
    caps = res.get("capabilities", {})
    expect_prompts = bool(spec["prompts"])
    add(c.done(st == 200 and res.get("serverInfo", {}).get("name") and "tools" in caps and (not expect_prompts or "prompts" in caps),
               f"status {st}, server {res.get('serverInfo', {}).get('name')}, capabilities {list(caps)}"))

    # 2. tools/list: names match, every tool has annotations
    c = Check("tools/list")
    st, msg, _ = rpc(url, "tools/list")
    tools = (msg or {}).get("result", {}).get("tools", [])
    names = sorted(t["name"] for t in tools)
    add(c.done(names == sorted(spec["tools"]), f"tools {names}, expected {sorted(spec['tools'])}"))
    for t in tools:
        c = Check(f"annotations {t['name']}")
        ro = t.get("annotations", {}).get("readOnlyHint")
        add(c.done(ro is True, f"readOnlyHint={ro}"))

    # 3. each tool call with its sample input
    for tname, args in spec["tools"].items():
        c = Check(f"tools/call {tname}")
        st, msg, raw = rpc(url, "tools/call", {"name": tname, "arguments": args}, id_=10)
        result = (msg or {}).get("result", {})
        text = (result.get("content") or [{}])[0].get("text", "")
        ok = st == 200 and not result.get("isError") and bool(text)
        add(c.done(ok, f"status {st}, isError {result.get('isError')}, text {text[:160]}"))

    # 4. unknown tool -> -32602
    c = Check("unknown tool is refused")
    st, msg, _ = rpc(url, "tools/call", {"name": "no_such_tool", "arguments": {}}, id_=11)
    refused = (msg or {}).get("error", {}).get("code") == -32602 or bool((msg or {}).get("result", {}).get("isError"))
    add(c.done(refused, f"{(msg or {}).get('error') or (msg or {}).get('result')}"))

    # 5. prompts/list
    c = Check("prompts/list")
    st, msg, _ = rpc(url, "prompts/list", id_=12)
    if not expect_prompts:
        ok = msg is not None and (msg.get("result", {}).get("prompts", []) == [] or "error" in msg)
        add(c.done(ok, f"no prompts expected: {msg}"))
    else:
        pnames = sorted(p["name"] for p in (msg or {}).get("result", {}).get("prompts", []))
        add(c.done(pnames == sorted(spec["prompts"]), f"prompts {pnames}, expected {sorted(spec['prompts'])}"))

    # 6. each prompt/get with its sample args, and a refusal when a required arg is missing
    for pname, args in spec["prompts"].items():
        c = Check(f"prompts/get {pname}")
        st, msg, _ = rpc(url, "prompts/get", {"name": pname, "arguments": args}, id_=13)
        text = (((msg or {}).get("result", {}).get("messages") or [{}])[0].get("content") or {}).get("text", "")
        add(c.done(bool(text), f"text {text[:160]}"))
        if spec["required_args"].get(pname):
            c = Check(f"prompts/get {pname} without its required argument is refused")
            st, msg, _ = rpc(url, "prompts/get", {"name": pname, "arguments": {}}, id_=14)
            add(c.done("error" in (msg or {}), f"{(msg or {}).get('error')}"))

    # 7. protocol edges
    c = Check("unknown method is refused (-32601)")
    st, msg, _ = rpc(url, "no/such_method", id_=15)
    add(c.done((msg or {}).get("error", {}).get("code") == -32601, f"{(msg or {}).get('error')}"))
    c = Check("bad JSON is refused (-32700, HTTP 400)")
    st, ctype, text = http(url, body=b"not json")
    add(c.done(st == 400 and bool(text), f"status {st} {text[:80]}"))
    c = Check("GET is refused (405)")
    st, _, _ = http(url, method="GET", accept=None)
    add(c.done(st == 405, f"status {st}"))
    c = Check("accepts a JSON-only client (not 406)")
    st, _, text = http(url, body={"jsonrpc": "2.0", "id": 16, "method": "tools/list"}, accept="application/json")
    add(c.done(st != 406, f"status {st}"))

    # 8. icons
    c = Check("icon-512.png is a PNG")
    st, ctype, _ = http(spec["icon"], method="GET", accept=None)
    add(c.done(st == 200 and "png" in ctype, f"status {st} {ctype}"))
    c = Check("favicon.ico is served")
    host = spec["url"].split("/mcp")[0]
    st, ctype, body = http(host + "/favicon.ico", method="GET", accept=None)
    add(c.done(st == 200, f"status {st} {ctype}" + (f" error: {body[:120]}" if st == 0 else "")))
    return out


def check_plugin(name, spec, root):
    out = []
    add = lambda c: out.append(c.as_dict())
    base = os.path.join(root, spec["path"])
    # manifest
    c = Check("plugin.json parses and has name, version, description, author")
    mpath = os.path.join(base, ".claude-plugin", "plugin.json")
    try:
        m = json.load(open(mpath))
        add(c.done(all(m.get(k) for k in ("name", "version", "description", "author")), f"name {m.get('name')} version {m.get('version')}"))
    except Exception as e:
        m = {}
        add(c.done(False, f"{mpath}: {e}"))
    c = Check("manifest icon file exists")
    icon = m.get("icon", "")
    add(c.done(not icon or os.path.exists(os.path.normpath(os.path.join(base, icon))), icon or "no icon field"))
    # skills
    skills = sorted(glob_dirs(os.path.join(base, "skills")))
    c = Check("at least one skill with frontmatter name and description")
    good = []
    for s in skills:
        p = os.path.join(base, "skills", s, "SKILL.md")
        if os.path.exists(p):
            head = open(p).read().split("---")[1] if open(p).read().startswith("---") else ""
            if re.search(r"^name:\s*\S", head, re.M) and re.search(r"^description:\s*\S", head, re.M):
                good.append(s)
    add(c.done(bool(good), f"skills {good}"))
    # .mcp.json points at the live server
    c = Check(".mcp.json points at the live server")
    try:
        mc = json.load(open(os.path.join(base, ".mcp.json")))
        servers = mc.get("mcpServers", {}).values()
        if spec["server"] is None:
            cmds = [v.get("command", "") for v in servers]
            scripts = [os.path.normpath(os.path.join(base, c.replace("${CLAUDE_PLUGIN_ROOT}", "."))) for c in cmds if c]
            add(c.done(bool(scripts) and all(os.path.exists(x) for x in scripts), f"command scripts {scripts}"))
            return out
        urls = [v.get("url") for v in servers]
        add(c.done(spec["server"] in urls, f"urls {urls}"))
        live = spec["server"]
        c = Check("the server in .mcp.json answers initialize")
        st, msg, _ = rpc(live, "initialize", {"protocolVersion": "2025-03-26", "capabilities": {}, "clientInfo": {"name": "flisk-test", "version": "1"}})
        add(c.done(st == 200 and bool((msg or {}).get("result")), f"status {st}"))
    except Exception as e:
        add(c.done(False, f".mcp.json: {e}"))
    return out


def glob_dirs(path):
    return [d for d in os.listdir(path) if os.path.isdir(os.path.join(path, d))] if os.path.isdir(path) else []


def main(argv):
    if not argv or argv[0].startswith("--"):
        print(__doc__)
        return 2
    ev = argv[0]
    os.makedirs(ev, exist_ok=True)
    only = None
    root = os.path.expanduser("~/tdk-pr-work")
    if "--servers" in argv:
        only = argv[argv.index("--servers") + 1].split(",")
    if "--plugins-root" in argv:
        root = argv[argv.index("--plugins-root") + 1]
    stamp = datetime.now(timezone.utc).isoformat(timespec="seconds")
    lines, failures = [f"# Flisk MCP and plugin test, {stamp}", ""], 0

    for name, spec in SERVERS.items():
        if only and name not in only:
            continue
        results = run_server(name, spec)
        bad = [r for r in results if not r["ok"]]
        failures += len(bad)
        json.dump({"target": name, "url": spec["url"], "run_at": stamp, "checks": results}, open(os.path.join(ev, f"{name}.json"), "w"), indent=2, ensure_ascii=False)
        lines += [f"## {name} ({spec['url']})", "", "| Check | Result | Detail |", "| --- | --- | --- |"]
        lines += [f"| {r['check']} | {'pass' if r['ok'] else 'FAIL'} | {r['detail'].replace('|', '/')} |" for r in results]
        lines.append("")

    for name, spec in PLUGINS.items():
        results = check_plugin(name, spec, root)
        bad = [r for r in results if not r["ok"]]
        failures += len(bad)
        json.dump({"target": name, "path": spec["path"], "run_at": stamp, "checks": results}, open(os.path.join(ev, f"plugin-{name}.json"), "w"), indent=2, ensure_ascii=False)
        lines += [f"## plugin {name} ({spec['path']})", "", "| Check | Result | Detail |", "| --- | --- | --- |"]
        lines += [f"| {r['check']} | {'pass' if r['ok'] else 'FAIL'} | {r['detail'].replace('|', '/')} |" for r in results]
        lines.append("")

    lines.insert(2, f"**Failures: {failures}**\n")
    open(os.path.join(ev, "summary.md"), "w").write("\n".join(lines))
    print(f"failures: {failures}; evidence in {ev}")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
