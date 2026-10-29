import { Actor } from 'apify';
import { execFileSync } from 'node:child_process';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { scan } from './scan.js';

await Actor.init();
try {
    const { repoUrl, branch, subdir } = (await Actor.getInput()) ?? {};
    if (!repoUrl || !/^https:\/\/[^\s]+$/.test(repoUrl)) {
        throw new Error('repoUrl must be a public https:// Git URL');
    }
    if (subdir && subdir.split(/[\\/]/).includes('..')) throw new Error('subdir must stay inside the repo');

    const dir = mkdtempSync(join(tmpdir(), 'flisk-scan-'));
    const args = ['clone', '--depth', '1', ...(branch ? ['--branch', branch] : []), '--', repoUrl, dir];
    execFileSync('git', args, { stdio: 'inherit', env: { ...process.env, GIT_TERMINAL_PROMPT: '0' } });

    const rows = scan(subdir ? join(dir, subdir) : dir);
    await Actor.pushData(rows);
    await Actor.setStatusMessage(`Found ${rows.length} Flisk service manifest(s)`);
} finally {
    await Actor.exit();
}
