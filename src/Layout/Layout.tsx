import type { PropsWithChildren } from 'hono/jsx'
import { Header } from './Header.js'

type LayoutProps = PropsWithChildren<{
  title?: string
}>

const cssUrl =
  process.env.NODE_ENV === 'production'
    ? '/public/output.css'
    : `/public/output.css?v=${Date.now()}`

export const Layout = ({ title = 'Test Application', children }: LayoutProps) => {
  return (
    <html data-theme="cupcake">
      <head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="stylesheet" href={cssUrl} />
      </head>
      <body>
        <Header title={title}></Header>{children}</body>
    </html>
  )
}