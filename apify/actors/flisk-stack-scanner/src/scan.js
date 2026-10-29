import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const SKIP = new Set(['.git', 'node_modules', '.flisk', '.flisk-out']);
const KNOWN_TYPES = new Set(['frontend', 'backend', 'worker', 'agent', 'mcp', 'migrator']);

export function findManifests(root) {
    const found = [];
    const walk = (dir) => {
        for (const name of readdirSync(dir)) {
            if (SKIP.has(name)) continue;
            const full = join(dir, name);
            const st = statSync(full);
            if (st.isDirectory()) walk(full);
            else if (name === 'service.json') found.push(full);
        }
    };
    walk(root);
    return found;
}

export function validate(m) {
    const issues = [];
    if (typeof m.appName !== 'string' || !m.appName) issues.push('appName missing');
    if (!KNOWN_TYPES.has(m.appType)) issues.push(`unknown appType: ${m.appType}`);
    if (m.port !== undefined && !(Number.isInteger(m.port) && m.port > 0 && m.port < 65536)) issues.push('invalid port');
    if (m.dependsOn !== undefined && !Array.isArray(m.dependsOn)) issues.push('dependsOn must be an array');
    return issues;
}

export function scan(root) {
    const rows = [];
    for (const file of findManifests(root)) {
        const path = relative(root, file);
        let m;
        try {
            m = JSON.parse(readFileSync(file, 'utf8'));
        } catch (e) {
            rows.push({ path, issues: [`invalid JSON: ${e.message}`] });
            continue;
        }
        rows.push({
            appName: m.appName,
            appType: m.appType,
            stack: m.stack ?? null,
            port: m.port ?? null,
            dependsOn: m.dependsOn ?? [],
            path,
            issues: validate(m),
        });
    }
    return rows;
}
