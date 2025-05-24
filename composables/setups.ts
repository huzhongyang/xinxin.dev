export function setupHeader() {
  const isShowProgressPage = useIsDeveloping()
  useHeadSafe({
    title: () => isShowProgressPage ? '🧐Building...' : '🧣me',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
      { rel: 'manifest', href: '/icons/site.webmanifest' },
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#000000' },
      { rel: 'icon', type: 'image/png', href: '/icons/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/icons/favicon-32x32.png', sizes: '32x32' },
    ],
  })

  useHead({
    script: [
      // { src: 'https://cdn.seline.so/seline.js', async: true },
    ],
  })
}
