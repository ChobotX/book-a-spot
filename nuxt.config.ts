// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@sidebase/nuxt-auth',
        '@nuxtjs/i18n',
        // '@dargmuesli/nuxt-cookie-control' // TODO configure
        // '@nuxtjs/html-validator' // TODO configure
    ],
    devtools: { enabled: true },
    typescript: { typeCheck: true },
    eslint: { fix: true },
    pages: true,
    auth: {
        provider: {
            type: 'authjs',
        },
        globalAppMiddleware: {
            isEnabled: true,
        },
        baseURL: '/api/auth',
    },
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.ts',
            },
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'lang',
        strategy: 'no_prefix',
    },
});
