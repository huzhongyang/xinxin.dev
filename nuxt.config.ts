import process from 'node:process'

export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxtjs/google-fonts', '@nuxt/image'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      showProgressPage: process.env.SHOW_PROGRESS_PAGE === 'true' || false,
    },
  },
})
