# Where Flisk is listed, and what is left

Checked 2026-10-29. "Verified" means I called the marketplace or read the file; "from search" means a third-party page said so and it still needs a look.

| # | Marketplace | What goes there | Status | Next step |
| --- | --- | --- | --- | --- |
| 1 | [Apify Store](https://apify.com/store) | 2 Actors (`flisk-app-starter`, `flisk-stack-scanner`) | **Pushed and tested, still private** (verified: `e2e/apify.sh` passes against the live Actors) | In Console → Publication: fill SEO fields, set **Public** |
| 2 | [Official MCP Registry](https://registry.modelcontextprotocol.io) | `flisk mcp` server | **Listed** as `io.github.flisk-sh/flisk` (verified via the registry API) | none |
| 3 | [PulseMCP](https://www.pulsemcp.com) | same server | Should follow #2 automatically (from search, not verified) | Search "flisk" there in a week; if missing, use its Submit button |
| 4 | [Glama](https://glama.ai/mcp/servers) | same server | **Not listed**: `glama.ai/mcp/servers/flisk-sh/flisk` returns 404 (verified). The org's `helpdock` is listed | Sign in with GitHub, add `flisk-sh/flisk`, claim it |
| 5 | [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | one list line | **Blocked by #4**: entries carry a Glama link. Not in the list (verified) | After #4, open a PR; line is below |
| 6 | [Smithery](https://smithery.ai) | same server | Not found by search (not verified, page is script-rendered) | Sign in, `smithery.ai/new`, point at the repo |
| 7 | [mcp.so](https://mcp.so/submit) | same server | Not found by search (same caveat) | Submit the GitHub URL |
| 8 | Claude Code plugin marketplace | `flisk-cli` plugin | **Exists** in `flisk-sh/flisk` (`.claude-plugin/marketplace.json`, verified) | Users run `/plugin marketplace add flisk-sh/flisk` |
| 9 | [skills.sh](https://skills.sh) / agent skills | `flisk-sh/flisk-skills` | Repo exists (verified); installs straight from GitHub (from search) | Check `npx skills add flisk-sh/flisk-skills` works |
| 10 | [Cursor Directory](https://cursor.directory) | MCP server entry | Unchecked | Submit with the copy below |

I did not create accounts, sign in, or post to any of these for you. #4, #6, #7 and #10 need a login, and #5 should wait for #4.

## Paste-ready copy

**Name:** Flisk
**One line:** Your whole app, running on your computer with one command. An MCP server lets your AI start, check and fix the app.
**Install:** `npm install -g @flisk-sh/flisk`, then run `flisk mcp` (stdio)
**Repo:** https://github.com/flisk-sh/flisk
**Category:** Developer tools
**Tags:** local development, app builder, docker, ai agents

**awesome-mcp-servers line** (Developer Tools section, after #4 gives the Glama link):

```
- [flisk-sh/flisk](https://github.com/flisk-sh/flisk) [![flisk-sh/flisk MCP server](https://glama.ai/mcp/servers/flisk-sh/flisk/badges/score.svg)](https://glama.ai/mcp/servers/flisk-sh/flisk) 📇 🏠 🍎 🪟 🐧 - Runs your whole app (website, API, workers, AI agents, database) on your computer with one command; the MCP server lets an agent create parts, start the app, read status and logs, and fix setup problems.
```
