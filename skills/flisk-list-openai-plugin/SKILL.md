---
name: flisk-list-openai-plugin
description: Package and submit a Flisk remote MCP server to OpenAI (ChatGPT and Codex) as a plugin: the ZIP, domain verification, review details and what the user must do. Use when listing Flisk apps on OpenAI, ChatGPT or Codex, or fixing an OpenAI submission.
---

# List a Flisk MCP server on OpenAI (ChatGPT and Codex)

OpenAI calls it a **plugin** (the portal still says "app" in places). Portal: `platform.openai.com/plugins` → "Upload new or existing plugin". Rules read from OpenAI's docs on 2026-10-31 (developers.openai.com/apps-sdk/deploy/submission); re-read them first, they change.

## Packages

`openai/<slug>/` in this repo, one per server (exactly one remote MCP server per plugin):
`.codex-plugin/plugin.json`, `.mcp.json`, `skills/<name>/SKILL.md`, `assets/logo.png` (logo and composerIcon), `test-cases.json` (5 positive, 3 negative). Rebuild the ZIPs: `cd openai/<slug> && zip -qr ../<slug>.zip .codex-plugin .mcp.json skills assets`. Do not put credentials, hooks or `apps` / `.app.json` in the package.

Limits: displayName ≤ 30, shortDescription ≤ 30, longDescription ≤ 4000; all URLs HTTPS; images PNG/JPEG/WebP/SVG ≤ 5 MiB, square, ≥ 48 px.

## Steps

1. Verify the server answers (`tools/list` curl in `INSTALL.md`).
2. **The user** completes individual or business verification in the OpenAI org settings (owner or "Apps Management Write").
3. Upload the ZIP, fix validation errors (the manifest field names were written from the docs summary: let the validator correct them), check Metadata & Skills.
4. **Domain verification:** portal → MCPs → Connect shows a token. Host it as plain text at `https://<mcp host>/.well-known/openai-apps-challenge` (token only). That is a change to the worker: add the route, then **ask the user before deploying** (production deploy).
5. Connect and scan the MCP server (no-auth is supported). Fix findings.
6. Review details: paste `test-cases.json`, add the **demo recording URL** (a video link: we have none yet), reviewer notes ("no account, no key, read-only").
7. **The user submits** and ticks the policy attestations. After approval, "Publish plugin" is the user's.

## Open gaps

- No real terms of service: `openai/TERMS.md` is a draft. Needs the company's text.
- No demo video for these servers.
- Citable and README have no privacy page of their own (the root page is used).

## Codex users (no submission needed)

`codex mcp add flisk-app-builder --url https://mcp.flisk.sh/mcp`, or `~/.codex/config.toml`; the official Codex directory's self-serve submission was "coming soon" in the sources found, so the portal above is the route. Community lists take PRs (see `flisk-list-marketplaces`).

## Prompts (required in every listing)

Every MCP server ships prompts as well as tools. Before any listing or submission:
1. Check the live server answers `prompts/list` with the expected names (see the curl in README.md). If it returns "Method not found", the server isn't deployed with prompts yet: deploy first, and ask the user for the deploy yes.
2. Put the prompt names and what each one needs (for example `build_my_app` needs `what`) in the listing's prompt field, the copy, and the test steps.
3. Prompts are read-only text the client shows to the user; they don't call anything themselves. Say so in the reviewer notes.

The OpenAI package ships tools through `.mcp.json`; the prompts come from the same server. Mention the prompt names in `longDescription` and in the test cases so reviewers can run them.
