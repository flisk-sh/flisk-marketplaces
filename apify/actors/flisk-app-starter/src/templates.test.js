import { test, expect } from 'bun:test';
import { TEMPLATES, runCommands } from './templates.js';

test('every template points at a public flisk-sh repo', () => {
    for (const [id, t] of Object.entries(TEMPLATES)) {
        expect(t.repo).toMatch(/^https:\/\/github\.com\/flisk-sh\/[a-z-]+\.git$/);
        expect(t.title.length).toBeGreaterThan(5);
        expect(id).toMatch(/^[a-z-]+$/);
    }
});

test('run commands end with flisk up, with the stack when a starter needs one', () => {
    expect(runCommands('x').at(-1)).toBe('flisk up');
    expect(runCommands('shop', TEMPLATES.ecommerce.stack).at(-1)).toBe('flisk up store');
});
