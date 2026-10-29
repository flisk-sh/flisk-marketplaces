# Where Flisk is listed, and what is left

Checked 2026-10-29. "Verified" means I called the marketplace or read the file; "from search" means a third-party page said so and it still needs a look.

| # | Marketplace | What goes there | Status | Next step |
| --- | --- | --- | --- | --- |
| 1 | [Apify Store](https://apify.com/store) | 2 Actors: [`flisk/flisk-app-starter`](https://apify.com/flisk/flisk-app-starter), [`flisk/flisk-stack-scanner`](https://apify.com/flisk/flisk-stack-scanner) | **Published** 2026-10-29 (public pages verified), icons and SEO fields set; `e2e/apify.sh` passes | Check Store search for "flisk" in a day |
| 2 | [Official MCP Registry](https://registry.modelcontextprotocol.io) | `flisk mcp` server | **Listed** as `io.github.flisk-sh/flisk` (verified via the registry API) | none |
| 3 | [PulseMCP](https://www.pulsemcp.com) | same server | Should follow #2 automatically (from search, not verified) | Search "flisk" there in a week; if missing, use its Submit button |
| 4 | [Glama](https://glama.ai/mcp/servers/flisk-sh/flisk) | same server, listed as "Flisk App Builder" | **Approved and listed** (verified, page loads) | Claim it in the server's admin settings, then paste `glama/Dockerfile` there so the quality checks run (tested: builds, answers the MCP handshake with 21 tools) |
| 5 | [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | one list line | **PR open**: [#18048](https://github.com/punkpeye/awesome-mcp-servers/pull/18048) | Wait for review |
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

## Other awesome lists

Checked 2026-10-30 (rules read, not just titles).

| List | Decision |
| --- | --- |
| [awesome-vibe-coding](https://github.com/awesome-vibe-coding/awesome-vibe-coding) | **PR open**: [#226](https://github.com/awesome-vibe-coding/awesome-vibe-coding/pull/226), CLI Tools. Disclosed as our own project, as its guide asks |
| [wong2/awesome-mcp-servers](https://github.com/wong2/awesome-mcp-servers) | Skipped: no contribution rules in the repo; submissions go through mcp.so |
| [appcypher/awesome-mcp-servers](https://github.com/appcypher/awesome-mcp-servers) | Skipped: last updated May 2026 |
| [awesome-devops-mcp-servers](https://github.com/rohitg00/awesome-devops-mcp-servers) | Skipped: requires a DevOps focus; Flisk is an app builder |
| [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | Later: one resource at a time through its own process; best fit is the `flisk-skills` plugin |
