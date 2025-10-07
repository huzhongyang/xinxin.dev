import { Feed } from 'feed'
import getAllPosts from '~/server/api/getAllPosts'
import { constants } from '~/utils/constants'

export default defineEventHandler(async (event) => {
  const blogs = await getAllPosts(event)
  const lastUpdate = blogs.length ? new Date(blogs[0].created) : new Date()

  const feed = new Feed({
    title: '我的写作博客',
    description: '这是我的个人写作博客的RSS源，包含最新的文章和更新。',
    id: constants.blogUrl,
    link: `${constants.blogUrl}/writing`,
    language: 'zh', // 语言设置为中文
    favicon: `${constants.blogUrl}/favicon.ico`,
    copyright: '版权所有 2025, zyH',
    updated: lastUpdate,
    generator: 'Nuxt RSS Generator',
    feedLinks: {
      rss: `${constants.blogUrl}/rss.xml`,
    },
    author: {
      name: '胡仲阳',
      email: 'hzy18023@gmail.com',
      link: constants.blogUrl,
    },
  })

  for (const blog of blogs) {
    feed.addItem({
      title: blog.title,
      id: blog.id,
      link: `${constants.blogUrl}${blog.path}`,
      description: blog.description || blog.title,
      date: new Date(blog.modified),
    })
  }
  setHeader(event, 'content-type', 'application/rss+xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')
  return feed.rss2()
})
