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
  feed.options = {
    id: 'Huzhongyang\'s blog',
    title: 'Huzhongyang\'s blog',
    link: constants.blogUrl,
    description: 'Huzhongyang\'s blog',
    language: 'zh-CN',
    image: `${constants.blogUrl}/images/avatar.png`,
    copyright: 'Copyright © 2025 Huzhongyang',
  }
  feed.addContributor({
    name: 'huzhongyang',
    email: 'hzy18023@gmail.com',
    link: `${constants.blogUrl}/writing`,
  })
}
