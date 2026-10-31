# Flisk MCP and plugin test, 2026-10-31T11:59:41+00:00

**Failures: 2**

## build-me-an-app (https://mcp.flisk.sh/mcp)

| Check | Result | Detail |
| --- | --- | --- |
| initialize | pass | status 200, server flisk-app-builder, capabilities ['tools', 'prompts'] |
| tools/list | pass | tools ['list_app_starters', 'plan_app'], expected ['list_app_starters', 'plan_app'] |
| annotations plan_app | pass | readOnlyHint=True |
| annotations list_app_starters | pass | readOnlyHint=True |
| tools/call plan_app | pass | status 200, isError False, text {"you_get":"web: the website people see; api: the server behind it; api-migrator: sets up the database","parts":[{"name":"web","is":"the website people see","de |
| tools/call list_app_starters | pass | status 200, isError False, text {"starters":[{"kind":"Restaurant booking and kitchen","say_something_like":["restaurant","restaurants","reservation","reservations"],"repo":"https://github.com/ |
| unknown tool is refused | pass | {'code': -32602, 'message': 'Unknown tool: no_such_tool'} |
| prompts/list | pass | prompts ['build_my_app', 'pick_a_starter'], expected ['build_my_app', 'pick_a_starter'] |
| prompts/get build_my_app | pass | text Plan this app with the plan_app tool, using this description: "an online shop for a bakery". Show what it is made of, then the commands to run it on my computer |
| prompts/get build_my_app without its required argument is refused | pass | {'code': -32602, 'message': 'Unknown prompt or missing argument: build_my_app'} |
| prompts/get pick_a_starter | pass | text Call list_app_starters, show the ready-made apps, and help me choose the one closest to what I want to build. |
| unknown method is refused (-32601) | pass | {'code': -32601, 'message': 'Method not found: no/such_method'} |
| bad JSON is refused (-32700, HTTP 400) | pass | status 400 {
  "jsonrpc": "2.0",
  "id": null,
  "error": {
    "code": -32700,
    "messag |
| GET is refused (405) | pass | status 405 |
| accepts a JSON-only client (not 406) | pass | status 200 |
| icon-512.png is a PNG | pass | status 200 image/png |
| favicon.ico is served | FAIL | status 0  error: URLError: <urlopen error [Errno 8] nodename nor servname provided, or not known> |

## put-my-page-online (https://pages.flisk.si/mcp)

| Check | Result | Detail |
| --- | --- | --- |
| initialize | pass | status 200, server flisk-pages, capabilities ['tools', 'prompts'] |
| tools/list | pass | tools ['check_page', 'how_to_put_page_online'], expected ['check_page', 'how_to_put_page_online'] |
| annotations check_page | pass | readOnlyHint=True |
| annotations how_to_put_page_online | pass | readOnlyHint=True |
| tools/call check_page | pass | status 200, isError False, text {"ready":true,"say_it_plainly":"The page passes the checks and can go online.","problems":[],"worth_fixing":[],"report":"✓ ready to publish: 1 files, 0 KB","nex |
| tools/call how_to_put_page_online | pass | status 200, isError False, text {"steps":["Make the page: one .html file, or a folder with an index.html (or a single .md file for a text page).","Check it first with check_page, or run: npx - |
| unknown tool is refused | pass | {'code': -32602, 'message': 'Unknown tool: no_such_tool'} |
| prompts/list | pass | prompts ['put_my_page_online'], expected ['put_my_page_online'] |
| prompts/get put_my_page_online | pass | text Check my page with check_page. Fix every problem it lists and check again until it passes. Then call how_to_put_page_online and give me the one command to put i |
| unknown method is refused (-32601) | pass | {'code': -32601, 'message': 'Method not found: no/such_method'} |
| bad JSON is refused (-32700, HTTP 400) | pass | status 400 {
  "jsonrpc": "2.0",
  "id": null,
  "error": {
    "code": -32700,
    "messag |
| GET is refused (405) | pass | status 405 |
| accepts a JSON-only client (not 406) | pass | status 200 |
| icon-512.png is a PNG | pass | status 200 image/png |
| favicon.ico is served | pass | status 200 image/vnd.microsoft.icon |

## get-my-site-found-by-ai (https://citable.flisk.si/mcp)

| Check | Result | Detail |
| --- | --- | --- |
| initialize | pass | status 200, server citable, capabilities ['tools', 'prompts'] |
| tools/list | pass | tools ['check_site'], expected ['check_site'] |
| annotations check_site | pass | readOnlyHint=True |
| tools/call check_site | pass | status 200, isError False, text https://example.com/: 50/100 (grade D) for AI search.

[pass] AI answer engines can crawl the page (25/25): No robots.txt (404), so every crawler may fetch this |
| unknown tool is refused | pass | {'code': -32602, 'message': 'Unknown tool: no_such_tool'} |
| prompts/list | pass | prompts ['check_my_site'], expected ['check_my_site'] |
| prompts/get check_my_site | pass | text Check example.com with check_site. Say whether AI answer engines can find, read and cite it, then list the fixes in order of importance. |
| prompts/get check_my_site without its required argument is refused | pass | {'code': -32602, 'message': 'Unknown prompt or missing argument: check_my_site'} |
| unknown method is refused (-32601) | pass | {'code': -32601, 'message': 'Method not found: no/such_method'} |
| bad JSON is refused (-32700, HTTP 400) | pass | status 400 {"jsonrpc":"2.0","id":null,"error":{"code":-32700,"message":"Parse error"}} |
| GET is refused (405) | pass | status 405 |
| accepts a JSON-only client (not 406) | pass | status 200 |
| icon-512.png is a PNG | pass | status 200 image/png |
| favicon.ico is served | pass | status 200 image/x-icon |

## improve-my-readme (https://readme.flisk.si/mcp)

| Check | Result | Detail |
| --- | --- | --- |
| initialize | pass | status 200, server readme-score, capabilities ['tools', 'prompts'] |
| tools/list | pass | tools ['score_readme'], expected ['score_readme'] |
| annotations score_readme | pass | readOnlyHint=True |
| tools/call score_readme | pass | status 200, isError False, text The pasted README.md: 46/100 (F) as a CLI tool; 7 checks pass, 13 fail.
Project type: CLI tool (nothing in the README says otherwise).

Fix first:
- Sections /  |
| unknown tool is refused | pass | {'code': -32602, 'message': 'Unknown tool: no_such_tool'} |
| prompts/list | pass | prompts ['improve_my_readme'], expected ['improve_my_readme'] |
| prompts/get improve_my_readme | pass | text Score the README of flisk-sh/flisk with score_readme. Show the score out of 100, then the fixes, most important first. |
| prompts/get improve_my_readme without its required argument is refused | pass | {'code': -32602, 'message': 'Unknown prompt or missing argument: improve_my_readme'} |
| unknown method is refused (-32601) | pass | {'code': -32601, 'message': 'Method not found: no/such_method'} |
| bad JSON is refused (-32700, HTTP 400) | pass | status 400 {"jsonrpc":"2.0","id":null,"error":{"code":-32700,"message":"Parse error"}} |
| GET is refused (405) | pass | status 405 |
| accepts a JSON-only client (not 406) | pass | status 200 |
| icon-512.png is a PNG | pass | status 200 image/png |
| favicon.ico is served | pass | status 200 image/x-icon |

## helpdock (https://helpdock.flisk.sh/mcp)

| Check | Result | Detail |
| --- | --- | --- |
| initialize | pass | status 200, server helpdock: Flisk docs, capabilities ['tools'] |
| tools/list | pass | tools ['ask_help_center', 'search_docs'], expected ['ask_help_center', 'search_docs'] |
| annotations search_docs | pass | readOnlyHint=True |
| annotations ask_help_center | pass | readOnlyHint=True |
| tools/call search_docs | pass | status 200, isError None, text {
  "query": "deploy",
  "hits": [
    {
      "n": 1,
      "title": "⚡ Flisk mega cheat sheet",
      "section": "flisk up [stack-name] (alias deploy)",
      |
| tools/call ask_help_center | pass | status 200, isError None, text {
  "reply": "Here's what the docs say:\n\n[1] Local data: where it lives, how to reset, seed and snapshot › Start from a clean state\nThe database comes back e |
| unknown tool is refused | pass | {'content': [{'type': 'text', 'text': 'MCP error -32602: Tool no_such_tool not found'}], 'isError': True} |
| prompts/list | pass | no prompts expected: {'jsonrpc': '2.0', 'id': 12, 'error': {'code': -32601, 'message': 'Method not found'}} |
| unknown method is refused (-32601) | pass | {'code': -32601, 'message': 'Method not found'} |
| bad JSON is refused (-32700, HTTP 400) | pass | status 400 {"error":"body is not JSON"} |
| GET is refused (405) | pass | status 405 |
| accepts a JSON-only client (not 406) | FAIL | status 406 |
| icon-512.png is a PNG | pass | status 200 image/png |
| favicon.ico is served | pass | status 200 image/x-icon |

## plugin flisk-claude (flisk/plugins/flisk-claude)

| Check | Result | Detail |
| --- | --- | --- |
| plugin.json parses and has name, version, description, author | pass | name flisk version 1.0.0 |
| manifest icon file exists | pass | ./.claude-plugin/icon.png |
| at least one skill with frontmatter name and description | pass | skills ['flisk-agent-ops', 'flisk-build', 'flisk-convert', 'flisk-doctor', 'flisk-recipe-ai-agent', 'flisk-recipe-blog', 'flisk-recipe-saas', 'flisk-recipe-shop', 'flisk-recipe-starters', 'flisk-resource', 'flisk-status', 'flisk-troubleshoot', 'flisk-up'] |
| .mcp.json points at the live server | pass | command scripts ['/Users/san4osq/tdk-pr-work/flisk/plugins/flisk-claude/scripts/flisk-mcp.sh'] |

## plugin put-my-page-online (pages/plugins/put-my-page-online)

| Check | Result | Detail |
| --- | --- | --- |
| plugin.json parses and has name, version, description, author | pass | name put-my-page-online version 1.0.0 |
| manifest icon file exists | pass | ./.claude-plugin/icon.png |
| at least one skill with frontmatter name and description | pass | skills ['put-page-online'] |
| .mcp.json points at the live server | pass | urls ['https://pages.flisk.si/mcp'] |
| the server in .mcp.json answers initialize | pass | status 200 |

## plugin ai-search-checker (citable/plugins/ai-search-checker)

| Check | Result | Detail |
| --- | --- | --- |
| plugin.json parses and has name, version, description, author | pass | name ai-search-checker version 1.0.0 |
| manifest icon file exists | pass | ./.claude-plugin/icon.png |
| at least one skill with frontmatter name and description | pass | skills ['get-found-by-ai'] |
| .mcp.json points at the live server | pass | urls ['https://citable.flisk.si/mcp'] |
| the server in .mcp.json answers initialize | pass | status 200 |

## plugin readme-checker (readme-score/plugins/readme-checker)

| Check | Result | Detail |
| --- | --- | --- |
| plugin.json parses and has name, version, description, author | pass | name readme-checker version 1.0.0 |
| manifest icon file exists | pass | ./.claude-plugin/icon.png |
| at least one skill with frontmatter name and description | pass | skills ['improve-readme'] |
| .mcp.json points at the live server | pass | urls ['https://readme.flisk.si/mcp'] |
| the server in .mcp.json answers initialize | pass | status 200 |
