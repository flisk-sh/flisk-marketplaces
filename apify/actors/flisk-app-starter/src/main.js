import { Actor } from 'apify';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { TEMPLATES, runCommands } from './templates.js';

await Actor.init();
try {
    const { template = 'ecommerce', projectName = 'my-app' } = (await Actor.getInput()) ?? {};
    const t = TEMPLATES[template];
    if (!t) throw new Error(`Unknown template "${template}". Choose one of: ${Object.keys(TEMPLATES).join(', ')}`);
    if (!/^[a-z0-9][a-z0-9-]{0,48}$/.test(projectName)) {
        throw new Error('projectName must be lowercase letters, digits and dashes (max 49 chars)');
    }

    const work = mkdtempSync(join(tmpdir(), 'flisk-starter-'));
    const dir = join(work, projectName);
    execFileSync('git', ['clone', '--depth', '1', '--', t.repo, dir], {
        stdio: 'inherit',
        env: { ...process.env, GIT_TERMINAL_PROMPT: '0' },
    });
    rmSync(join(dir, '.git'), { recursive: true, force: true });

    const zipPath = join(work, `${projectName}.zip`);
    execFileSync('zip', ['-qr', zipPath, projectName], { cwd: work, stdio: 'inherit' });

    const key = `${projectName}.zip`;
    const store = await Actor.openKeyValueStore();
    await store.setValue(key, await readFile(zipPath), { contentType: 'application/zip' });

    await Actor.pushData({
        template,
        title: t.title,
        youGet: t.youGet,
        download: store.getPublicUrl(key),
        run: runCommands(projectName, t.stack),
        needs: 'Free tools on your computer: Docker, Tilt, Node.js and Bun. Run `flisk doctor` and it tells you what is missing.',
    });
    await Actor.setStatusMessage(`Your "${t.title}" project is ready to download`);
} finally {
    await Actor.exit();
}
