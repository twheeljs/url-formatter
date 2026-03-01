// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'URL Formatter - Parse, Analyze & Debug URLs',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A modern, intuitive tool to parse, format, and analyze URLs. Break down protocols, hosts, paths, and query parameters instantly.' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'URL Formatter - Parse, Analyze & Debug URLs' },
        { property: 'og:description', content: 'A modern, intuitive tool to parse, format, and analyze URLs. Break down protocols, hosts, paths, and query parameters instantly.' },
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'URL Formatter - Parse, Analyze & Debug URLs' },
        { property: 'twitter:description', content: 'A modern, intuitive tool to parse, format, and analyze URLs. Break down protocols, hosts, paths, and query parameters instantly.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})