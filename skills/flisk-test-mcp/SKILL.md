---
name: flisk-test-mcp
description: Test Flisk MCP servers and plugin folders for real, and keep the evidence. Checks each server's protocol (initialize, tools, prompts, calls, errors, HTTP rules, icons) and each plugin's manifest, skills and .mcp.json, then writes JSON and a summary. Use before listing or submitting a server or plugin, after a deploy, or when asked to test or verify the apps.
---

# Test Flisk MCP servers and plugins

The script is `test_mcp.py` in this folder. It uses only the Python standard library.

## Run it

```bash
python3 ~/.claude/skills/flisk-test-mcp/test_mcp.py <evidence-dir> --plugins-root ~/tdk-pr-work
```

- `--servers build-me-an-app,helpdock` tests only some servers.
- Evidence goes to `<evidence-dir>`: one JSON per server (`<name>.json`), one per plugin (`plugin-<name>.json`), and `summary.md`.
- The exit code is 1 when any check fails.

## What it checks

For each server:
1. `initialize` returns a server name, `tools`, and `prompts` when prompts are expected.
2. `tools/list` returns exactly the expected tools, and each has `readOnlyHint: true`.
3. Each tool runs with its sample input, with no `isError` and some text.
4. An unknown tool is refused (a JSON-RPC error, or a result with `isError`).
5. `prompts/list` returns exactly the expected prompts. A server with none passes only if it returns an empty list or an error.
6. Each prompt runs with its sample arguments, and a prompt with a required argument is refused without it.
7. An unknown method gets `-32601`, bad JSON gets a 400, GET gets 405, and a JSON-only client does not get 406.
8. `icon-512.png` is a PNG, and `favicon.ico` is served.

For each plugin folder:
- `.claude-plugin/plugin.json` parses and has name, version, description and author, and its icon file exists.
- At least one skill has a `SKILL.md` with `name` and `description` in its frontmatter.
- `.mcp.json` points at the live server, which answers `initialize`. A local command server is checked as a script that exists.

## Keep the expectations current

The expected tools, prompts and sample inputs are in `SERVERS` and `PLUGINS` at the top of `test_mcp.py`. When a server adds a tool or prompt, update that table first, or the check will fail for the right reason.

## Reading the result

- **Pass** means the live server or local file does what the listing will claim.
- **FAIL** means fix the server or the plugin, then deploy and run again. Do not change the expectation to match a failure.
- **Network errors** (status 0) are retried three times. If it persists, check DNS on the machine (`dig +short <host>`) before blaming the server. macOS can cache a failed lookup.
- The known open failure as of 2026-10-31: Helpdock answers 406 to a JSON-only client until its fix is deployed (see the Helpdock PR).

## Evidence

Keep each run in `evidence/<date>/` (JSON and `summary.md`), and link it from the listing's reviewer notes when a directory asks for test evidence. Add the Claude directory's own page state next to it (the Published/In review status, tools and prompts, usage), copied as text, not as a guess.
