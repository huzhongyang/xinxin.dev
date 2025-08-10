import { queryCollection } from '@nuxt/content/nitro'

export default defineEventHandler(async (event) => {
  return await queryCollection(event, 'blogs').all()
})
