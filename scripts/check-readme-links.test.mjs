import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { checkUrl, linksIn, temporaryOutage } from './check-readme-links.mjs';

const REPO = fileURLToPath(new URL('..', import.meta.url));

test('the README no longer points at unpublished hosts or a missing repo', () => {
  const markdown = readFileSync(`${REPO}README.md`, 'utf8');
  const urls = linksIn(markdown);
  for (const host of ['glossary.flisk.si', 'roast.flisk.si', 'match.flisk.si', 'tagline.flisk.si', 'links.flisk.si', 'helpdock.flisk.sh', 'github.com/flisk-sh/app-factory']) {
    assert.equal(urls.some((url) => url.includes(host)), false, `README still links ${host}`);
  }
  for (const host of ['glossary.flisk.si', 'roast.flisk.si', 'match.flisk.si', 'tagline.flisk.si', 'links.flisk.si']) {
    assert.ok(markdown.includes(`\`${host}\` (not published)`), `README should name ${host} as unpublished`);
  }
});

test('linksIn keeps only flisk hosts and org repos', () => {
  const urls = linksIn([
    '[app](https://build.flisk.si/)',
    '[mcp](https://citable.flisk.si/mcp)',
    '[repo](https://github.com/flisk-sh/citable).',
    '[third party](https://toolradar.com/tools/citable)',
    '[other org](https://github.com/other/repo)',
  ].join('\n'));
  assert.deepEqual(urls, ['https://build.flisk.si/', 'https://citable.flisk.si/mcp', 'https://github.com/flisk-sh/citable']);
});

test('checkUrl fails on a dead host, accepts a live one and tolerates a POST-only MCP endpoint', async () => {
  const fake = async (url, init) => {
    if (url.includes('dead')) return new Response(null, { status: 404 });
    if (url.endsWith('/mcp')) return new Response(null, { status: 405 });
    if (url.includes('head-only')) return new Response(null, { status: init.method === 'HEAD' ? 404 : 200 });
    return new Response(null, { status: 200 });
  };
  assert.equal((await checkUrl('https://build.flisk.si/', fake)).ok, true);
  assert.equal((await checkUrl('https://dead.flisk.si/', fake)).ok, false);
  assert.equal((await checkUrl('https://pages.flisk.si/mcp', fake)).ok, true);
  assert.equal((await checkUrl('https://head-only.flisk.si/', fake)).ok, true);
});

test('a paused service is allowed only until its expiry', () => {
  assert.ok(temporaryOutage('https://helpdock.flisk.si/mcp', new Date('2026-11-19T00:00:00Z')));
  assert.equal(temporaryOutage('https://helpdock.flisk.si/mcp', new Date('2026-12-02T00:00:00Z')), null);
  assert.equal(temporaryOutage('https://build.flisk.si/'), null);
});
