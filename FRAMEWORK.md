# Flisk distribution framework (Zachman view)

Status as of **2026-10-31**. One page for the whole picture: what we ship, where each piece is listed, and what is missing.
The Zachman matrix below uses the usual six questions as columns (What, How, Where, Who, When, Why) and the usual perspectives as rows (Planner, Owner, Designer, Builder, Out-of-context, Running). Each cell says what is true for our apps.

## 1. The Zachman matrix

| Perspective | What (data) | How (function) | Where (network) | Who (people) | When (time) | Why (motive) |
| --- | --- | --- | --- | --- | --- | --- |
| **Planner** (scope) | Apps: Flisk CLI, Flisk demos, Build Me an App, Put My Page Online, Get My Site Found by AI, Improve My README, Helpdock | Local-first: one command runs a whole app on your computer | Your computer; public MCP servers only for read-only checks | Developers and their AI assistants | Now: free launch on 2026-10-31 | Get a working app running without an account |
| **Owner** (business) | Free listings, no account, no key, nothing stored | Read-only servers plan, check or score; no hosting for users | Public HTTPS endpoints on `*.flisk.si`, `*.flisk.sh` | The company (Flisk), its maintainers, reviewers at each directory | Listing dates per marketplace (section 3) | Be found where people look for tools |
| **Designer** (system) | Manifests: `plugin.json`, `.mcp.json`, `action.yml`, `server.json` (registry), Actor input schemas | Tools with annotations (`readOnlyHint`), prompts, skills | `/mcp` on each host; icon at `/icon-512.png`; `.well-known` challenges where needed | Client users and the reviewer | Versioned releases; tags `v1` for Actions | Consistent names in words people type |
| **Builder** (technology) | Cloudflare Workers (4 MCP servers), Render (Citable, README Score, Helpdock), npm `@flisk-sh/flisk`, Apify Actors (Bun/Node) | Streamable HTTP MCP (JSON-RPC 2.0), GitHub Actions composite, Apify push | Cloudflare DNS (proxied), Render custom domains, GitHub Pages (pages.flisk.si site) | Maintainers with the Cloudflare, Render, npm and Apify logins | Deploy on merge (Render) or `wrangler deploy` (Workers) | Ship small, read-only, keyless services |
| **Out-of-context** (subcontractor) | Marketplace rules: Claude directory fields, Toolradar Auto-fill, Apify SEO fields, Glama `glama.json`, awesome-list formats | Forms, checks, scans, reviews (up to 10 business days) | Each marketplace's own site | Directory reviewers, Toolradar and Anthropic staff | Review queues (24 h to 10 business days) | Their trust and safety rules |
| **Running** (product) | 91 protocol and plugin checks pass; 2 known failures (section 4) | Tools and prompts answer; icons served | Live: mcp.flisk.sh, pages.flisk.si/mcp, citable.flisk.si/mcp, readme.flisk.si/mcp | Users in Claude, Claude Code, Gemini CLI, Cursor, Codex | Evidence per run in `skills/flisk-test-mcp/evidence/` | Real use shows what to fix next |

## 2. Products, tools, prompts and servers

### 2a. MCP servers (remote, read-only, keyless)

| Product | Server URL | Tools (what the AI calls) | Prompts (what the user picks) | Live check |
| --- | --- | --- | --- | --- |
| Build Me an App | `https://mcp.flisk.sh/mcp` | `plan_app`, `list_app_starters` | `build_my_app` (needs `what`), `pick_a_starter` | Pass |
| Put My Page Online | `https://pages.flisk.si/mcp` | `check_page`, `how_to_put_page_online` | `put_my_page_online` | Pass |
| Get My Site Found by AI (Citable) | `https://citable.flisk.si/mcp` | `check_site` | `check_my_site` (needs `url`) | Pass |
| Improve My README (README Score) | `https://readme.flisk.si/mcp` | `score_readme` | `improve_my_readme` (needs `repo`) | Pass |
| Flisk docs (Helpdock, a help center, not an app builder) | `https://helpdock.flisk.sh/mcp` | `search_docs`, `ask_help_center` | none yet (planned: `ask_the_docs`, `find_docs_for`, `how_do_i`, `fix_this_error`) | **Fail**: 406 for a JSON-only client until its fix ships |
| Flisk CLI (local, stdio) | `flisk mcp` (plugin `flisk-claude`) | Flisk CLI tools (see the plugin) | see the plugin | Plugin check pass |

