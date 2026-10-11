import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { jsx } from 'hono/jsx'
import { renderToString } from 'hono/jsx/dom/server'
import { Layout } from './Layout/Layout.js'
import { Hello } from './components/Hello.js'

const app = new Hono()

app.use('/public/*', serveStatic({ root: './dist' }))

app.get('/', (c) => {
  const html = renderToString(
    jsx(Layout, { title: 'Test Application' }, jsx(Hello, {}))
  )

  return c.html(html)
})

console.log('Server is running on http://localhost:3000')
serve(app)