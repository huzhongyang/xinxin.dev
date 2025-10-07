import { queryCollection } from '@nuxt/content/server'

export default defineEventHandler(async (event) => {
  return await queryCollection(event, 'blogs').order('modified', 'DESC').all()
})
