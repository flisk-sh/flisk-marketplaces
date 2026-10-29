# Flisk Marketplaces

Listings, Actors and packages that make [Flisk](https://flisk.sh) and related third-party tooling discoverable on public marketplaces. One folder per marketplace.

| Marketplace | Folder | Contents |
| --- | --- | --- |
| [Apify Store](https://apify.com/store) | [`apify/`](apify) | `flisk-stack-scanner` Actor: scans a public Git repo for Flisk `service.json` manifests and validates them. |

Add a new marketplace as its own top-level folder with its own README covering how to publish there.

## Publish to Apify

```bash
npm i -g apify-cli
apify login
cd apify/actors/flisk-stack-scanner
apify push
```

Then, in Apify Console, set the Actor to **Public** and fill in the Store listing (category: Developer tools). Search for "flisk" will find it once it is public.
