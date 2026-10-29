import { test, expect } from 'bun:test';
import { TEMPLATES, runCommands } from './templates.js';

test('every template points at a public flisk-sh repo', () => {
    for (const [id, t] of Object.entries(TEMPLATES)) {
        if (!t.repo) continue;
        expect(t.repo).toMatch(/^https:\/\/github\.com\/flisk-sh\/[a-z-]+\.git$/);
        expect(t.title.length).toBeGreaterThan(5);
        expect(id).toMatch(/^[a-z-]+$/);
    }
});

test('run commands end with flisk up, with the stack when a starter needs one', () => {
    expect(runCommands('x').at(-1)).toBe('flisk up');
    expect(runCommands('shop', TEMPLATES.ecommerce.stack).at(-1)).toBe('flisk up store');
});

test('website starters are made by flisk on the user computer', () => {
    const run = runCommands('my-web', TEMPLATES.nextjs.stack, TEMPLATES.nextjs.framework);
    expect(run).toContain('flisk resource my-site --type frontend --framework next --stack web --yes');
    expect(run.at(-1)).toBe('flisk up web');
    expect(TEMPLATES.nextjs.repo).toBeUndefined();
});
