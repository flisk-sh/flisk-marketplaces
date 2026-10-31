---
name: build-me-an-app
description: Use when the user wants to build an app (shop, website with login, booking app, AI helper) and needs a plan and the commands to run it locally. Calls plan_app with a plain description, or list_app_starters to show ready-made apps. Plans only; nothing is created.
---

# Build Me an App

Call `plan_app` with `what` set to the user's own words. Show what the app is made of and the commands, as returned. If they are unsure what to build, call `list_app_starters` first. Say that running it needs Docker Desktop.
