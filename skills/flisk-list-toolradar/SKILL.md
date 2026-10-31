---
name: flisk-list-toolradar
description: Submit or claim Flisk products on Toolradar (toolradar.com), a B2B software directory: Flisk, Build Me an App, Put My Page Online, Get My Site Found by AI, Improve My README. Use when asked to list Flisk on Toolradar, claim a Toolradar profile, or update a listing there.
---

# List Flisk products on Toolradar

Copy, URLs, taglines and logos are in `toolradar/README.md`. Read it first and keep it updated.

1. Check whether the product is already listed: search `toolradar.com` for the name. If it is, **claim** it at `https://toolradar.com/claim?tool=<slug>`; otherwise **submit** at `https://toolradar.com/company/submit`.
2. Both need a sign-in (Google, LinkedIn or an email code). **The user signs in**; never enter credentials or an email code for them.
3. Use Google Chrome (the user's), not the built-in browser.
4. Fill what the form asks from `toolradar/README.md`: name, URL, tagline, description, category, pricing (free), logo. Do not invent fields: read the real form with `get_page_text` first and note any new fields in the README.
5. Claims check the company email domain and role: if it asks for proof, stop and ask the user.
6. Anything that sends a request for review, accepts terms, or involves payment: ask first. Toolradar offers paid growth and advertising: never buy; the free editorial listing is the goal.
7. **At most 2 submissions per hour**; do them two at a time and wait. A personal email triggers a domain confirmation: tell the user to reply from a company address or claim the profile.
8. Reviews take about 24 to 48 hours. Record the submission date and status in `toolradar/README.md`, and in the table of `flisk-distribute`.

9. To edit a live listing, prefer the Toolradar MCP (`update_my_listing`, see `toolradar/README.md`). The key is the user's: never ask for it, print it, or store it in the repo.

## Prompts (required in every listing)

Every MCP server ships prompts as well as tools. Before any listing or submission:
1. Check the live server answers `prompts/list` with the expected names (see the curl in README.md). If it returns "Method not found", the server isn't deployed with prompts yet: deploy first, and ask the user for the deploy yes.
2. Put the prompt names and what each one needs (for example `build_my_app` needs `what`) in the listing's prompt field, the copy, and the test steps.
3. Prompts are read-only text the client shows to the user; they don't call anything themselves. Say so in the reviewer notes.

Toolradar has no prompt field: put the prompt names in the description ("Ready-made prompts: ...").
