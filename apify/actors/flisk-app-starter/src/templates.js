// Mirrors the public starters behind `flisk project <template>` (cli/src/utils/project-templates.ts).
export const TEMPLATES = {
    ecommerce: {
        title: 'Online shop (shop page + product list)',
        repo: 'https://github.com/flisk-sh/flisk-ecommerce-example.git',
        youGet: 'A shop page where people see products, and the product list behind it.',
        stack: 'store',
    },
    saas: {
        title: 'Website with accounts and a Buy button',
        repo: 'https://github.com/flisk-sh/flisk-saas-starter.git',
        youGet: 'A page where people see their account, and a Buy button that works on your computer (it does not take real money).',
    },
    restaurant: {
        title: 'Restaurant app (table bookings, kitchen screen)',
        repo: 'https://github.com/flisk-sh/flisk-restaurant-example.git',
        youGet: 'Table bookings, a menu, a kitchen screen and a floor screen.',
    },
    'agent-stack': {
        title: 'AI helper app (chat helper that can use tools)',
        repo: 'https://github.com/flisk-sh/flisk-agent-stack.git',
        youGet: 'An AI helper, the tools it can use, and a place to save what it learns.',
    },
    'user-management': {
        title: 'Sign-up and login for your users',
        repo: 'https://github.com/flisk-sh/flisk-user-management.git',
        youGet: 'Sign-up and login pages, an admin page to manage users, and a page for users to manage themselves.',
    },
    example: {
        title: 'Tiny starter (a website that saves data)',
        repo: 'https://github.com/flisk-sh/flisk-example.git',
        youGet: 'The smallest working app: a website, the part behind it, and a place to save data.',
    },
};

// Starters with no repo are made on the user's computer by Flisk itself (verified with `flisk resource --framework`).
for (const [id, framework, title] of [
    ['nextjs', 'next', 'Next.js website'],
    ['vue', 'vue', 'Vue website'],
]) {
    TEMPLATES[id] = {
        title,
        youGet: `A ${title} that reloads when you save a file. Flisk creates it on your computer.`,
        framework,
        stack: 'web',
    };
}

export function runCommands(dir, stack, framework) {
    if (framework) {
        return [
            'npm install -g @flisk-sh/flisk',
            `mkdir ${dir} && cd ${dir}`,
            'flisk project --yes',
            `flisk resource my-site --type frontend --framework ${framework} --stack ${stack} --yes`,
            `flisk up ${stack}`,
        ];
    }
    return [
        'npm install -g @flisk-sh/flisk',
        `cd ${dir}`,
        stack ? `flisk up ${stack}` : 'flisk up',
    ];
}
