---
name: flisk-list-claude-plugin
description: Submit a plugin (a folder in a GitHub repo with .claude-plugin/plugin.json) to the Claude directory and link it to its connector. Use when listing or updating a Flisk plugin such as put-my-page-online, ai-search-checker, readme-checker or flisk-claude.
---

# List a plugin in the Claude directory

Portal: `claude.ai/directory/manage/new/plugin`. Five steps.

1. **Source:** open "Plugin in a subfolder", type the path (e.g. `plugins/put-my-page-online`) and the repo (`https://github.com/flisk-sh/<repo>`), then press Validate. Warnings about the `icon` field are harmless.
2. **Listing details:** read from plugin.json and the README: fix those files and re-validate, not the form. "1 unregistered" server means the `.mcp.json` URL is not live or not a listed connector.
3. **Data handling:** answer No / No / Not retained / No for read-only servers.
4. **Compliance:** four terms boxes. **The user ticks them and submits.**
5. After submitting, add the repo's push webhook (clipboard method for the secret; never print it).
6. When its connector is approved: plugin page → Content tab → "Link existing listing" → the connector's slug.

The directory tracks the default branch and rescans new commits, so merge fixes before submitting. Claude Code users install from a marketplace repo: `/plugin marketplace add flisk-sh/flisk`.

## Prompts (required in every listing)

Every MCP server ships prompts as well as tools. Before any listing or submission:
1. Check the live server answers `prompts/list` with the expected names (see the curl in README.md). If it returns "Method not found", the server isn't deployed with prompts yet: deploy first, and ask the user for the deploy yes.
2. Put the prompt names and what each one needs (for example `build_my_app` needs `what`) in the listing's prompt field, the copy, and the test steps.
3. Prompts are read-only text the client shows to the user; they don't call anything themselves. Say so in the reviewer notes.

A plugin bundles a server (`.mcp.json`) and skills. Its listing shows the server's prompts too: check them on the live server before validating the plugin.
