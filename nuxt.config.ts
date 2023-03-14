// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://github.com/nuxt-modules/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-modules/i18n
    '@nuxtjs/i18n',
    // https://github.com/vuejs/pinia/tree/v2/packages/nuxt
    '@pinia/nuxt',
    // https://github.com/nuxt-modules/html-validator
    '@nuxtjs/html-validator',
    // https://github.com/nuxt/image
    '@nuxt/image-edge',
    // https://github.com/vueuse/vueuse
    '@vueuse/nuxt',
    // https://github.com/nuxt-modules/icon
    'nuxt-icon',
  ],
  runtimeConfig: {
    // The private keys which are only available within server-side
    etherscanApiKey: process.env.NUXT_PUBLIC_ETHERSCAN_API_KEY,
    bscscanApiKey: process.env.NUXT_PUBLIC_BSCSCAN_API_KEY,
    public: {},
    // Keys within public, will be also exposed to the client-side
  },
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  i18n: {
    // baseUrl: "http://localhost:3000",
    defaultLocale: "fr",
    strategy: "prefix_except_default",
    lazy: true,
    langDir: "locales/",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
      },
      {
        code: "fr",
        iso: "fr-FR",
        file: "fr-FR.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      cookieCrossOrigin: true,
      fallbackLocale: "fr",
    },
  },
  typescript: {
    strict: true,
  },
});
