# Claude directory

Listings for `claude.ai/directory/manage` (Anthropic's directory of connectors and plugins). Status as of **2026-10-31**.
The playbook, with every trap hit so far, is the skill in [`skills/flisk-distribute`](../skills/flisk-distribute/SKILL.md).

## Connectors (one remote MCP server each)

| Display name | Slug | Server | Icon | State |
| --- | --- | --- | --- | --- |
| Build Me an App | `flisk-app-builder` (slug can't change) | `https://mcp.flisk.sh/mcp` | `https://mcp.flisk.sh/icon-512.png` | Draft after edits; the user ticks the policy boxes and submits |
| Put My Page Online | `put-my-page-online` | `https://pages.flisk.si/mcp` | `https://pages.flisk.si/icon-512.png` | Draft at step 8 |
| Get My Site Found by AI | `ai-search-checker` | `https://citable.flisk.si/mcp` | `https://citable.flisk.si/icon-512.png` | Published; rename in review |
| Improve My README | `readme-checker` | `https://readme.flisk.si/mcp` | `https://readme.flisk.si/icon-512.png` | Published; rename in review |

Not listed yet: Helpdock (`https://helpdock.flisk.sh/mcp`, "Flisk docs" help center; it is not an app builder).

## Plugins (a folder in a GitHub repo)

| Plugin | Repo and path | State |
| --- | --- | --- |
| Flisk | `flisk-sh/flisk`, `plugins/flisk-claude` | In review |
| Put My Page Online | `flisk-sh/pages`, `plugins/put-my-page-online` | Form filled and validated; waiting for the terms boxes |
| AI search checker | `flisk-sh/citable`, `plugins/ai-search-checker` | Submitted, awaiting a reviewer |
| Improve My README | `flisk-sh/readme-score`, `plugins/readme-checker` | Submitted, awaiting a reviewer |

## Rules we follow

- Names are the words people type, in plain English.
- The directory takes the favicon of the registrable domain, so always set a custom icon URL to the server's own `/icon-512.png`.
- A person ticks the policy checkboxes and presses the final Submit; everything else can be filled by an agent.
- MCP host is `<app host>/mcp`.
