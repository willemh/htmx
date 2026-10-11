import type { MiddlewareHandler } from 'hono'
import { jsx } from 'hono/jsx'
import { renderToString } from 'hono/jsx/dom/server'
import { Layout } from './Layout/Layout.js'
import { Hello } from './components/Hello.js'

export const mainapp: MiddlewareHandler = async (c, next) => {
  if (c.req.path !== '/') {
    await next()
    return
  }

  return c.html(renderToString(
    jsx(Layout, { title: 'Test Application' }, jsx(Hello, {}))
  ))
}