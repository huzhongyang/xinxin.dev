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

export type MenusPath = (typeof menuRouter[number])['name']

export interface Menu {
  name: string
  path: string
  icon: string
}
