# Flisk Marketplaces

Listings, Actors and packages that make [Flisk](https://flisk.sh) discoverable on public marketplaces. One folder per marketplace.

Flisk builds and runs a whole app on your computer with one command. These listings say that in plain words: what you can build (an online shop, a website, a booking app, an AI helper), not what the tool is called.

## Are we everywhere? Not yet.

Status on **2026-10-31**. Details, rules read and next steps are in [MARKETPLACES.md](MARKETPLACES.md).

| Where | State |
| --- | --- |
| [Apify Store: App Starter](https://apify.com/flisk/flisk-app-starter) | **Live.** Pick what to build, get a working app. Not yet in Store search results (index lag) |
| [Apify Store: App Checker](https://apify.com/flisk/flisk-stack-scanner) | **Live.** Not yet in Store search results |
| [Official MCP Registry](https://registry.modelcontextprotocol.io/?q=flisk) | **Live** as `io.github.flisk-sh/flisk` |
| [Glama](https://glama.ai/mcp/servers/flisk-sh/flisk) | **Live** as "Flisk App Builder", claimed, with a Glama release (2026-10-30, discovery score 58%). `glama.json` is in the flisk repo root. Quality rating still being evaluated |
| [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers/pull/18048) | PR open, waiting for review |
| [awesome-vibe-coding](https://github.com/awesome-vibe-coding/awesome-vibe-coding/pull/226) | PR open, waiting for review |
| [awesome-ai-coding-tools](https://github.com/ai-for-developers/awesome-ai-coding-tools/pull/1144) | PR open, waiting for review |
| [OpenAI (ChatGPT, Codex)](openai/) | **Parked** (2026-10-31). 4 plugin packages built, not submitted: the platform still asked for identity verification (Persona ID check, separate from billing), then each server needs a domain token, real terms and a demo video |
| [Toolradar](toolradar/README.md) | Flisk CLI and Flisk demos **live**; Pages and Citable submitted (waiting for the domain confirmation email); README Score and Build Me an App queued (2 submissions per hour). MCP connected |
| [Install the MCP servers](INSTALL.md) | How to add each server to Claude, Claude Code, Gemini CLI, Cursor and Codex |
| [Claude directory](claude-directory/README.md) | 4 connectors and 4 plugins, in different stages of review. See the folder for each one |
| mcp.so, Cursor Directory, Smithery | Not done: need a login |
| PulseMCP | Submissions paused (as of 2026-10-07) |
| Agent-skills lists (VoltAgent, heilcheng) | Not eligible yet: new repo, 2 stars |

## The apps and their MCP tools

All are remote, read-only and keyless (no account, nothing stored). How to add each one to Claude, Claude Code, Gemini CLI, Cursor, Codex and ChatGPT: [INSTALL.md](INSTALL.md).

| App | MCP server | Tools | Site | Repo |
| --- | --- | --- | --- | --- |
| Build Me an App | `https://mcp.flisk.sh/mcp` | `plan_app`, `list_app_starters` | [flisk.sh](https://flisk.sh) | [flisk-sh/flisk](https://github.com/flisk-sh/flisk) (`workers/app-builder-mcp`) |
| Put My Page Online | `https://pages.flisk.si/mcp` | `check_page`, `how_to_put_page_online` | [pages.flisk.si](https://pages.flisk.si) | [flisk-sh/pages](https://github.com/flisk-sh/pages) |
| Get My Site Found by AI (Citable) | `https://citable.flisk.si/mcp` | `check_site` | [citable.flisk.si](https://citable.flisk.si) | [flisk-sh/citable](https://github.com/flisk-sh/citable) |
| Improve My README (README Score) | `https://readme.flisk.si/mcp` | `score_readme` | [readme.flisk.si](https://readme.flisk.si) | [flisk-sh/readme-score](https://github.com/flisk-sh/readme-score) |
| Flisk docs (Helpdock, a docs help center, not an app builder) | `https://helpdock.flisk.sh/mcp` | `search_docs`, `ask_help_center` | [helpdock.flisk.sh](https://helpdock.flisk.sh) | |

## Where each channel is documented

| Channel | Folder | Skill |
| --- | --- | --- |
| Claude directory (connectors and plugins) | [claude-directory/](claude-directory/README.md) | `flisk-list-claude-connector`, `flisk-list-claude-plugin` |
| Apify Store, MCP Registry, Glama, awesome lists | [MARKETPLACES.md](MARKETPLACES.md), [apify/](apify), [glama/](glama) | `flisk-list-marketplaces` |
| OpenAI (ChatGPT, Codex), parked | [openai/](openai) | `flisk-list-openai-plugin` |
| Toolradar | [toolradar/](toolradar/README.md) | `flisk-list-toolradar` |
| GitHub Actions Marketplace | (in the app repos) | `flisk-list-github-action` |
| How a user adds a server | [INSTALL.md](INSTALL.md) | `flisk-install-mcp` |
| Overview and the table of what is listed | | `flisk-distribute` |

## Skills

In [`skills/`](skills). Copy a folder to `~/.claude/skills/` to use it in Claude Code.

| Skill | Use it to |
| --- | --- |
| [`flisk-distribute`](skills/flisk-distribute/SKILL.md) | See what is listed where, and the conventions (names, hosts, who ticks what) |
| [`flisk-install-mcp`](skills/flisk-install-mcp/SKILL.md) | Give a user the exact steps to add a server to their client |
| [`flisk-list-claude-connector`](skills/flisk-list-claude-connector/SKILL.md) | Submit or edit a connector in the Claude directory |
| [`flisk-list-claude-plugin`](skills/flisk-list-claude-plugin/SKILL.md) | Submit a plugin to the Claude directory and link it to its connector |
| [`flisk-list-github-action`](skills/flisk-list-github-action/SKILL.md) | Release an action and publish it to the GitHub Actions Marketplace |
| [`flisk-list-marketplaces`](skills/flisk-list-marketplaces/SKILL.md) | Apify, MCP Registry, Glama, Smithery, mcp.so, awesome lists |
| [`flisk-list-openai-plugin`](skills/flisk-list-openai-plugin/SKILL.md) | Package and submit a server to OpenAI as a plugin |
| [`flisk-list-toolradar`](skills/flisk-list-toolradar/SKILL.md) | Submit or claim a product on Toolradar |

## Evidence

Screenshots taken 2026-10-30 from the live pages.

**Apify: App Starter**
![Apify Store page for App Starter](docs/evidence/apify-app-starter.jpg)

**Apify: App Checker**
![Apify Store page for App Checker](docs/evidence/apify-stack-scanner.jpg)

**Glama: Flisk App Builder**
![Glama listing](docs/evidence/glama-flisk-app-builder.jpg)

**Claude directory: our submissions (plugins and MCP connectors)**
![Claude directory submissions page](docs/evidence/claude-directory-submissions.png)

**Official MCP Registry**
![Official MCP Registry search for flisk](docs/evidence/mcp-registry.jpg)

**Open pull requests**

![awesome-mcp-servers pull request 18048](docs/evidence/pr-awesome-mcp-servers-18048.jpg)
![awesome-vibe-coding pull request 226](docs/evidence/pr-awesome-vibe-coding-226.jpg)
![awesome-ai-coding-tools pull request 1144](docs/evidence/pr-awesome-ai-coding-tools-1144.jpg)

The Apify screenshots show a cookie banner and a survey bar from Apify's own page.

## What is tested

[`e2e/apify.sh`](e2e/apify.sh) runs both Actors on Apify for real. It downloads every starter from its signed link, checks it holds a valid project and that `flisk up --dry-run` plans it, runs the two website starters' printed steps, and checks the checker on a known-good app. It passes against the public Actors.

```bash
e2e/apify.sh        # needs apify-cli logged in, python3, curl, unzip; flisk is optional
```

## Publish to Apify

```bash
npm i -g apify-cli
apify login
cd apify/actors/flisk-app-starter   # or flisk-stack-scanner
apify push
```

Console fields like the name, description, icon and SEO text are set in Apify Console → Publication and are **not** overwritten by `apify push`.

## Layout

```
INSTALL.md                         add each MCP server to Claude, Gemini CLI, Cursor, Codex, ChatGPT
skills/                            one skill per channel (see Skills above)
claude-directory/                  connectors and plugins in the Claude directory
openai/                            OpenAI plugin packages (parked)
toolradar/                         Toolradar listing copy and status
apify/actors/flisk-app-starter/    pick what to build, get a working app
apify/actors/flisk-stack-scanner/  see every piece of an app in a GitHub link
apify/assets/                      the Flisk bolt icon
glama/Dockerfile                   the same setup as Glama's build form (build step and CMD), for local testing
e2e/apify.sh                       end-to-end check of the live Actors
docs/evidence/                     screenshots
MARKETPLACES.md                    every marketplace, its rules and next step
```

Add a new marketplace as its own top-level folder with its own README covering how to publish there.