### 2b. Plugins (folders in GitHub repos)

| Plugin | Repo and path | Skills | MCP config | State |
| --- | --- | --- | --- | --- |
| Flisk | `flisk-sh/flisk` `plugins/flisk-claude` | flisk skills | local stdio `scripts/flisk-mcp.sh` | In review (Claude directory) |
| Put My Page Online | `flisk-sh/pages` `plugins/put-my-page-online` | `put-page-online` | `pages.flisk.si/mcp` | Form validated; waiting for the user's terms and Submit |
| AI Search Checker | `flisk-sh/citable` `plugins/ai-search-checker` | check-site | `citable.flisk.si/mcp` | Scan passed; publish needs the user |
| README Checker | `flisk-sh/readme-score` `plugins/readme-checker` | improve-readme | `readme.flisk.si/mcp` | Scan passed; publish needs the user |

### 2c. Other installable pieces

| Piece | Where | Status |
| --- | --- | --- |
| CLI | npm `@flisk-sh/flisk` | Published |
| Citable CLI | npm `@flisk-sh/citable` 0.1.0 | Published |
| README Score CLI | npm `@flisk-sh/readme-score` | **Not published** (needs the user's npm sign-in) |
| Pages CLI | npm `@flisk-sh/pages` | **Not published** (the Action runs it from the repo) |
| GitHub Actions | `flisk-sh/citable@v1`, `flisk-sh/readme-score@v1`, `flisk-sh/pages@v1` | Tagged; Marketplace listing for each is not done |
| Apify Actors | `flisk/flisk-app-starter`, `flisk/flisk-stack-scanner` | Live on Apify Store |
| Docker images | Flisk stack images | **Prebuilt layers on Docker Hub: missing** |
| Agent skills | `flisk-skills` repo | Exists; installable from GitHub |

### 2d. Skills (in this repo, copied to `~/.claude/skills`)

| Skill | Used for |
| --- | --- |
| `flisk-distribute` | Overview: what is listed where, conventions |
| `flisk-install-mcp` | Steps for a user to add a server to Claude, Claude Code, Gemini CLI, Cursor, Codex |
| `flisk-list-claude-connector` | Claude directory connector form |
| `flisk-list-claude-plugin` | Claude directory plugin form |
| `flisk-list-github-action` | GitHub Actions Marketplace release |
| `flisk-list-marketplaces` | Apify, MCP Registry, Glama, Smithery, mcp.so, awesome lists |
| `flisk-list-openai-plugin` | ChatGPT and Codex package (parked) |
| `flisk-list-toolradar` | Toolradar submit or claim |
| `flisk-test-mcp` | Test every server and plugin, keep evidence |

## 3. Where each product is listed

| Marketplace | Build Me an App | Put My Page Online | Citable | README Score | Helpdock | Flisk CLI | Flisk demos |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Claude directory: connector | Published, prompts listed | Draft, step 8 of 10 | Published, icon edit in review | Published, icon edit in review | **Not added** (blocked by the 406) | n/a | n/a |
| Claude directory: plugin | n/a | Validated, waiting for terms | Scan passed, publish needs the user | Scan passed, publish needs the user | n/a | In review | n/a |
| Claude Code plugin marketplace | n/a | via plugin | via plugin | via plugin | n/a | `flisk-sh/flisk` marketplace | n/a |
| Toolradar | Being checked (submitted 2026-10-31) | Being checked (submitted 2026-10-31) | Being checked (submitted 2026-10-31) | Being checked (submitted 2026-10-31) | Not submitted | Live (2026-10-25) | Live (2026-10-25) |
| Official MCP Registry | n/a | not listed | not listed | not listed | not listed | Listed `io.github.flisk-sh/flisk` | n/a |
| Glama | n/a | not listed | not listed | not listed | not listed | Listed | n/a |
| Apify Store | n/a | n/a | n/a | n/a | n/a | n/a | n/a (Actors: App Starter, App Checker live) |
| GitHub Actions Marketplace | n/a | not done | not done | not done | n/a | n/a | n/a |
| npm | n/a | not published | published (0.1.0) | not published | n/a | published | n/a |
| OpenAI (ChatGPT, Codex) | parked (ID check) | parked | parked | parked | n/a | n/a | n/a |
| Smithery, mcp.so, Cursor Directory | not done (need login) | not done | not done | not done | not done | not done | n/a |
| Awesome lists | awesome-mcp-servers, awesome-vibe-coding, awesome-ai-coding-tools: PRs open (flisk CLI) | | | | | | |

## 4. What is missing (and who does it)

| # | Gap | Why it matters | Who |
| --- | --- | --- | --- |
| 1 | **Prebuilt Docker layers on Docker Hub** | Users wait for builds on first run; the demo is the top priority | Maintainer (Docker Hub login) |
| 2 | Helpdock fix (406) deployed | Blocks the Claude directory and Toolradar listings for Helpdock | Approve the Render deploy (helpdock#5) |
| 3 | Helpdock prompts | Users need the common phrasings ("how do I", "docs for", pasted errors) | Maintainer after #5 |
| 4 | Tick and Submit: Build Me an App (self-test + policy), Put My Page Online, Pages plugin | Listings cannot go to review without it | User (legal confirmations) |
| 5 | Publish: AI Search Checker and README Checker plugins | Scans passed; they wait for the publish click | User |
| 6 | Toolradar confirmation for Pages and Citable | "Being checked" until the domain is confirmed | User (domain email or claim) |
| 7 | Icons on the two published connectors | Letters show until Anthropic approves the pending edits | Anthropic (email sent 2026-10-31) |
| 8 | npm for README Score and Pages | The CLIs cannot be installed from npm | User (npm web sign-in) |
| 9 | GitHub Actions Marketplace for Pages, Citable, README Score | Listing as Actions | Maintainer (release with the Marketplace box) |
| 10 | Smithery, mcp.so, Cursor Directory | Extra reach | User (login) |
| 11 | OpenAI platform | Needs the ID check, a domain token per server, terms and a demo video | User, later |
| 12 | Demo video and real terms | OpenAI requires both; a draft terms file exists | User |

## 5. Ways a user reaches us

| Path | Steps | Done? |
| --- | --- | --- |
| Claude app (web, desktop, mobile) | Settings, Connectors, add the URL; or the directory listing | Connector URLs work |
| Claude Code | `claude mcp add --transport http …` or the plugin marketplace | Works |
| Gemini CLI, Cursor, Codex | Config snippets in `INSTALL.md` | Written from memory; check each client |
| ChatGPT | Developer mode connector | Not verified |
| Toolradar readers | Product pages | Pending review |
| Apify Store | Search, then run the Actor | Live; not in search results yet |
| npm | `npx @flisk-sh/flisk` | Works |
| GitHub Actions | `uses: flisk-sh/<app>@v1` | Works from the tag; not in Marketplace |

## 6. Tools and prompts at a glance

| Server | Tool | Read-only | What a user types that reaches it |
| --- | --- | --- | --- |
| Build Me an App | `plan_app` | yes | "plan an online shop", "I want a booking app" |
| Build Me an App | `list_app_starters` | yes | "what starter apps are there" |
| Put My Page Online | `check_page` | yes | "check this page before I put it online" |
| Put My Page Online | `how_to_put_page_online` | yes | "how do I put my page online" |
| Citable | `check_site` | yes | "can ChatGPT find my site" |
| README Score | `score_readme` | yes | "score my README" |
| Helpdock | `search_docs` | yes | "docs for deploy", pasted error text |
| Helpdock | `ask_help_center` | yes | "how do I start", "what is X" |

## Update rules

- Change a status here in the same PR that changes the listing or the server.
- Tests and evidence: run `skills/flisk-test-mcp` before updating a live status.
- Dates are the day the status was checked.
