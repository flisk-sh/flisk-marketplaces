import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { scan, validate } from './scan.js';

test('validate flags bad manifests', () => {
    assert.deepEqual(validate({ appName: 'a', appType: 'backend', port: 4000 }), []);
    assert.equal(validate({ appType: 'nope', port: 0 }).length, 3);
});

test('scan finds nested manifests and skips node_modules', () => {
    const root = mkdtempSync(join(tmpdir(), 'scan-'));
    mkdirSync(join(root, 'svc/api'), { recursive: true });
    mkdirSync(join(root, 'node_modules/x'), { recursive: true });
    writeFileSync(join(root, 'svc/api/service.json'), JSON.stringify({ appName: 'api', appType: 'backend', port: 4000, stack: 's' }));
    writeFileSync(join(root, 'node_modules/x/service.json'), '{}');
    const rows = scan(root);
    assert.equal(rows.length, 1);
    assert.equal(rows[0].appName, 'api');
    assert.deepEqual(rows[0].issues, []);
});
