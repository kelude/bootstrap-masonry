import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        base: env.VITE_BASE || "/",
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: [
                        'import',
                        'color-functions',
                        'global-builtin',
                        'if-function',
                    ],
                },
            },
        },
    }
})
