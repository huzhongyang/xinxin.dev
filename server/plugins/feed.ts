import type { Feed } from 'nuxt-module-feed'
import { constants } from '@/utils/constants'

export default defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook('feed:generate', async ({ feed, options }) => {
    switch (options.path) {
      case '/rss.xml':
        await createRssFeed(feed)
        break
    }
  })
})

async function createRssFeed(feed: Feed) {
  const allPosts = await $fetch('/api/getAllPosts')
  console.log(allPosts)
  for (const post of allPosts) {
    feed.addItem({
      title: post.title,
      link: `${constants.blogUrl}${post.path}`,
      description: post.description,
      date: new Date(post.created),
      id: post.id,
    })
  }
  feed.addCategory('blog post')

  feed.addContributor({
    name: 'huzhongyang',
    email: 'hzy18023@gmail.com',
    link: `${constants.blogUrl}/writing`,
  })
}
