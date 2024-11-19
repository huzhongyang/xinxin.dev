import process from 'node:process'

export default defineNuxtConfig({
  extends: '@nuxt-themes/typography',
  modules: ['@unocss/nuxt', '@nuxtjs/google-fonts', '@nuxt/image', '@nuxt/content', 'pinceau/nuxt'],
  content: {
    navigation: {
      fields: ['title', 'description', 'created', 'modified', 'author', 'tags', 'category', 'aliases', 'draft', 'stick'],
    },
    documentDriven: true,
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      showProgressPage: process.env.SHOW_PROGRESS_PAGE === 'true' || false,
    },
  },
  compatibilityDate: '2024-10-04',
})
