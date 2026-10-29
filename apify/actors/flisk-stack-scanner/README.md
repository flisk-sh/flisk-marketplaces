# What Is My App Made Of? Check Any GitHub App (Flisk)

Paste a GitHub link. Get one simple table of every piece of the app: the website, the parts working behind it, the port each one uses, and which piece needs which. It also finds broken settings files, so you spot the mistake here and not when your app fails to start.

Made for apps built with [Flisk](https://flisk.sh), which runs your whole app on your computer with one command.

## What it is good for

- **See your whole app at once**: every piece in one table.
- **Know what needs what**: before you change one piece, see what depends on it.
- **Catch mistakes early**: wrong kind, bad port number, broken file.
- **Show a teammate**: send a table, not a pile of folders.
- **Take it anywhere**: download as JSON, CSV, Excel or HTML.

## What goes in

| Field | Needed | Example |
| --- | --- | --- |
| `repoUrl` | yes | `https://github.com/flisk-sh/flisk` |
| `branch` | no | `main` |
| `subdir` | no | `examples/flisk-example` |

Public GitHub apps only. No login or key needed.

## What comes out

One row for every piece (every `service.json` file):

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

`issues` is empty when the file is fine.

## Cost

Checking an app the size of `flisk-sh/flisk` takes a few seconds. You pay only for Apify usage.

## Limits

- Only reads Flisk `service.json` files.
- Skips `node_modules`, `.git`, `.flisk` and `.flisk-out`.
- No private GitHub apps.

Questions or ideas? https://github.com/flisk-sh/flisk-marketplaces
