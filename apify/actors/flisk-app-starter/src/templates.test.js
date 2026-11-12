import test from 'node:test';
import assert from 'node:assert/strict';
import { TEMPLATES, runCommands } from './templates.js';

test('every template points at a public flisk-sh repo', () => {
    for (const [id, t] of Object.entries(TEMPLATES)) {
        if (!t.repo) continue;
        assert.match(t.repo, /^https:\/\/github\.com\/flisk-sh\/[a-z-]+\.git$/);
        assert.ok(t.title.length > 5);
        assert.match(id, /^[a-z-]+$/);
    }
});

test('run commands end with flisk up, with the stack when a starter needs one', () => {
    assert.equal(runCommands('x').at(-1), 'flisk up');
    assert.equal(runCommands('shop', TEMPLATES.ecommerce.stack).at(-1), 'flisk up store');
});

test('website starters are made by flisk on the user computer', () => {
    const run = runCommands('my-web', TEMPLATES.nextjs.stack, TEMPLATES.nextjs.framework);
    assert.ok(run.includes('flisk resource my-site --type frontend --framework next --stack web --yes'));
    assert.equal(run.at(-1), 'flisk up web');
    assert.equal(TEMPLATES.nextjs.repo, undefined);
});
