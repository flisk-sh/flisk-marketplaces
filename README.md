# Flisk Marketplaces

Listings, Actors and packages that make [Flisk](https://flisk.sh) and related third-party tooling discoverable on public marketplaces. One folder per marketplace.

| Marketplace | Folder | Contents |
| --- | --- | --- |
| [Apify Store](https://apify.com/store) | [`apify/`](apify) | `flisk-app-starter`: pick what to build (online shop, website with accounts, restaurant app, AI helper) and get a working app. `flisk-stack-scanner`: see every piece of an app in a GitHub link. |

Add a new marketplace as its own top-level folder with its own README covering how to publish there.

## Publish to Apify

```bash
npm i -g apify-cli
apify login
cd apify/actors/flisk-app-starter   # or flisk-stack-scanner
apify push
```

Then, in Apify Console, set the Actor to **Public** and fill in the Store listing (category: Developer tools). Search for "flisk" will find it once it is public.
