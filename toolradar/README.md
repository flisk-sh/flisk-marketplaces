# Toolradar

[Toolradar](https://toolradar.com) is a B2B software directory (11,700+ tools). A free editorial listing with a verified badge is offered; claims are reviewed in about 24 to 48 hours (from its own pages, 2026-10-31).

- Submit a new product: `https://toolradar.com/company/submit` (needs a sign-in: Google, LinkedIn or an email code, so **the user signs in**).
- Claim a product already listed: `https://toolradar.com/claim?tool=<slug>` (company email domain and role are checked).
- Why list: `https://toolradar.com/vendors`.

## State on 2026-10-31

| Product | State |
| --- | --- |
| Flisk CLI (flisk.sh), Flisk demos (demo.flisk.sh) | Live, submitted 2026-10-25 |
| Pages (pages.flisk.si) | Submitted 2026-10-31, being checked (confirm the domain by email or the claim) |
| Citable (citable.flisk.si) | Submitted 2026-10-31, being checked (confirm the domain by email or the claim). Another, unrelated "Citable" is already on Toolradar: not ours |
| README Score (readme.flisk.si) | Submitted 2026-10-31, being checked |
| Build Me an App (mcp.flisk.sh) | Submitted 2026-10-31, being checked. Auto-fill named it "Flisk": corrected to "Build Me an App" before submitting, so it does not duplicate the Flisk CLI listing |

## How the form works (read from the real form)

- Start from the website URL and press **Auto-fill**: it fills name, tagline, description, who it is for, 3 to 5 features and pricing from the product's own site. The result was factual; check it, then **Submit for review**.
- **Limit: 2 submissions per hour.** A third shows "You're submitting too quickly".
- Submitting from a personal email (gmail) sends a confirmation email: reply from an address on the product's domain, or claim the profile with a company email, and the review starts. Clean listings from verified companies go live within minutes; others are read within ten business days.
- Optional: badge page URL and first-party facts for a richer listing (they ask for a link back to Toolradar).
- The sidebar has Submissions (status of each), Analytics, Reviews, Badges and Claude connection.

## Products to list (copy to paste)

| Product | URL | Tagline (≤ 60) | Category | Pricing | Logo |
| --- | --- | --- | --- | --- | --- |
| Flisk | https://flisk.sh | Build and run your whole app on your computer | Developer tools | Free, open source | `plugins/flisk/assets/logo.png` in flisk-sh/flisk |
| Build Me an App | https://mcp.flisk.sh | Say what app you want, get a plan and the commands | AI tools / Developer tools | Free | https://mcp.flisk.sh/icon-512.png |
| Put My Page Online | https://pages.flisk.si | Check your page, then share it as a free link | Website hosting | Free | https://pages.flisk.si/icon-512.png |
| Get My Site Found by AI | https://citable.flisk.si | Check if AI search can find and quote your site | SEO / AI search | Free | https://citable.flisk.si/icon-512.png |
| Improve My README | https://readme.flisk.si | Score your README out of 100 and fix it | Developer tools | Free | https://readme.flisk.si/icon-512.png |

**Description (paste, adapt per product):** what it does in the first sentence, who it is for, that it is free and needs no account, and what it does not do (the MCP servers only read, check or plan: nothing is stored). Plain words; no "AI-powered" filler.

**Company:** Flisk, https://flisk.sh. Use a company email on the flisk domain if one exists; otherwise the form may ask for proof of role.

## Keep the listings right from Claude (Connect Claude)

Toolradar has an MCP at `https://toolradar.com/api/mcp`. Create a key on `toolradar.com/company/connect` (the user does this; the key is shown once and is a secret: never put it in chat, a repo or a skill), then:

```bash
claude mcp add --scope user --transport http toolradar https://toolradar.com/api/mcp --header "Authorization: Bearer YOUR_KEY"
```

Then "update my Toolradar listing" runs `update_my_listing`: it reads the pricing page, shows what differs, and edits after the user agrees. It can edit only the live listings (Flisk CLI, Flisk demos as of 2026-10-31). It refuses marketing claims, rankings, scores and reviews. Set up on this Mac on 2026-10-31; a key pasted in chat once should be rotated.

## Auto-fill checks

Auto-fill is a starting point, not the final text. Before submitting, check each field against the product:
- The **name** must be the product's name, not the company's (it can read "Flisk" for the app builder).
- **Best for** must describe a real audience (it once read "Ops teams that outgrew spreadsheets" for a README tool).
- Empty **tagline** and **description** fields are not filled by Auto-fill for every site: fill them.
