---
name: flisk-install-mcp
description: Give a user the exact steps to add a Flisk remote MCP server (Build Me an App, Put My Page Online, Get My Site Found by AI, Improve My README, Flisk docs) to Claude, Claude Code, Gemini CLI, Cursor or Codex. Use when someone asks how to add, install or connect one of these servers.
---

# Install a Flisk MCP server

Read `INSTALL.md` at the root of flisk-sh/flisk-marketplaces for the URL table and per-client snippets. Steps:

1. Ask which client (Claude app, Claude Code, Gemini CLI, Cursor, Codex) if it is not clear.
2. Give only that client's snippet, with the server they want.
3. Verify the server first with the `tools/list` curl in `INSTALL.md`.
4. Gemini, Cursor and Codex syntax is from memory: tell the user to check it against the client's docs if it fails.
