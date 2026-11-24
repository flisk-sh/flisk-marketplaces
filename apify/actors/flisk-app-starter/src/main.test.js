import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { delimiter, join } from 'node:path';
import test from 'node:test';

for (const failUpload of [false, true]) {
    test(`removes the starter workspace when upload ${failUpload ? 'fails' : 'succeeds'}`, (t) => {
        const root = mkdtempSync(join(tmpdir(), 'starter-test-'));
        t.after(() => rmSync(root, { recursive: true, force: true }));
        const scratch = join(root, 'tmp');
        const bin = join(root, 'bin');
        const apify = join(root, 'node_modules', 'apify');
        mkdirSync(scratch);
        mkdirSync(bin);
        mkdirSync(apify, { recursive: true });
        writeFileSync(join(root, 'package.json'), '{"type":"module"}');
        for (const file of ['main.js', 'templates.js']) {
            copyFileSync(new URL(`./${file}`, import.meta.url), join(root, file));
        }
        writeFileSync(join(bin, 'git'), [
            '#!/bin/sh', 'set -eu', 'for dir; do :; done',
            'mkdir -p "$dir/.git"', 'echo starter > "$dir/README.md"', '',
        ].join('\n'), { mode: 0o755 });
        writeFileSync(join(apify, 'package.json'), '{"type":"module","exports":"./index.js"}');
        writeFileSync(join(apify, 'index.js'), `
            import assert from 'node:assert/strict';
            export const Actor = {
                init() {},
                getInput() { return { projectName: 'my-shop' }; },
                openKeyValueStore() {
                    return {
                        setValue(key, data) {
                            assert.equal(key, 'my-shop.zip');
                            assert.equal(data.subarray(0, 2).toString(), 'PK');
                            if (process.env.FAIL_UPLOAD === '1') throw new Error('upload failed');
                        },
                        getPublicUrl() { return 'https://example.test/my-shop.zip'; },
                    };
                },
                pushData({ download }) { assert.equal(download, 'https://example.test/my-shop.zip'); },
                setStatusMessage() {},
                exit() {},
            };
        `);

        const result = spawnSync(process.execPath, [join(root, 'main.js')], {
            env: {
                ...process.env,
                PATH: `${bin}${delimiter}${process.env.PATH}`,
                TMPDIR: scratch,
                FAIL_UPLOAD: failUpload ? '1' : '0',
            },
            encoding: 'utf8',
        });
        assert.ifError(result.error);
        assert.equal(result.status, failUpload ? 1 : 0, result.stderr);
        if (failUpload) assert.match(result.stderr, /Error: upload failed/);
        assert.deepEqual(readdirSync(scratch), []);
    });
}
