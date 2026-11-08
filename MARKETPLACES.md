# Where Flisk is listed, and what is left

Checked 2026-10-29. "Verified" means I called the marketplace or read the file; "from search" means a third-party page said so and it still needs a look.

| # | Marketplace | What goes there | Status | Next step |
| --- | --- | --- | --- | --- |
| 1 | [Apify Store](https://apify.com/store) | 2 Actors: [`flisk/flisk-app-starter`](https://apify.com/flisk/flisk-app-starter), [`flisk/flisk-stack-scanner`](https://apify.com/flisk/flisk-stack-scanner) | **Published** 2026-10-29 (public pages verified), icons and SEO fields set; `e2e/apify.sh` passes | Check Store search for "flisk" in a day |
| 2 | [Official MCP Registry](https://registry.modelcontextprotocol.io) | `flisk mcp` server | **Listed** as `io.github.flisk-sh/flisk` (verified via the registry API) | none |
| 3 | [PulseMCP](https://www.pulsemcp.com) | same server | Submissions **paused** as of 2026-10-07 (from search); it should still ingest the official registry | Re-check later; do not rely on it |
| 4 | [Glama](https://glama.ai/mcp/servers/flisk-sh/flisk) | same server, listed as "Flisk App Builder" | **Approved and listed** (verified, page loads) | Done 2026-10-30: `glama.json` in the flisk repo root, claimed, then a release made from a passing build test (admin Dockerfile page: build step `npm install -g @flisk-sh/flisk@latest`, CMD `flisk mcp`; answers the handshake with 21 tools). Score 58%. Re-check the TDQS page for the tool quality rating |
| 5 | [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | one list line | **PR open**: [#18048](https://github.com/punkpeye/awesome-mcp-servers/pull/18048) | Wait for review |
| 6 | [Smithery](https://smithery.ai) | same server | **Skipped** (checked 2026-11-08): Smithery shut down accounts, API keys, CLI and proxy on 2026-10-31 and is now a curated public directory powered by Arcade; `smithery.ai/new` is gone | none |
| 7 | [mcp.so](https://mcp.so/submit) | same server | **Paid only** (checked 2026-11-08): the submit form offers a $39 one-time "Paid submission" and no free option | Skip unless the maintainer decides to pay |
| 8 | Claude Code plugin marketplace | `flisk-cli` plugin | **Exists** in `flisk-sh/flisk` (`.claude-plugin/marketplace.json`, verified) | Users run `/plugin marketplace add flisk-sh/flisk` |
| 9 | [skills.sh](https://skills.sh) / agent skills | `flisk-sh/flisk-skills` | Repo exists (verified); installs straight from GitHub (from search) | Check `npx skills add flisk-sh/flisk-skills` works |
| 10 | [Cursor Directory](https://cursor.directory) | MCP server entry | Needs sign-in (checked 2026-11-08): it now lists plugins ("Submit a plugin", GitHub or Google login), not MCP servers | Maintainer signs in, then submit the `flisk-cli` plugin |
| 11 | [Docker Hub](https://hub.docker.com/u/flisk-sh) | namespace `flisk-sh`: prebuilt golden layers L1 to L3, L4 later, other images after that | **Planned** (checked 2026-10-31): `flisk-sh` is free; the organization is not created yet, because "Create organization" leads to a paid Docker Team checkout. `flisk` is taken by someone else | Maintainer creates the `flisk-sh` organization and picks the plan, then pushes L1 to L3. The flisk repo's `docs/troubleshoot-l1.md` still says the layers are never pushed: change it in the same release |

I did not create accounts, sign in, or post to any of these for you. #4, #6, #7, #10 and #11 need a login, and #5 should wait for #4.

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

Checked 2026-10-30, second round.

| List or directory | Decision |
| --- | --- |
| [awesome-ai-coding-tools](https://github.com/ai-for-developers/awesome-ai-coding-tools) | **PR open**: [#1144](https://github.com/ai-for-developers/awesome-ai-coding-tools/pull/1144), MCP Servers and Directories. Disclosed as our own project |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | Skipped: needs real community usage; `flisk-skills` was created 2026-09-29 and has 2 stars |
| [heilcheng/awesome-agent-skills](https://github.com/heilcheng/awesome-agent-skills) | Skipped: needs 20+ stars on a `SKILL.md` repo. Revisit when `flisk-skills` has them |
| [awesome-docker](https://github.com/veggiemonk/awesome-docker) | Skipped: fails its "for Docker" test (Flisk would still exist without Docker) |
| [mcp.so](https://mcp.so/submit) | Form only (its repo takes no PRs): needs a login. See #7 above |
| [Claude connector directory](https://claude.ai/directory/manage) | Skipped: remote (https) servers only; `flisk mcp` is local stdio |

## Launch boards and product directories

Checked 2026-11-08 in Google Chrome, signed in by the maintainer. Free plans only; nothing was paid for.

| Site | Status | Notes |
| --- | --- | --- |
| [Product Hunt](https://www.producthunt.com/posts/1289517) | **Launched** | Post exists (found by search). Citable has its own launch |
| [Dev Hunt](https://devhunt.org/account/tools) | **6 tools listed, free plan**: Flisk CLI, DevEx Roadmap, Citable, README Score, Pages, Helpdock | Free listings wait in a queue (launch dates in 2031) and carry a nofollow link. The badge on the maker's site earns the "Maker links to DevHunt" mark: shown for Flisk CLI, Citable, README Score and Helpdock on 2026-11-08. Pages shows no badge yet (its deploy was failing on a stale `bun.lock`, fixed in flisk-sh/pages#168). DevEx Roadmap has no badge yet. Paid boost starts at $49 for a chosen week and a dofollow link: not bought |
| [OpenAlternative](https://openalternative.co/submit) | **Skipped** | Its guidelines exclude CLIs, libraries, SDKs, frameworks and MCP servers, and want 50+ stars and a named proprietary rival. Flisk is a CLI |
| [AlternativeTo](https://alternativeto.net/software/flisk/) | In the free review queue since 2026-10-31 | See `docs` for the Tilt, Skaffold and Garden submissions |
| [SaaSHub](https://www.saashub.com/flisk) | Pending approval (2026-10-31) | |
| [SourceForge](https://sourceforge.net/projects/flisk/) | **Listed** 2026-11-08 (free) | Imported `flisk-sh/flisk` through the GitHub importer under the `omakase` account; homepage flisk.sh, topic Build Tools, license MIT. The importer asks for GitHub OAuth (public data only) and its URL box did not fill the owner and repo fields by itself. OS categories and a logo are still to add
| [Indie Hackers](https://www.indiehackers.com/product/flisk) | **Product page live** (2026-11-08), details saved | The page's checklist still lists "Add an original post" (gated: new accounts must comment first or buy IH+) and "Add revenue data" (we have none to report). Launch story drafted, not posted
| [BetaList](https://betalist.com/agent) | **Skipped** | Every plan (Lite, Standard, Premium) is paid; no free plan found |
| [mcp.so](https://mcp.so/submit) | **Skipped** | Paid only ($39), see #7 above |

Dev Hunt lessons:
- Its URL import ("Paste your website") could not read our sites, so the form is filled by hand: a logo file (we use each site's `/icon-512.png`), one screenshot, name, slogan, URL, repo, description, a first comment.
- Search on devhunt.org did not find "Flisk CLI". The dashboard at `/account/tools` is the reliable list.
- The badge image comes from `https://devhunt.org/badge/<slug>.svg`. A site with a Content-Security-Policy needs `https://devhunt.org` in `img-src`, or the browser hides it (Citable, README Score and Pages needed this).
- Each launch opens a "Launch plan" page that sells the $49 boost. The free listing is already saved; close it.
