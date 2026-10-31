---
name: flisk-list-claude-connector
description: Submit or edit a remote MCP server as a connector in the Claude directory (claude.ai/directory/manage): the 10-step form, icon, slug, categories and what the user must tick. Use when listing a new Flisk MCP server or fixing a connector listing.
---

# List a connector in the Claude directory

Portal: `claude.ai/directory/manage` → Submit new → **MCP connector**. It is in Ukrainian for this user.

1. Verify the server: `initialize`, `tools/list`, one call per tool, icon at `/icon-512.png` returns 200.
2. Steps: Connection, Tools, Listing, Use cases, Company, Authentication, Data handling, Test & launch, Compliance, Review and submit.
3. Connection adds the server as a custom connector in the user's own Claude account. Say so.
4. Listing: name in the words people type; slug is **permanent**; one-liner ≤ 200; category Development tools; author Flisk, https://flisk.sh; docs, support and privacy URLs.
5. **Icon:** the directory uses the favicon of the registrable domain (mcp.flisk.sh got flisk.sh's mark). Always set "Add custom icon URL" to `https://<host>/icon-512.png` and press Verify.
6. Use cases: three, with example prompts; prerequisites; read-only.
7. Data handling: own API, no health data, no sponsored content. Authentication: None (auto-detected).
8. Test & launch: give reviewers the URL and example calls.
9. **The user ticks the self-test box and the compliance boxes and presses Submit.** Fill everything else, then stop.
10. Do not run two submissions at once: drafts live in the tab and an entry can be submitted without anyone pressing Submit. Re-check `claude.ai/directory/manage` for the real state.
11. After approval, "Publish" is the user's. Edits to an approved listing (`…/manage/<slug>/edit`) send it back to review.
