import process from 'node:process'

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt', '@nuxtjs/google-fonts', '@nuxt/image'],
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
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
  },
  nitro: {
    preset: 'cloudflare_pages',
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-06-16',
  runtimeConfig: {
    public: {
      showProgressPage: process.env.SHOW_PROGRESS_PAGE === 'true' || false,
    },
  },
})
