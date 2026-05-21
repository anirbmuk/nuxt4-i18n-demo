// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  css: ['~~/app/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'de-de', language: 'de-DE', domain: 'localhost:3000', file: 'de_DE.json', domainDefault: true },
      { code: 'de-at', language: 'de-AT', domain: 'localhost:3000', file: 'de_AT.json', },
      { code: 'en-gb', language: 'en-GB', domain: 'localhost:3000', file: 'en_GB.json' },
      { code: 'fr-fr', language: 'fr-FR', domain: 'localhost:3000', file: 'fr_FR.json' },
      { code: 'it-it', language: 'it-IT', domain: 'it-it.localhost:3000', file: 'it_IT.json', domainDefault: true },
      { code: 'hr-hr', language: 'hr-HR', domain: 'hr-hr.localhost:3000', file: 'hr_HR.json', domainDefault: true },
      { code: 'nl-nl', language: 'nl-NL', domain: 'nl-nl.localhost:3000', file: 'nl_NL.json', domainDefault: true },
      { code: 'nl-BE', language: 'nl-BE', domain: 'nl-be.localhost:3000', file: 'nl_BE.json', domainDefault: true },
    ],
    differentDomains: true,
    detectBrowserLanguage: false,
    defaultLocale: 'de-de',
    strategy: 'prefix_except_default',
  },
  devServer: {
    https: (!process.env.HTTPS_KEY || !process.env.HTTPS_CERT) ? false : {
      key: process.env.HTTPS_KEY,
      cert: process.env.HTTPS_CERT,
    }
  },
})
