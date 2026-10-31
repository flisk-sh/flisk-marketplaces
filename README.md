<div align="center">

# ⚡ Flisk: from one sentence to a running app

**Five apps a batch. One board. Every channel.**
Free, no account, no API key, nothing stored.

[Install the MCP servers](INSTALL.md) · [Full framework](FRAMEWORK.md) · [Marketplace rules](MARKETPLACES.md) · [Skills](skills)

</div>

---

## 🧭 The board (Zachman, read it like a map)

Each column is one question people ask. Each row is one stage, from idea to proof.

| Stage | ❓ **What** | 🛠 **How** | 📍 **Where** | 👥 **Who** | ⏱ **When** | 💡 **Why** |
| --- | --- | --- | --- | --- | --- | --- |
| **1 · Idea** | 7 products (apps, checkers, docs) | One command runs a whole app locally | Your computer | Developers + their AI | Now (launch 2026-10-31) | Running app, no account |
| **2 · Promise** | Free, read-only, keyless | Plan, check, score; no hosting | `*.flisk.si`, `*.flisk.sh` | The company | Listing per marketplace | Trust: nothing stored |
| **3 · Shape** | Tools, prompts, icons, manifests | Streamable HTTP MCP, JSON-RPC | `/mcp` on each host | Users in Claude, Codex, Gemini | Versioned | Names people type |
| **4 · Ship** | 4 live servers, 4 plugins, CLI on npm | Cloudflare Workers, Render, Apify | Cloudflare, Render, GitHub | Maintainers | Deploy on merge | Small, safe services |
| **5 · Listed** | Directories and stores | Forms, scans, reviews | Claude, Toolradar, Glama, PH | Reviewers | 24 h to 10 business days | Their trust rules |
| **6 · Proof** | 91 checks pass, 2 known | `flisk-test-mcp` evidence | `skills/flisk-test-mcp/evidence/` | Real users | Each run | Shows what to fix next |

---

## ⚡ Our apps

<table>
<tr>
<td width="50%" valign="top">

### ⚡ Build Me an App
Say what you want. Get the parts, and the exact commands to run it.
**MCP:** `mcp.flisk.sh/mcp` · **Tools:** `plan_app`, `list_app_starters` · **Prompts:** `build_my_app`, `pick_a_starter`

</td>
<td width="50%" valign="top">

### 📄 Put My Page Online
Check a page, fix what it lists, get a free public link.
**MCP:** `pages.flisk.si/mcp` · **Tools:** `check_page`, `how_to_put_page_online` · **Prompts:** `put_my_page_online`

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🔎 Get My Site Found by AI
Can ChatGPT, Claude and Perplexity find and quote your site? A score and the fix for each problem.
**MCP:** `citable.flisk.si/mcp` · **Tools:** `check_site` · **Prompts:** `check_my_site`

</td>
<td width="50%" valign="top">

### ✅ Improve My README
A README scored out of 100, with a fix for every miss. Same README, same score.
**MCP:** `readme.flisk.si/mcp` · **Tools:** `score_readme` · **Prompts:** `improve_my_readme`

</td>
</tr>
</table>

---

## 🗺 Distribution board: where each app is

✅ live · ⏳ in review / being checked · 🟡 draft · ⛔ blocked · ⬜ not started · — not for this app

| Channel | Build Me an App | Put My Page Online | Get My Site Found by AI | Improve My README | Flisk CLI |
| --- | :---: | :---: | :---: | :---: | :---: |
| 🧰 **Toolbox** (Toolradar) | ⏳ | ⏳ | ⏳ | ⏳ | ✅ |
| 🚀 **Product Hunt** | ⬜ | ⬜ | ✅ launched today | ⬜ | ⬜ |
| 🧩 **Claude directory** (connector) | ✅ | 🟡 | ✅ | ✅ | — |
| 🧩 **Claude directory** (plugin) | — | ⏳ waiting for terms | ⏳ scan passed | ⏳ scan passed | ⏳ |
| 📚 **Official MCP Registry** | — | ⬜ | ⬜ | ⬜ | ✅ |
| 🔌 **Glama** | — | ⬜ | ⬜ | ⬜ | ✅ |
| 🛒 **Apify Store** | — | — | — | — | ✅ Actors |
| ⚙️ **GitHub Actions Marketplace** | — | ⬜ | ⬜ | ⬜ | — |
| 📦 **npm** | — | ⬜ | ✅ 0.1.0 | ⬜ | ✅ |
| 🤖 **OpenAI (ChatGPT, Codex)** | ⏸ | ⏸ | ⏸ | ⏸ | — |
| 🔧 **Smithery, mcp.so, Cursor** | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

### 🖼 Proof, screenshots

