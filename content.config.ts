import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: 'page',
      source: 'writing/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        created: z.date(),
        modified: z.date(),
        author: z.string(),
        tags: z.array(z.string()),
        category: z.string(),
        aliases: z.array(z.string()),
        stick: z.boolean(),
      }),
    }),
  },
})
