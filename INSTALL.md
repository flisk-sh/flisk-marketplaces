# Install the Flisk MCP servers

All of these are remote, read-only, keyless (no account, no sign-in). Pick your client.

| Server | URL | What it does |
| --- | --- | --- |
| Build Me an App | `https://mcp.flisk.sh/mcp` | Say what app you want, get a plan and the commands to run it |
| Put My Page Online | `https://pages.flisk.si/mcp` | Check a web page, then put it online as a free link |
| Get My Site Found by AI | `https://citable.flisk.si/mcp` | Check if AI search can find and quote your site |
| Improve My README | `https://readme.flisk.si/mcp` | Score and improve a README |
| Flisk docs (Helpdock) | `https://helpdock.flisk.sh/mcp` | Search the Flisk docs |

## Claude (web, desktop, mobile)

Settings → Connectors → Add custom connector → paste the URL. Once a listing is published, find it in the Claude directory instead.

## Claude Code

```bash
claude mcp add --transport http flisk-app-builder https://mcp.flisk.sh/mcp
claude mcp add --transport http put-my-page-online https://pages.flisk.si/mcp
claude mcp add --transport http ai-search-checker https://citable.flisk.si/mcp
claude mcp add --transport http readme-checker https://readme.flisk.si/mcp
```

Plugins: `/plugin marketplace add flisk-sh/flisk`, then `/plugin install flisk-claude@flisk`.

## Gemini CLI

```bash
gemini mcp add --transport http flisk-app-builder https://mcp.flisk.sh/mcp
```

Or edit `~/.gemini/settings.json`:

```json
{
  "mcpServers": {
    "flisk-app-builder": { "httpUrl": "https://mcp.flisk.sh/mcp" },
    "put-my-page-online": { "httpUrl": "https://pages.flisk.si/mcp" },
    "ai-search-checker": { "httpUrl": "https://citable.flisk.si/mcp" },
    "readme-checker": { "httpUrl": "https://readme.flisk.si/mcp" }
  }
}
```

## Cursor

`~/.cursor/mcp.json` (or the project's `.cursor/mcp.json`):

```json
{ "mcpServers": { "flisk-app-builder": { "url": "https://mcp.flisk.sh/mcp" } } }
```

## Codex CLI

`~/.codex/config.toml`:

```toml
[mcp_servers.flisk-app-builder]
url = "https://mcp.flisk.sh/mcp"
```

## ChatGPT

Settings → Apps / Connectors → turn on developer mode → add a custom connector with the URL (names and menus change; check OpenAI's current docs). Once listed, find the plugin in the ChatGPT directory.

## Check it works

```bash
curl -s -X POST https://mcp.flisk.sh/mcp -H 'content-type: application/json' -H 'accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'
```

The exact flags and file names of Gemini, Cursor and Codex change between versions. They were written from memory, not run: check each against the client's own docs before relying on them.