<table>
<tr>
<td width="50%"><img src="docs/evidence/claude-directory-build-me-an-app.jpg" alt="Build Me an App in the Claude directory"><br><sub><b>Claude directory:</b> Build Me an App, published, with its prompts.</sub></td>
<td width="50%"><img src="docs/evidence/toolradar-submissions.jpg" alt="Toolradar submissions"><br><sub><b>Toolbox (Toolradar):</b> four submissions being checked.</sub></td>
</tr>
<tr>
<td width="50%"><img src="docs/evidence/claude-directory-submissions.png" alt="Claude directory queue"><br><sub><b>Claude directory:</b> the plugin and connector queue.</sub></td>
<td width="50%"><img src="docs/evidence/mcp-registry.jpg" alt="Official MCP Registry"><br><sub><b>Official MCP Registry:</b> Flisk listed.</sub></td>
</tr>
<tr>
<td width="50%"><img src="docs/evidence/glama-flisk-app-builder.jpg" alt="Glama listing"><br><sub><b>Glama:</b> Flisk App Builder listed.</sub></td>
<td width="50%"><img src="docs/evidence/apify-app-starter.jpg" alt="Apify App Starter"><br><sub><b>Apify Store:</b> App Starter, live.</sub></td>
</tr>
</table>

---

## 🏭 The app factory: five apps per batch

The factory ships apps in batches of five. Each app goes through the same six stages of the board, and nothing is listed until its proof is in.

| Slot | App (name in plain words) | Stage now | Next step | Owner |
| :---: | --- | --- | --- | --- |
| 1 | Build Me an App | 5 · Listed | Tick and Submit on Claude directory; Toolbox review | User (ticks) |
| 2 | Put My Page Online | 4 · Ship | Terms, Submit, then Toolbox confirm | User, then agent |
| 3 | Get My Site Found by AI | 5 · Listed | Product Hunt reply, publish plugin | User |
| 4 | Improve My README | 5 · Listed | Publish plugin, npm for the CLI | User |
| 5 | Helpdock (docs help center) | 4 · Ship | Approve the connection-fix deploy, prompts, then directory | User approves the deploy |
| 6–10 | *next batch, to fill* | 1 · Idea | Name in plain words, one-line promise, four tools | Factory planner |

### The per-app checklist (every app, every batch)

| # | Step | Proof you can show |
| :---: | --- | --- |
| 1 | Name it in words people type | Name in the table above |
| 2 | Server answers `initialize`, `tools/list`, `prompts/list` | `flisk-test-mcp` evidence JSON |
| 3 | Icon at `/icon-512.png`, favicon served | Test pass |
| 4 | Read-only tools, no account, nothing stored | Reviewer notes |
| 5 | Listing copy: one-liner, description, "best for" (check Auto-fill) | Toolbox form, checked |
| 6 | Screenshot for each listing | Row in "Proof" above |
| 7 | Submit where a person presses it (ticks are yours) | Listing status |
| 8 | Launch day: Product Hunt, with the maker comment | Launch page |

---

## 🧰 Toolbox, Product Hunt and the rest

- **Toolbox** is Toolradar (11,700+ tools): free listing, Auto-fill, two submissions per hour, a domain check by email or claim. Rules: [toolradar/](toolradar/README.md).
- **Product Hunt** is the launch day. Citable is live today (2026-10-31, "Your website is the cave wall. Can AI read it?"). Launch assets are in `citable/video/ph/`.
- **Claude directory** rules and states: [claude-directory/](claude-directory/README.md).

---

## 🔌 Use it in your AI (30 seconds)

| Your AI | Do this |
| --- | --- |
| **Claude** (web, desktop, mobile) | Settings → Connectors → add the URL, or find it in the Claude directory |
| **Claude Code** | `claude mcp add --transport http flisk-app-builder https://mcp.flisk.sh/mcp` |
| **Gemini CLI, Cursor, Codex** | Paste the snippet in [INSTALL.md](INSTALL.md) |

Every server is **read-only**. It plans, checks or scores. It creates nothing, sends nothing and stores nothing.

---

## 🧱 What is still missing

| | Gap | Owner |
| :---: | --- | --- |
| 🐳 | **Prebuilt Docker layers on Docker Hub** (faster first run for the demo) | Maintainer |
| 🔧 | Helpdock connection fix deployed | User approves deploy |
| 📦 | npm for README Score and Pages | User (npm sign-in) |
| ⚙️ | GitHub Actions Marketplace for Pages, Citable, README Score | Maintainer |
| 🤖 | OpenAI: ID check, domain tokens, terms, demo video | User, later |

<details>
<summary><b>For maintainers</b></summary>

- Detail for each gap and each channel: [FRAMEWORK.md](FRAMEWORK.md) · [MARKETPLACES.md](MARKETPLACES.md)
- Skills (copied to `~/.claude/skills`): [distribute](skills/flisk-distribute/SKILL.md) · [install](skills/flisk-install-mcp/SKILL.md) · [claude connector](skills/flisk-list-claude-connector/SKILL.md) · [claude plugin](skills/flisk-list-claude-plugin/SKILL.md) · [github action](skills/flisk-list-github-action/SKILL.md) · [marketplaces](skills/flisk-list-marketplaces/SKILL.md) · [openai](skills/flisk-list-openai-plugin/SKILL.md) · [toolbox](skills/flisk-list-toolradar/SKILL.md) · [test](skills/flisk-test-mcp/SKILL.md)
- Test every server and plugin: `python3 skills/flisk-test-mcp/test_mcp.py evidence/run --plugins-root ~/tdk-pr-work`
- Apify Actors: `apify/` · `apify push` · end-to-end `e2e/apify.sh`

</details>
