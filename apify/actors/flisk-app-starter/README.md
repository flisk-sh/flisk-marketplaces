# Build an App: Online Shop, SaaS, AI Agent Starters (Flisk)

Pick what you want to build. Get a working app project back, ready to start on your own computer with one command.

No scaffolding, no wiring, no config files to write. Every starter is a real app from [Flisk](https://flisk.sh): it runs your whole app (website, API, workers, database) behind one local address and reloads a part when you save it.

## Build this

| Pick | You get |
| --- | --- |
| **Online shop** | A Vue 3 storefront and a catalog API |
| **SaaS app** | An account dashboard and a working checkout button (local, not a billing deploy) |
| **Restaurant app** | Reservations, kitchen, menu and floor control |
| **AI agent app** | An agent, a tool server, a database and messaging |
| **Accounts and login** | Admin, a user portal and compliance views |
| **Minimal starter** | The smallest app: API, website, worker, database |

## How it works

1. Choose what to build and name your app.
2. Run the Actor and download the ZIP from the result.
3. Unzip it and start it:

```bash
npm install -g @flisk-sh/flisk
cd my-app
flisk up          # the online shop uses: flisk up store
```

You need Docker, Tilt, Node.js 22.12+ and Bun 1.2+. Run `flisk doctor` and it tells you what is missing.

## Input

| Field | Example |
| --- | --- |
| `template` | `ecommerce`, `saas`, `restaurant`, `agent-stack`, `user-management`, `example` |
| `projectName` | `my-shop` |

## Output

```json
{
  "template": "ecommerce",
  "title": "Online shop (Vue storefront + catalog API)",
  "download": "https://api.apify.com/v2/key-value-stores/.../records/my-shop.zip",
  "run": ["npm install -g @flisk-sh/flisk", "cd my-shop", "flisk up"]
}
```

## Good to know

- Starters are for building and testing locally. They do not deploy anything; production stays with your own tools.
- Need a blog or a Next.js starter? Flisk can create a Next.js part with `flisk resource my-site --type frontend --framework next`. Ask for more starters at https://github.com/flisk-sh/flisk-marketplaces.
- You pay only for Apify platform usage; a run takes a few seconds.
