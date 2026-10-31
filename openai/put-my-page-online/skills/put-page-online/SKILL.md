---
name: put-page-online
description: Use when the user has built a web page (dashboard, report, prototype) and wants to share it as a link. Calls check_page with the file name and content, then how_to_put_page_online for the steps. Nothing is published by the tools.
---

# Put My Page Online

Call `check_page` with `name` and `content`. If it is not ready, fix every problem it lists and check again. When it passes, call `how_to_put_page_online` and give the one command. The tools publish nothing.
