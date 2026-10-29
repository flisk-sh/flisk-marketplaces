// Mirrors the public starters behind `flisk project <template>` (cli/src/utils/project-templates.ts).
export const TEMPLATES = {
    ecommerce: {
        title: 'Online shop (Vue storefront + catalog API)',
        repo: 'https://github.com/flisk-sh/flisk-ecommerce-example.git',
        youGet: 'A Vue 3 storefront and a Hono catalog API.',
        stack: 'store',
    },
    saas: {
        title: 'SaaS app (dashboard + checkout button)',
        repo: 'https://github.com/flisk-sh/flisk-saas-starter.git',
        youGet: 'An account dashboard and a working checkout button (local, not a billing deploy).',
    },
    restaurant: {
        title: 'Restaurant app (reservations, kitchen, floor)',
        repo: 'https://github.com/flisk-sh/flisk-restaurant-example.git',
        youGet: 'Reservations, kitchen, menu and floor control.',
    },
    'agent-stack': {
        title: 'AI agent app (agent + tools + database)',
        repo: 'https://github.com/flisk-sh/flisk-agent-stack.git',
        youGet: 'A Bun agent, an MCP tool server, Postgres and NATS messaging.',
    },
    'user-management': {
        title: 'Accounts and login (admin + portal)',
        repo: 'https://github.com/flisk-sh/flisk-user-management.git',
        youGet: 'Identity admin, a user portal and compliance stacks (not a hosted IdP).',
    },
    example: {
        title: 'Minimal starter (API + website + worker + database)',
        repo: 'https://github.com/flisk-sh/flisk-example.git',
        youGet: 'The smallest Flisk app: two stacks, four services.',
    },
};

export function runCommands(dir, stack) {
    return [
        'npm install -g @flisk-sh/flisk',
        `cd ${dir}`,
        stack ? `flisk up ${stack}` : 'flisk up',
    ];
}
