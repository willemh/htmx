import { Hono } from 'hono'
import { jsx } from 'hono/jsx'
import { renderToString } from 'hono/jsx/dom/server'
import { Layout } from '../Layout/Layout.js'
import { Showcase } from './Showcase.js'

export const showcaseRoutes = new Hono()

const renderShowcase = (category?: string) =>
  renderToString(
    jsx(Layout, { title: 'DaisyUI Showcase' }, jsx(Showcase, { category }))
  )

showcaseRoutes.get('/', (c) => c.html(renderShowcase()))
showcaseRoutes.get('/:category', (c) => c.html(renderShowcase(c.req.param('category'))))