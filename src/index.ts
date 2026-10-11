import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { mainapp } from './mainapp.js'
import { showcase } from './showcase/index.js'

const app = new Hono()

app.use('/public/*', serveStatic({ root: './dist' })) // serve static files from the dist directory
app.use('/', mainapp) // register the main application middleware for the root route
app.use('/showcase/*', showcase) // register the showcase middleware for /showcase routes

const port = Number(process.env.PORT) || 3000
console.log(`Server is running on http://localhost:${port}`)
serve({ fetch: app.fetch, port })