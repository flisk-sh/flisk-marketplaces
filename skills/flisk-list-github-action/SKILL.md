---
name: flisk-list-github-action
description: Publish a Flisk GitHub Action (citable, readme-score, pages) to the GitHub Actions Marketplace and release it. Use when releasing, fixing or listing an action.yml.
---

# List a GitHub Action on the Marketplace

- One `action.yml` at the repo root. `description` under 125 characters, a unique `name`, and `branding` (icon and color).
- Composite action tips: run the CLI from `$GITHUB_ACTION_PATH` when the package is not on npm; run `npx` from `$RUNNER_TEMP`; in gate scripts set `set -u +e` and pass inputs through `env`.
- Release: `gh release create vX.Y.Z --target main`, then move the major tag: `git tag -f v1 vX.Y.Z && git push -f origin v1`. Marketplace reads `action.yml` at the tag.
- Publish in the browser: `github.com/<org>/<repo>/releases/edit/<tag>` → "Publish this Action to the GitHub Marketplace" → two categories → Update release. The first submit may error with a hidden tag message: reload and submit once more. One repo at a time.
- Ask the user before releasing or force-moving a tag.
