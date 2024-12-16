// @unocss-include

import type { NavItem } from '@nuxt/content'

export const menuRouter = [
  {
    name: 'Home',
    path: '/',
    icon: 'i-carbon-ibm-cloud-direct-link-2-dedicated-hosting',
  },
  {
    name: 'Writing',
    path: '/writing',
    icon: 'i-carbon-pen-fountain',
  },
  {
    name: 'Journey',
    path: '/journey',
    icon: 'i-carbon-favorite-filled',
  },
] as const

export const onlineLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/huzhongyang',
    icon: 'i-iconoir-github',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/hzy18023',
    icon: 'i-carbon-logo-x',
  },
]

export type MenusPath = (typeof menuRouter[number])['path']

export interface Menu {
  name: string
  path: string
  icon: string
}

export interface PostNavItem extends NavItem {
  created?: string
  modified?: string
  author?: string
  tags?: string[]
  category?: string
  aliases?: string[]
  draft?: boolean
  stick?: boolean
  description?: string
}
