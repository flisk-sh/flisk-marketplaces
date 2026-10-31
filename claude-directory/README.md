# Claude directory

Listings for `claude.ai/directory/manage` (Anthropic's directory of connectors and plugins). Status as of **2026-10-31** (updated at the end of the day).
The playbook, with every trap hit so far, is the skill in [`skills/flisk-distribute`](../skills/flisk-distribute/SKILL.md).

## Connectors (one remote MCP server each)

| Display name | Slug | Server | Icon | Prompts | State |
| --- | --- | --- | --- | --- | --- |
| Build Me an App | `flisk-app-builder` (slug can't change) | `https://mcp.flisk.sh/mcp` | `https://mcp.flisk.sh/icon-512.png` | `build_my_app`, `pick_a_starter` | Renamed from "Flisk App Builder"; back to Draft after the edits; the user presses Submit. One listing only: a second "build-me-an-app" draft by another session should be dropped |
| Put My Page Online | `put-my-page-online` | `https://pages.flisk.si/mcp` | `https://pages.flisk.si/icon-512.png` | `put_my_page_online` | Draft at step 8 of 10; the self-test box, the compliance boxes and Submit are the user's. The MCP lives at `pages.flisk.si/mcp` (route `pages.flisk.si/mcp*`, record proxied); repo PR #57 merged |
| Get My Site Found by AI | `ai-search-checker` | `https://citable.flisk.si/mcp` | `https://citable.flisk.si/icon-512.png` | `check_my_site` (live; add to listing after the icon edit is approved) | Published; rename in review |
| Improve My README | `readme-checker` | `https://readme.flisk.si/mcp` | `https://readme.flisk.si/icon-512.png` | `improve_my_readme` (live; add to listing after the icon edit is approved) | Published; rename in review |

Not listed yet: Helpdock (`https://helpdock.flisk.sh/mcp`, "Flisk docs" help center; it is not an app builder).

## Plugins (a folder in a GitHub repo)

| Plugin | Repo and path | State |
| --- | --- | --- |
| Flisk | `flisk-sh/flisk`, `plugins/flisk-claude` | In review |
| Put My Page Online | `flisk-sh/pages`, `plugins/put-my-page-online` | Form filled and validated through step 4 of 5 (answers No/No/Not retained/No); waiting for the four terms boxes and Submit |
| AI search checker | `flisk-sh/citable`, `plugins/ai-search-checker` | Submitted, awaiting a reviewer |
| Improve My README | `flisk-sh/readme-score`, `plugins/readme-checker` | Submitted, awaiting a reviewer |

## Rules we follow

- Every connector lists its **prompts** as well as its tools, and the prompts must answer `prompts/list` on the live server first.

- Names are the words people type, in plain English.
- The directory takes the favicon of the registrable domain, so always set a custom icon URL to the server's own `/icon-512.png`.
- A person ticks the policy checkboxes and presses the final Submit; everything else can be filled by an agent.
- MCP host is `<app host>/mcp`.

## Evidence

Taken 2026-10-31 from `claude.ai/directory/manage` (the list only, no account details):

![Claude directory submissions](../docs/evidence/claude-directory-submissions.png)

What it shows: plugin Flisk **with a reviewer**; plugins AI Search Checker and README Checker **scan passed, publish requested, waiting for an Anthropic reviewer**; connectors AI Search Checker and README Checker **published**; connector Build Me an App **draft**. The two published connectors still show a letter ("A", "B") in this list instead of their icon: the custom icon URL is set on the listing, and the public page needs a re-check.
