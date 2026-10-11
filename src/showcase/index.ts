import type { MiddlewareHandler } from 'hono'

export const showcase: MiddlewareHandler = async (c, next) => {
  if (process.env.ENABLE_SHOWCASE !== 'true') {
    await next()
    return
  }

  const { showcaseRoutes } = await import('./routes.js')
  const url = new URL(c.req.url)
  url.pathname = url.pathname.slice('/showcase'.length) || '/'

  return showcaseRoutes.fetch(new Request(url, c.req.raw))
}