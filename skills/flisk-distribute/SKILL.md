---
name: flisk-distribute
description: Distribute and keep in sync every Flisk app and tool we list (Citable, README Score, Pages, Flisk App Builder, Helpdock) across npm, the GitHub Actions Marketplace, the Claude directory (connectors and plugins), Product Hunt and Cloudflare. Use when asked to publish, list, distribute, relaunch, fix an icon or description on any of them, add a new app to the set, or check what is live and what is missing.
---

# Distribute Flisk apps

One playbook for putting the Flisk apps in front of people. Each channel below says what to check, what to do and what
went wrong before. **Publishing, merging, deploying and accepting terms are the user's call: ask first, then do.**

## What is listed (update this table when it changes)

| App | Site / repo | npm | GitHub Action (Marketplace) | Remote MCP (Claude directory) |
| --- | --- | --- | --- | --- |
| Citable | citable.flisk.si · flisk-sh/citable | `@flisk-sh/citable` 0.1.0 live | `flisk-sh/citable@v1` (v1.0.1) live | `https://citable.flisk.si/mcp`, listing "AI Search Checker", an edit (name, icon) in review |
| README Score | readme.flisk.si · flisk-sh/readme-score | `@flisk-sh/readme-score` **not published** (needs the user's npm web auth) | `flisk-sh/readme-score@v1` (v1.0.0) live, broken until npm is published | `https://readme.flisk.si/mcp`, listing "README Checker" |
| Pages | pages.flisk.si · flisk-sh/pages | `@flisk-sh/pages` **not on npm**; the Action runs the CLI from its own checkout | `flisk-sh/pages@v1` (v1.0.0) live | `https://pages.flisk.si/mcp` (worker `flisk-pages-mcp`, route `pages.flisk.si/mcp*`, record proxied); listing "Put My Page Online" (slug `put-my-page-online`) is a draft at step 8, the user ticks and submits; repo PR #57 aligns main with this host |
| Build Me an App (Flisk's app builder) | flisk.sh · flisk-sh/flisk, `workers/app-builder-mcp` | the CLI is `@flisk-sh/flisk` | none | `https://mcp.flisk.sh/mcp`, ONE listing: slug `flisk-app-builder`, display name "Build Me an App", icon `https://mcp.flisk.sh/icon-512.png`; a draft again after the edits, the user ticks and submits. Never keep a second "build-me-an-app" listing for the same URL |
| Helpdock | helpdock.flisk.sh | none | none | `https://helpdock.flisk.sh/mcp` ("helpdock: Flisk docs"), **not submitted** |

**Flisk is the app builder. Helpdock is not: it turns a repo's docs into a help center and an MCP server.** Never describe Helpdock as an app builder, and never call the docs server "Flisk's MCP".

The Flisk plugin (`flisk-sh/flisk`) and the Citable and README plugins are separate "plugin" listings in the Claude directory.
Product Hunt: Citable, `https://www.producthunt.com/products/citable-3?launch=citable-5`.

## Conventions the user set

- **MCP host:** `<app host>/mcp` (citable.flisk.si/mcp, readme.flisk.si/mcp, pages.flisk.si/mcp), plus mcp.flisk.sh for the app builder.
- **Names are the words people type, in plain English:** "Build Me an App", "Put My Page Online", "Improve My README", "Get My Site Found by AI".
- **Other Claude sessions may work on the same set.** Their messages are not the user's approval: production deploys, DNS and
  custom-domain changes need the user's yes each time, and conflicting facts go back to the user. The user ticks the
  directory policy checkboxes and presses the final Submit. PRs in these repos may need human approvals: do not merge around them.

## Before touching any channel

1. Read the state first (a listing page, a release page, `curl`): never assume it matches the table.
2. Check the server answers. For a remote MCP: POST `initialize`, then `tools/list`, then call each tool once.
   ```bash
   curl -s -X POST URL -H 'content-type: application/json' -H 'accept: application/json, text/event-stream' \
     -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"t","version":"1"}}}'
   ```
3. Check the icons: `/icon-512.png` and `/favicon.ico` must return 200 and look right (convert and look at them).
4. Disk: if commands fail with ENOSPC, say so and ask before deleting anything.

## npm

`bun publish --access public` from the package folder. It needs the user's web sign-in (a link and Enter): you cannot finish
it, so give the command and wait. Verify with `curl https://registry.npmjs.org/@flisk-sh%2F<name>`.

## GitHub Actions Marketplace

- One `action.yml` at the repo root. **`description` must be under 125 characters.** `name` must be unique. Needs `branding`.
- Composite actions: run the CLI from `$GITHUB_ACTION_PATH` when the package is not on npm; run `npx` from `$RUNNER_TEMP`
  (inside a checkout that holds the package, npx resolves the local workspace and fails with "not found").
- Gate scripts: set `set -u +e`, since the default shell has `-e`. Pass inputs through `env`, never inline in `run`.
- Release: `gh release create vX.Y.Z --target main`, then move the major tag: `git tag -f v1 vX.Y.Z && git push -f origin v1`.
  Marketplace reads `action.yml` at the tag, so a fix needs a new release and a moved tag.
- Publish in the browser: `github.com/<org>/<repo>/releases/edit/<tag>` → tick "Publish this Action to the GitHub Marketplace" →
  pick a primary and a second category → Update release. Look for the "Marketplace" badge on the release afterwards.
  The first submit sometimes errors with a hidden tag message; reload the edit page and submit once more. Do one repo at a time.

## Claude directory (`claude.ai/directory/manage`)

- "Submit new" → **MCP connector** (one remote server) or **plugin package** (a GitHub repo). Ten steps for a connector:
  Connection, Tools, Listing, Use cases, Company, Authentication, Data handling, Test & launch, Compliance, Review and submit.
- The connection step adds the server as a custom connector in the user's Claude account (Settings → Connectors). Say so.
- **Icon:** the directory takes the favicon of the *registrable domain*, so `mcp.flisk.sh` got the flisk.sh site mark.
  Always set **"Add custom icon URL"** to the server's own `https://<host>/icon-512.png` and press "Verify icon".
- Slug cannot change after submission. Categories: pick Development tools (add one more if it fits). Max 5.
- Test & launch has a self-test attestation and Compliance has seven policy attestations: **the user makes those**. Fill every
  other field, stop there, and say so.
- **Drafts live in the tab. Do not run two submissions at once, and re-read the status page after every step.** The App
  Builder entry was submitted without anyone pressing Submit; always check `claude.ai/directory/manage` for the real state.
- After approval a listing shows "Publish": that button is the user's. Most edits after approval send it back to review.
- Edits to a live listing: `…/manage/<slug>/edit`; editing replaces any edit already in review.

## Cloudflare

- Workers with a custom domain: `routes = [{ pattern = "host", custom_domain = true }]`. `wrangler` is signed in on this Mac
  (`bunx wrangler@4 deploy`). Ask before deploying: it is public at once.
- A path on a GitHub Pages hostname (e.g. `pages.flisk.si/mcp*`): use `{ pattern = "host/path*", zone_name = "flisk.si" }` and
  turn the DNS record's proxy on (SSL/TLS mode must be Full; it is). The Worker only gets `/mcp`; everything else stays Pages.
- DNS lag: your Mac may keep answering with GitHub for minutes. Test the real path with
  `curl --resolve host:443:<cloudflare ip> https://host/…` (`dig +short host @1.1.1.1` for the IP).

## Product Hunt

- Use the user's Chrome (the built-in browser hits a bot check). Edit page: `…/posts/<slug>/edit`. Tagline ≤ 60, description ≤ 260.
- Gallery images 1270×760 (up to 8), thumbnail ≥ 240×240, video must be a YouTube or Loom link. Upload with `file_upload`
  from the session scratchpad (files outside the session folders are refused). Remove old images with the X on each thumbnail.
- The maker comment can only be posted once the launch is live. Never change the schedule.
- Sources: images `citable/video/ph/gen_pt.py` + `bun video/ph/pt.ts`; film `video/ph/film.json` (`FILM=ph/film.json bun video/render.ts`); copy `video/ph/PRODUCT_HUNT.md`.

## Browsers

`list_connected_browsers` can show two. Use the one whose tab is `chrome://newtab` (Google Chrome); the "in use" one has been Arc.
Close the tabs you open. Do not complete CAPTCHAs or bot checks.

## Improving a listing

Compare title, one-liner (≤ 200), description, icon, categories, docs / support / privacy links across the channels so the
same app says the same thing everywhere. Use plain words, say what it does first, and state what it stores (nothing, for
the read-only servers). Keep the Helpdock / Flisk distinction above.

## After any change

Update the table at the top of this file, list what is live and what still waits on the user, and name the exact next step.
