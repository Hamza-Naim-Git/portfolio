import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    compilerOptions: {
        // Force le mode runes pour Svelte 5
        runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules' ) ? undefined : true)
    },
    kit: {
        // Configuration de l'adaptateur pour Vercel
        adapter: adapter()
    }
};

export default config;