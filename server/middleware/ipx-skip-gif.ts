export default defineEventHandler((event) => {
  const url = getRequestURL(event)

  if (!(url.pathname.endsWith('.awebp') || url.pathname.endsWith('.apng') || url.pathname.endsWith('.gif')))
    return
  return sendRedirect(event, url.pathname.replace(/^\/_ipx\/[^/]+(\/posts\/.*)$/, '$1'), 302)
})
