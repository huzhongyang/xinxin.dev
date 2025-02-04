import process from 'node:process'

export default defineNuxtConfig({
  extends: '@nuxt-themes/typography',
  modules: ['pinceau/nuxt', '@unocss/nuxt', '@nuxtjs/google-fonts', '@nuxt/image', '@nuxt/content'],
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
  runtimeConfig: {
    public: {
      showProgressPage: process.env.SHOW_PROGRESS_PAGE === 'true' || false,
    },
  },
  compatibilityDate: '2024-10-04',
})
