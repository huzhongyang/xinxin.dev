import process from 'node:process'

export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxthub/core', '@nuxt/content', '@nuxtjs/google-fonts', '@nuxt/image'],
  content: {
    build: {
      markdown: {
        highlight: {
          // Theme used in all color schemes.
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai',
          },
        },
      },

    },
  },
  devtools: { enabled: true },
  hub: {
    database: true,
  },
  compatibilityDate: 'latest',
  runtimeConfig: {
    public: {
      showProgressPage: process.env.SHOW_PROGRESS_PAGE === 'true' || false,
    },
  },
})
