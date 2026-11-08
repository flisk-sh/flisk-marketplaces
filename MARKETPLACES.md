# Where Flisk is listed, and what is left

Re-checked 2026-11-08 (each row says when it was last checked). "Verified" means I called the marketplace or read the file; "from search" means a third-party page said so and it still needs a look.

| # | Marketplace | What goes there | Status | Next step |
| --- | --- | --- | --- | --- |
| 1 | [Apify Store](https://apify.com/store) | 2 Actors: [`flisk/flisk-app-starter`](https://apify.com/flisk/flisk-app-starter), [`flisk/flisk-stack-scanner`](https://apify.com/flisk/flisk-stack-scanner) | **Published** 2026-10-29; both public pages answered 200 on 2026-11-08; icons and SEO fields set; `e2e/apify.sh` passed on 2026-10-29 | **Not found by search** (checked 2026-11-08): the store API counts 2 Actors for the owner `flisk` but returns neither (`total: 2`, `items: []`), and a search for the exact title counts 1 and returns 0. So they are indexed and then filtered out. It is not categories: the Console says they are auto-assigned (Developer tools, Developer & tech), and every publishing check that shows one has passed. Cause unknown; ask Apify support |
| 2 | [Official MCP Registry](https://registry.modelcontextprotocol.io) | `flisk mcp` server | **Listed** as `io.github.flisk-sh/flisk`, 21 versions, latest 1.4.42 published 2026-11-08 (verified via the registry API; every release publishes a new version) | none |
| 3 | [PulseMCP](https://www.pulsemcp.com) | same server | Submissions **paused** as of 2026-10-07 (from search). Re-checked in a browser on 2026-11-08: the banner still says submissions and listing changes are paused, and searching "flisk" shows 0 servers | Wait for submissions to reopen |
| 4 | [Glama](https://glama.ai/mcp/servers/flisk-sh/flisk) | same server, listed as "Flisk App Builder" | **Approved and listed** (verified 2026-11-08, page loads) | Done 2026-10-30: `glama.json` in the flisk repo root, claimed, then a release made from a passing build test (admin Dockerfile page: build step `npm install -g @flisk-sh/flisk@latest`, CMD `flisk mcp`). On 2026-11-08 the page shows 23 tools and a Tool Definition Quality Score of 3.9 out of 5.0 (scored 2026-11-08 01:02). The old 58% score was not re-read |
| 5 | [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | one list line | **PR open**: [#18048](https://github.com/punkpeye/awesome-mcp-servers/pull/18048), still open and unmerged on 2026-11-08, no review or maintainer reply since the 2026-10-30 Glama note | Wait for review |
| 6 | [Smithery](https://smithery.ai) | same server | **Skipped** (checked 2026-11-08): Smithery shut down accounts, API keys, CLI and proxy on 2026-10-31 and is now a curated public directory powered by Arcade; `smithery.ai/new` is gone | none |
| 7 | [mcp.so](https://mcp.so/submit) | same server | **Paid only** (checked 2026-11-08): the submit form offers a $39 one-time "Paid submission" and no free option | Skip unless the maintainer decides to pay |
| 8 | Claude Code plugin marketplace | `flisk-cli` plugin | **Exists** in `flisk-sh/flisk` (`.claude-plugin/marketplace.json`, verified) | Users run `/plugin marketplace add flisk-sh/flisk` |
| 9 | [skills.sh](https://skills.sh) / agent skills | `flisk-sh/flisk-skills` | Repo exists (verified 2026-11-08: 3 stars, last push 2026-11-01). `skills.sh/flisk-sh/flisk-skills` answers 404 (re-checked 2026-11-08, after its redirect to `www.skills.sh`), so it has no skills.sh page yet; installs straight from GitHub (from search) | Check `npx skills add flisk-sh/flisk-skills` works on a machine with npm, then see whether the page appears |
| 10 | [Cursor Directory](https://cursor.directory/plugins/flisk) | `flisk-cli` plugin (`flisk-sh/flisk`: 1 MCP server `flisk mcp` and 13 skills) | **Submitted** 2026-11-08 by the maintainer (GitHub sign-in; the first sign-in hit "Database error saving new user" on their side, the retry worked). The listing page exists but is **unpublished and hidden**: first "Scanning your plugin", then "Scan failed. An admin will re-run it shortly." It shows the scan's defaults (name "flisk", description "flisk plugin for Cursor") instead of the name, description and logo filled in on the form | Wait for the admin re-run, then open `cursor.directory/plugins/flisk` signed in and see whether the name, description and logo can be edited; if not, resubmit |
| 11 | [Docker Hub](https://hub.docker.com/u/alexdykyi) and [GHCR](https://github.com/orgs/flisk-sh/packages) | prebuilt golden layers (L1, L2, L3 backend and frontend, L4 backend, backend-node, frontend and migrator) | **Live as a mirror** (checked 2026-11-08): the 8 `golden-*` images are on `docker.io/alexdykyi` (pulls between 200 and 250 each, last pushed 2026-11-07) and on `ghcr.io/flisk-sh`, which `flisk up` pulls by default. The `flisk-sh` Docker Hub organization does not exist: free organizations are no longer offered, and Docker's open-source program application was rejected on 2026-10-31 because Flisk has a Premium tier | Stay on `alexdykyi`, or buy a Docker Team plan for `flisk-sh`. A new `golden-*` package on GHCR starts private: set it public. The flisk repo's `docs/troubleshoot-l1.md` was corrected on 2026-11-08 (flisk-sh/flisk#3371) |
| 12 | [Homebrew tap](https://github.com/flisk-sh/homebrew-tap) | `flisk` formula (release binary and engine) | **Live** 2026-11-08: `brew install flisk-sh/tap/flisk`. An hourly workflow takes each new release, tests it on macOS arm64, macOS Intel and Linux x86-64, then pushes it. Linux arm64 is not tested | none. Homebrew core is over the 500-star PR cap |
| 13 | [Scoop bucket](https://github.com/flisk-sh/scoop-bucket) | `flisk` manifest for Windows (release binary and engine) | **Live** 2026-11-08: `scoop bucket add flisk https://github.com/flisk-sh/scoop-bucket`, then `scoop install flisk/flisk`. An hourly workflow takes each new release, tests it on `windows-latest`, then pushes it | none. Scoop's own Main bucket and winget-pkgs are PRs to large repos, check the star cap first |

I did not create accounts or sign in for the rows above. #7 still needs payment, #10 waits on Cursor's scan, and #11 needs a plan decision.

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

## Directories that index GitHub by themselves

Searched for "flisk" in a browser on 2026-11-08. There is nothing to submit to these.

| Site | Result |
| --- | --- |
| [claude-plugins.dev](https://claude-plugins.dev/skills) | No Flisk result; the site says public skills on GitHub are indexed automatically |
| [SkillsMP](https://skillsmp.com) | No Flisk result |
| [skills.sh](https://skills.sh) | No page for `flisk-sh/flisk-skills` (404), see #9 |

## Free places not tried yet

Rules read on each site's own page on 2026-11-09. Unless a row says so, nothing here has been submitted.

| Site | Free option | Needs | Fit |
| --- | --- | --- | --- |
| [MCP Market](https://mcpmarket.com/submit) | Free queue, 4 to 6 weeks ($29 skips it) | GitHub repo URL | Good: `flisk mcp` |
| [Terminal Trove](https://terminaltrove.com/submit/) | **Submitted** 2026-11-08 by the maintainer (the page said "Thank you for your submission!"); waits for the curator | Web form used, so no email needed | Good: cross-platform CLI with binaries |
| [Show HN](https://news.ycombinator.com/item?id=50187746) | **Already posted** 2026-10-21 by the maintainer: 5 points, 13 comments. An earlier plain submission ([49924046](https://news.ycombinator.com/item?id=49924046), 1 October, under the TDK name) got 1 point | A repeat needs a real change, Show HN does not count minor updates. A draft is in `docs/drafts/show-hn.md` in the flisk repo | Done once |
| [Peerlist Launchpad](https://peerlist.io/launchpad) | No price shown; opens every Monday, 00:00 to 23:59 UTC | A Peerlist profile | Good: developers and designers |
| [Launching Next](https://www.launchingnext.com/submit/) | Free, no date promised ($99 for a 1-day review) | Name, email, 2,500-character description, tags, planned marketing spend | Fair |
| [Uneed](https://www.uneed.best/tool/flisk) | **Already listed** (logo uploaded 2026-10-26), page says "Launching Soon" | Free line, at least 50 days; a dofollow link needs 20 upvotes | Done, waiting for its date |
| [Fazier](https://fazier.com/submit) | Free, within 30 days | A link to Fazier on the homepage or footer | Fair: needs a site change |
| [Changelog News](https://changelog.com/news/submit) | No price shown; refuses commercial products | Sign-in, URL, title | Unsure: Flisk has a Premium tier |
| [OpenSourceAlternative.to](https://www.opensourcealternative.to/submit) | Waitlist of 6+ months ($29 for 48 hours) | Must be self-hosted and replace a named proprietary tool | Poor |

Not readable: StackShare (429) and LibHunt (no submit page found). LobeHub's page does not say how servers are added.

## Other awesome lists

Checked 2026-10-30 (rules read, not just titles).

| List | Decision |
| --- | --- |
| [awesome-vibe-coding](https://github.com/awesome-vibe-coding/awesome-vibe-coding) | **PR open**: [#226](https://github.com/awesome-vibe-coding/awesome-vibe-coding/pull/226), CLI Tools. Disclosed as our own project, as its guide asks. Still open with no comments on 2026-11-08 |
| [wong2/awesome-mcp-servers](https://github.com/wong2/awesome-mcp-servers) | Skipped: no contribution rules in the repo; submissions go through mcp.so |
| [appcypher/awesome-mcp-servers](https://github.com/appcypher/awesome-mcp-servers) | Skipped: last updated May 2026 |
| [awesome-devops-mcp-servers](https://github.com/rohitg00/awesome-devops-mcp-servers) | Skipped: requires a DevOps focus; Flisk is an app builder |
| [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | Later: one resource at a time through its own process; best fit is the `flisk-skills` plugin |

Checked 2026-10-30, second round.

| List or directory | Decision |
| --- | --- |
| [awesome-ai-coding-tools](https://github.com/ai-for-developers/awesome-ai-coding-tools) | **PR open**: [#1144](https://github.com/ai-for-developers/awesome-ai-coding-tools/pull/1144), MCP Servers and Directories. Disclosed as our own project. Still open with no comments on 2026-11-08 |
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
| [Dev Hunt](https://devhunt.org/account/tools) | **6 tools listed, free plan**: Flisk CLI, DevEx Roadmap, Citable, README Score, Pages, Helpdock | Free listings wait in a queue (launch dates in 2031) and carry a nofollow link. The badge on the maker's site earns the "Maker links to DevHunt" mark: the dashboard shows "Your website links to DevHunt" for all 6 tools on 2026-11-08, and all six sites serve the badge (Pages after the `bun.lock` fix in flisk-sh/pages#168, DevEx Roadmap after flisk-sh/roadmap#22). Paid boost starts at $49 for a chosen week and a dofollow link: not bought |
| [OpenAlternative](https://openalternative.co/submit) | **Skipped** | Its guidelines exclude CLIs, libraries, SDKs, frameworks and MCP servers, and want 50+ stars and a named proprietary rival. Flisk is a CLI |
| [AlternativeTo](https://alternativeto.net/software/flisk/) | **Live** (checked 2026-11-08), submitted 2026-10-31 on the free queue | Page "Flisk" is listed as Freemium and open source for Mac, Windows and Linux, with 4 alternatives: DevSpace (for Kubernetes and Docker), Skaffold, Tilt Dev and Garden. See `docs` for the submissions |
| [SaaSHub](https://www.saashub.com/flisk) | **Live** (checked 2026-11-08); no "pending" notice any more | Shows 6 alternatives, open-source pricing and an "UP" status. No reviews yet |
| [SourceForge](https://sourceforge.net/projects/flisk/) | **Listed** 2026-11-08 (free) | Imported `flisk-sh/flisk` through the GitHub importer under the `omakase` account; homepage flisk.sh, topic Build Tools, license MIT. The importer asks for GitHub OAuth (public data only) and its URL box did not fill the owner and repo fields by itself. On 2026-11-08 I added the logo (the project icon only saves when the whole admin form is submitted with the file attached), a 47-character short summary (the field cuts at 70 characters), a full description and one feature line. OS categories were not re-checked
| [Indie Hackers](https://www.indiehackers.com/product/flisk) | **Product page live** (2026-11-08), details saved | The page's checklist still lists "Add an original post" (gated: new accounts must comment first or buy IH+) and "Add revenue data" (the page now shows $0 a month, checked 2026-11-08). Launch story drafted, not posted. On 2026-11-08 five comments and one reply were posted from the maker's account in other threads (each marked "an AI agent, for a person") to work toward the posting gate; the gate was still on right after the fifth (clicking "Write a new post…" shows "Publishing is open to established members"). A re-test is scheduled for 2026-11-09
| [mcpservers.org](https://mcpservers.org/submit) | **Submitted** 2026-11-08 by the maintainer, Free plan ($0, review within 2 weeks) | Name Flisk, category Development, repo link, registry name `io.github.flisk-sh/flisk`, remote connections off. Premium ($39) not bought |
| [mcp.directory](https://mcp.directory/submit) | **Submitted** 2026-11-08 by the maintainer; no fee or account asked for | Repo `flisk-sh/flisk`, npm `@flisk-sh/flisk`, one-sentence description. The site says it publishes within 24 hours. No page yet at submission time |
| [claudeskills.info](https://claudeskills.info/submit/) | **Closed** (checked 2026-11-08) | The submit page needs a Google sign-in, then says "Skill Submission Coming Soon" and shows no form. Check again later; it wants `SKILL.md`, `LICENSE` and a `/skills/` directory, which `flisk-skills` has |
| [BetaList](https://betalist.com/agent) | **Skipped** | Every plan (Lite, Standard, Premium) is paid; no free plan found |
| [mcp.so](https://mcp.so/submit) | **Skipped** | Paid only ($39), see #7 above |

Dev Hunt lessons:
- Its URL import ("Paste your website") could not read our sites, so the form is filled by hand: a logo file (we use each site's `/icon-512.png`), one screenshot, name, slogan, URL, repo, description, a first comment.
- Search on devhunt.org did not find "Flisk CLI". The dashboard at `/account/tools` is the reliable list.
- The badge image comes from `https://devhunt.org/badge/<slug>.svg`. A site with a Content-Security-Policy needs `https://devhunt.org` in `img-src`, or the browser hides it (Citable, README Score and Pages needed this).
- Each launch opens a "Launch plan" page that sells the $49 boost. The free listing is already saved; close it.
