#!/usr/bin/env bash
# End-to-end check of the published Actors, run on Apify for real.
# Needs: apify-cli logged in (`apify login`), python3, curl, unzip. `flisk` is optional (adds a dry-run check).
# Usage: e2e/apify.sh [username]   (defaults to the logged-in Apify user)
set -euo pipefail

USER_NAME="${1:-$(apify info 2>/dev/null | sed -n 's/^.*Username: *//p' | head -1)}"
USER_NAME="${USER_NAME:-flisk}"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
fail() { echo "FAIL: $*" >&2; exit 1; }
ok()   { echo "ok: $*"; }

call() { # actor input -> sets DATASET_ID and KV_ID
  local out
  out="$(apify call "$USER_NAME/$1" --input "$2" 2>&1)" || { echo "$out" | tail -20 >&2; fail "$1 run failed"; }
  DATASET_ID="$(echo "$out" | sed -n 's/^Dataset ID: *//p' | tail -1)"
  KV_ID="$(echo "$out" | sed -n 's/^Key-value store ID: *//p' | tail -1)"
  [ -n "$DATASET_ID" ] || fail "$1 gave no dataset"
  apify datasets get-items "$DATASET_ID" 2>/dev/null | sed -n '/^[\[{]/,$p' > "$WORK/items.json"
}
field() { python3 -c "import json,sys; d=json.load(open('$WORK/items.json')); print(eval(sys.argv[1]))" "$1"; }

# --- App Starter: every template must give a real project -------------------
for t in ecommerce saas restaurant agent-stack user-management example; do
  call flisk-app-starter "{\"template\":\"$t\",\"projectName\":\"e2e-$t\"}"
  url="$(field "d[0]['download']")"
  curl -fsS -o "$WORK/$t.zip" "$url" || fail "$t: download link does not work"
  rm -rf "$WORK/$t" && mkdir "$WORK/$t" && unzip -q "$WORK/$t.zip" -d "$WORK/$t"
  proj="$WORK/$t/e2e-$t"
  [ -d "$proj" ] || fail "$t: zip has no e2e-$t folder"
  [ -z "$(find "$proj" -maxdepth 1 -name .git)" ] || fail "$t: zip contains .git"
  n="$(find "$proj" -name service.json -not -path '*/node_modules/*' | wc -l | tr -d ' ')"
  [ "$n" -ge 1 ] || fail "$t: no service.json in zip"
  ok "starter $t: downloadable, $n service.json files"
  if command -v flisk >/dev/null; then
    stack="$(field "(d[0]['run'][-1].split(' ',2)[2] if d[0]['run'][-1].count(' ')>1 else '')")"
    (cd "$proj" && flisk up $stack --dry-run >/dev/null 2>&1) || fail "$t: flisk up ${stack:-} --dry-run failed"
    ok "starter $t: flisk up --dry-run"
  fi
done

# --- Website starters: no ZIP, Flisk makes the site on the user's computer -----
if command -v flisk >/dev/null; then
  for t in nextjs vue; do
    call flisk-app-starter "{\"template\":\"$t\",\"projectName\":\"e2e-$t\"}"
    [ "$(field "d[0]['download']")" = "None" ] || fail "$t: should not have a ZIP"
    site="$WORK/site-$t"; mkdir "$site"
    # run the printed steps, minus the global install and the real start
    python3 -c "import json; [print(c) for c in json.load(open('$WORK/items.json'))[0]['run'][1:-1]]" > "$WORK/$t.steps"
    (cd "$site" && bash -ec "$(paste -sd';' "$WORK/$t.steps" | sed 's/;/ \&\& /g')" >/dev/null 2>&1) \
      || fail "$t: printed steps do not work"
    last="$(field "d[0]['run'][-1]")"
    (cd "$site/e2e-$t" && ${last} --dry-run >/dev/null 2>&1) || fail "$t: '$last --dry-run' failed"
    ok "starter $t: printed steps create a site and flisk plans it"
  done
fi

# --- Scanner: must list the pieces of a known app and find no problems ------
call flisk-stack-scanner '{"repoUrl":"https://github.com/flisk-sh/flisk-example"}'
rows="$(field "len(d)")"; bad="$(field "sum(1 for r in d if r.get('issues'))")"
[ "$rows" -ge 1 ] || fail "scanner found no pieces"
[ "$bad" -eq 0 ] || fail "scanner reported problems on a known-good app"
ok "scanner: $rows pieces, 0 problems"

echo "ALL E2E CHECKS PASSED"
