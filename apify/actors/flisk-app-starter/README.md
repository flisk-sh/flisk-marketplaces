# Build an App Fast: Online Shop, Website, Booking, AI Helper (Flisk)

Say what you want to build. Get a working app back. Start it on your own computer with one command.

No setup, no wiring, no files to write by hand. Every choice is a real app made with [Flisk](https://flisk.sh). Start it, click around, then change it into your own.

## Pick what to build

| You pick | You get |
| --- | --- |
| **Online shop** | A shop page where people see products, and the product list behind it |
| **Website with accounts and a Buy button** | A page where people see their account, and a Buy button that works on your computer (no real money) |
| **Restaurant app** | Table bookings, a menu, a kitchen screen and a floor screen |
| **AI helper app** | An AI helper, the tools it can use, and a place to save what it learns |
| **Sign-up and login** | Sign-up and login pages, an admin page and a page for users |
| **Tiny starter** | The smallest working app: a website that saves data |

## How it works

1. Pick what to build and give your app a name.
2. Press Start, then download the ZIP from the result.
3. Unzip it and run:

```bash
npm install -g @flisk-sh/flisk
cd my-app
flisk up          # the online shop uses: flisk up store
```

You need a few free tools on your computer: Docker, Tilt, Node.js and Bun. Run `flisk doctor` and it tells you what is missing.

## What goes in

| Field | Example |
| --- | --- |
| `template` | `ecommerce`, `saas`, `restaurant`, `agent-stack`, `user-management`, `example` |
| `projectName` | `my-shop` |

## What comes out

```json
{
  "title": "Online shop (shop page + product list)",
  "download": "https://api.apify.com/v2/key-value-stores/.../records/my-shop.zip",
  "run": ["npm install -g @flisk-sh/flisk", "cd my-shop", "flisk up store"]
}
```

## Good to know

- These apps run on your computer so you can build and test. They do not put anything on the internet for you.
- Want a blog or a Next.js starter? Tell us at https://github.com/flisk-sh/flisk-marketplaces. You can already add a Next.js page to any Flisk app with `flisk resource my-site --type frontend --framework next`.
- You pay only for Apify usage. A run takes a few seconds.
