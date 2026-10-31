<div align="center">

# Flisk, everywhere your AI looks

**Build and run a whole app on your own computer, from one sentence.**
Free. No account. No API key. Nothing is stored.

[Install the MCP servers](INSTALL.md) · [Framework (maintainers)](FRAMEWORK.md) · [Marketplace rules](MARKETPLACES.md) · [Skills](skills)

</div>

---

## Our apps

<table>
<tr>
<td width="50%" valign="top">

### ⚡ Build Me an App
Say what you want: *an online shop, a booking app, a website with login.* Get the parts, and the exact commands to run it.

**MCP:** `https://mcp.flisk.sh/mcp`
**Tools:** `plan_app`, `list_app_starters`
**Prompts:** `build_my_app`, `pick_a_starter`

</td>
<td width="50%" valign="top">

### 📄 Put My Page Online
Check your page before it goes live, then get a free public link.

**MCP:** `https://pages.flisk.si/mcp`
**Tools:** `check_page`, `how_to_put_page_online`
**Prompts:** `put_my_page_online`

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🔎 Get My Site Found by AI
Can ChatGPT, Claude and Perplexity find, read and quote your site? Get a score and the fix for each problem.

**MCP:** `https://citable.flisk.si/mcp`
**Tools:** `check_site`
**Prompts:** `check_my_site`

</td>
<td width="50%" valign="top">

### ✅ Improve My README
A README scored out of 100, with a fix for every miss. Same README, same score, no AI guessing.

**MCP:** `https://readme.flisk.si/mcp`
**Tools:** `score_readme`
**Prompts:** `improve_my_readme`

</td>
</tr>
</table>

<details>
<summary><b>📚 Flisk docs, Helpdock</b> (a help center, not an app builder)</summary>

Ask how to use Flisk in plain words: *"how do I start", "docs for deploy", or paste an error.*

**MCP:** `https://helpdock.flisk.sh/mcp` · **Tools:** `search_docs`, `ask_help_center` · **Prompts:** coming soon.
Status: the connection fix is in review, so the Claude directory listing is waiting.

</details>

---

## Where we are listed

Status on **2026-10-31**. ✅ live · ⏳ in review · 🟡 draft · ⛔ blocked · ⬜ not started

| Where | Build Me an App | Put My Page Online | Get My Site Found by AI | Improve My README | Flisk CLI |
| --- | :---: | :---: | :---: | :---: | :---: |
| **Claude directory** (connectors) | ✅ published | 🟡 draft | ✅ published | ✅ published | — |
| **Claude directory** (plugins) | — | ⏳ waiting for terms | ⏳ scan passed | ⏳ scan passed | ⏳ in review |
| **Toolradar** | ⏳ being checked | ⏳ being checked | ⏳ being checked | ⏳ being checked | ✅ live |
| **Official MCP Registry** | — | ⬜ | ⬜ | ⬜ | ✅ |
| **Glama** | — | ⬜ | ⬜ | ⬜ | ✅ |
| **Apify Store** | — | — | — | — | ✅ Actors live |
| **GitHub Actions Marketplace** | — | ⬜ | ⬜ | ⬜ | — |
| **npm** | — | ⬜ not published | ✅ 0.1.0 | ⬜ not published | ✅ |
| **OpenAI (ChatGPT, Codex)** | ⏸ parked | ⏸ parked | ⏸ parked | ⏸ parked | — |
| **Smithery, mcp.so, Cursor** | ⬜ needs login | ⬜ | ⬜ | ⬜ | ⬜ |

### Screenshots

<table>
<tr>
<td width="50%"><img src="docs/evidence/claude-directory-build-me-an-app.jpg" alt="Build Me an App published in the Claude directory"><br><sub><b>Claude directory:</b> Build Me an App, published, with its prompts.</sub></td>
<td width="50%"><img src="docs/evidence/toolradar-submissions.jpg" alt="Toolradar submissions page"><br><sub><b>Toolradar:</b> Build Me an App, README Score, Citable and Pages are being checked.</sub></td>
</tr>
<tr>
<td width="50%"><img src="docs/evidence/claude-directory-submissions.png" alt="Claude directory submissions list"><br><sub><b>Claude directory:</b> the plugin and connector queue.</sub></td>
<td width="50%"><img src="docs/evidence/mcp-registry.jpg" alt="Official MCP Registry search for flisk"><br><sub><b>Official MCP Registry:</b> Flisk listed.</sub></td>
</tr>
<tr>
<td width="50%"><img src="docs/evidence/glama-flisk-app-builder.jpg" alt="Glama listing"><br><sub><b>Glama:</b> Flisk App Builder listed.</sub></td>
<td width="50%"><img src="docs/evidence/apify-app-starter.jpg" alt="Apify Store App Starter"><br><sub><b>Apify Store:</b> App Starter, live.</sub></td>
</tr>
</table>

---

## Use it in your AI (30 seconds)

| Your AI | Do this |
| --- | --- |
| **Claude** (web, desktop, mobile) | Settings → Connectors → add the URL, or find it in the Claude directory |
| **Claude Code** | `claude mcp add --transport http flisk-app-builder https://mcp.flisk.sh/mcp` |
| **Gemini CLI, Cursor, Codex** | Paste the snippet in [INSTALL.md](INSTALL.md) |
| **Anywhere** | Prompts: `build_my_app`, `put_my_page_online`, `check_my_site`, `improve_my_readme` |

Every server is **read-only**: it plans, checks or scores. It creates nothing, sends nothing and stores nothing.

---

## What is still coming

| | What | Why it matters |
| :---: | --- | --- |
| 🐳 | **Prebuilt Docker layers on Docker Hub** | First run is faster; the one-command demo gets quicker for everyone |
| 🔧 | Helpdock connection fix goes live | Unlocks Helpdock in the Claude directory and Toolradar |
| 📦 | npm for README Score and Pages | `npx` installs for those two |
| 🏪 | GitHub Actions Marketplace for Pages, Citable and README Score | Listed where teams already look |
| 🧭 | OpenAI (ChatGPT, Codex) | Waiting on identity verification, domain tokens, terms and a demo video |

Full detail, with owners for each gap: [FRAMEWORK.md](FRAMEWORK.md).

---

<details>
<summary><b>For maintainers</b></summary>

- **Status and rules per marketplace:** [MARKETPLACES.md](MARKETPLACES.md) · [claude-directory/](claude-directory/README.md) · [toolradar/](toolradar/README.md) · [openai/](openai) (parked)
- **Skills** (copied to `~/.claude/skills`): [`flisk-distribute`](skills/flisk-distribute/SKILL.md), [`flisk-install-mcp`](skills/flisk-install-mcp/SKILL.md), [`flisk-list-claude-connector`](skills/flisk-list-claude-connector/SKILL.md), [`flisk-list-claude-plugin`](skills/flisk-list-claude-plugin/SKILL.md), [`flisk-list-github-action`](skills/flisk-list-github-action/SKILL.md), [`flisk-list-marketplaces`](skills/flisk-list-marketplaces/SKILL.md), [`flisk-list-openai-plugin`](skills/flisk-list-openai-plugin/SKILL.md), [`flisk-list-toolradar`](skills/flisk-list-toolradar/SKILL.md), [`flisk-test-mcp`](skills/flisk-test-mcp/SKILL.md)
- **Test every server and plugin:** `python3 skills/flisk-test-mcp/test_mcp.py evidence/run --plugins-root ~/tdk-pr-work`
- **Apify Actors:** `apify/` · publish with `apify push` · end-to-end check `e2e/apify.sh`
- **Glama build check:** `glama/Dockerfile`

</details>
