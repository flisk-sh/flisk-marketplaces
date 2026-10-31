---
name: flisk-list-marketplaces
description: List and keep up to date the Flisk apps on public marketplaces and directories other than the Claude directory: Apify Store Actors, the official MCP Registry, Glama, Smithery, mcp.so, PulseMCP, Cursor Directory, skills.sh and awesome lists. Use when asked to publish to, check, or add Flisk to Apify or any public marketplace, or "are we everywhere".
---

# List Flisk on public marketplaces

The source of truth is this repo: `README.md` (status table), `MARKETPLACES.md` (rules read, decisions, paste-ready copy), `apify/` (Actor sources), `glama/Dockerfile`, `e2e/apify.sh`. Read them first, then update them after every change, with the date.

## Apify Store

- Two Actors in `apify/actors/`: `flisk/flisk-app-starter` (pick what to build, get a working app) and `flisk/flisk-stack-scanner` (App Checker).
- Needs `apify-cli` logged in (`apify login`). The user signs in; never enter credentials.
- Publish: `apify push` from the Actor folder; set icon, SEO title and description, categories in the console; then make it public.
- Check after every publish: `e2e/apify.sh` runs the live Actors for real (every template must give a real project). Search results lag a day.

## Official MCP Registry

Listed as `io.github.flisk-sh/flisk` (the local `flisk mcp` stdio server). Verify with `https://registry.modelcontextprotocol.io/?q=flisk`. Updates need a new version and `mcp-publisher`, signed in with GitHub.

## Glama

"Flisk App Builder" (flisk-sh/flisk), claimed. `glama.json` is in the flisk repo root; `glama/Dockerfile` is what the quality checks build. Re-release after server changes so the score refreshes.

## Needs a login (the user does it)

Smithery (`smithery.ai/new`), mcp.so (`mcp.so/submit`, the GitHub URL), Cursor Directory. PulseMCP submissions were paused on 2026-10-07; it should ingest the official registry.

## Awesome lists

One PR per list, disclosed as our own project, one at a time, only when the list's own rules are met (read them). Open: awesome-mcp-servers #18048, awesome-vibe-coding #226, awesome-ai-coding-tools #1144. Skipped lists and why are in `MARKETPLACES.md`. Skills lists need stars on `flisk-sh/flisk-skills`.

## Claude directory, GitHub Actions, npm

Not here: use `flisk-list-claude-connector`, `flisk-list-claude-plugin`, `flisk-list-github-action`.

## Rules

Never create accounts, sign in, or post for the user. Verify by calling the marketplace, not by a third-party page. Names in the words people type.

## Prompts (required in every listing)

Every MCP server ships prompts as well as tools. Before any listing or submission:
1. Check the live server answers `prompts/list` with the expected names (see the curl in README.md). If it returns "Method not found", the server isn't deployed with prompts yet: deploy first, and ask the user for the deploy yes.
2. Put the prompt names and what each one needs (for example `build_my_app` needs `what`) in the listing's prompt field, the copy, and the test steps.
3. Prompts are read-only text the client shows to the user; they don't call anything themselves. Say so in the reviewer notes.

Apify, MCP Registry, Glama, Toolradar and awesome-list entries: name the prompts where the form allows it (description, features or tags).
