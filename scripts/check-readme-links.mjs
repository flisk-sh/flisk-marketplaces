// Checks the links this README makes promises about: every flisk.si/flisk.sh host and every github.com/flisk-sh
// repo. Third-party sites (Toolradar, Product Hunt, Claude) change independently of this repo and are out of scope.
// Run with `node scripts/check-readme-links.mjs`; importable helpers are used by check-readme-links.test.mjs.
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { pathToFileURL } from 'node:url';

const REPO = fileURLToPath(new URL('..', import.meta.url));

// A service can be paused on purpose. Keep the expiry short: after it, the 503 is a failure again.
const TEMPORARY_OUTAGES = {
  'helpdock.flisk.si': {
    until: '2026-12-01T00:00:00.000Z',
    reason: 'Helpdock is paused until 2026-12-01 (Retry-After on the live 503).',
  },
};

export const OWNED_HOST = /^(?:[a-z0-9-]+\.flisk\.(?:si|sh)|github\.com)$/;

// Pull the URLs the README actually points at, dropping markdown punctuation.
export function linksIn(markdown) {
  return [
    ...new Set(
      [...markdown.matchAll(/https:\/\/[^\s<>"'`)\]}|]+/g)]
        .map(([url]) => url.replace(/[.,;:]+$/, ''))
        .filter((url) => {
          const host = new URL(url).hostname;
          return OWNED_HOST.test(host) && (host !== 'github.com' || url.startsWith('https://github.com/flisk-sh/'));
        }),
    ),
  ];
}

export function temporaryOutage(url, now = new Date()) {
  const host = new URL(url).hostname;
  const outage = TEMPORARY_OUTAGES[host];
  return outage && now.getTime() < Date.parse(outage.until) ? outage : null;
}

// One URL, one verdict. HEAD is cheaper; a server that refuses it falls back to GET.
export async function checkUrl(url, fetchImpl = fetch) {
  const paused = temporaryOutage(url);
  if (paused) return { url, status: 503, ok: true, note: paused.reason };
  let response;
  // Some Workers answer HEAD with 404 even though GET works, and MCP endpoints answer both with 405 because they
  // only take POST. Neither means the link is dead.
  for (const method of ['HEAD', 'GET']) {
    try {
      response = await fetchImpl(url, { method, redirect: 'follow', signal: AbortSignal.timeout(12_000) });
    } catch (error) {
      return { url, status: 0, ok: false, note: error.message };
    }
    if (response.status < 400) break;
  }
  const ok = response.status < 400 || response.status === 405 || response.status === 501;
  const note = ok && response.status >= 400 ? 'reachable; this endpoint only takes POST' : ok ? '' : `HTTP ${response.status}`;
  return { url, status: response.status, ok, note };
}

export async function main(argv = process.argv.slice(2)) {
  const readme = argv[0] || `${REPO}README.md`;
  const markdown = await readFile(readme, 'utf8');
  const urls = linksIn(markdown);
  if (urls.length === 0) throw new Error('No flisk URLs found in the README; the checker is broken.');
  const results = await Promise.all(urls.map((url) => checkUrl(url)));
  const failed = results.filter((r) => !r.ok);
  for (const r of results) console.log(`${r.ok ? 'ok  ' : 'FAIL'} ${r.status || 'DNS'} ${r.url}${r.note ? ` (${r.note})` : ''}`);
  console.log(`\n${results.length - failed.length}/${results.length} flisk links resolve.`);
  if (failed.length) throw new Error(`${failed.length} README link(s) do not resolve.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
