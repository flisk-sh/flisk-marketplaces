# App Stack Map: List Every Part of Your App (Flisk)

Paste a GitHub repo and get a clear table of every part of your app: the API, the website, background workers, AI agents, the database. For each one you see its type, port, stack and what it needs to start first. It also flags broken `service.json` files, so you find the mistake here and not when your app refuses to start.

Made for apps built with [Flisk](https://flisk.sh), which runs your whole app on your computer with one command.

## What you can do with it

- **See your app at a glance**: every part, its port and its stack in one table.
- **Check what needs what**: spot a part that waits on another before you change it.
- **Catch setup mistakes early**: unknown type, invalid port, bad `dependsOn`, invalid JSON.
- **Onboard someone fast**: send a table instead of a folder tree.
- **Take it anywhere**: download as JSON, CSV, Excel or HTML, or call it from the API.

## Input

| Field | Required | Example |
| --- | --- | --- |
| `repoUrl` | yes | `https://github.com/flisk-sh/flisk` |
| `branch` | no | `main` |
| `subdir` | no | `examples/flisk-example` |

Public GitHub (HTTPS) repos only. No login or API key needed.

## Output

One row per part of your app (one per `service.json`):

```json
{
  "appName": "orders-api",
  "appType": "backend",
  "stack": "shop",
  "port": 4000,
  "dependsOn": [],
  "path": "services/shop/orders-api/service.json",
  "issues": []
}
```

`issues` is empty when the file is valid.

## Cost

A scan of a repo the size of `flisk-sh/flisk` finishes in a few seconds. You pay only for Apify platform usage.

## Limits

- Reads Flisk `service.json` files only; other formats are ignored.
- `node_modules`, `.git`, `.flisk` and `.flisk-out` are skipped.
- Private repositories are not supported.

Questions, or a file format you want covered? Open an issue at https://github.com/flisk-sh/flisk-marketplaces.
