// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  css: ['~~/app/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'de', language: 'de-DE', domain: 'localhost:3000', file: 'de_DE.json', domainDefault: true },
      { code: 'en', language: 'en-US', domain: 'localhost:3000', file: 'en_GB.json' },
      { code: 'fr', language: 'fr-FR', domain: 'localhost:3000', file: 'fr_FR.json' },
      { code: 'it', language: 'it-IT', domain: 'it.localhost:3000', file: 'it_IT.json', domainDefault: true },
      { code: 'hr', language: 'hr-HR', domain: 'hr.localhost:3000', file: 'hr_HR.json', domainDefault: true },
    ],
    differentDomains: true,
    detectBrowserLanguage: false,
    defaultLocale: 'de',
    strategy: 'prefix_except_default',
  },
  devServer: {
    https: {
      key: process.env.HTTPS_KEY,
      cert: process.env.HTTPS_CERT,
    }
  },
})
