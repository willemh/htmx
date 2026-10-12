import type { PropsWithChildren } from 'hono/jsx'
import { Header } from './Header.js'
import { PageFooter } from './PageFooter.js'
import { ThemePersistence } from '../client/state/ThemePersistence.js'

type LayoutProps = PropsWithChildren<{
  title?: string
  header?: PropsWithChildren['children']
}>

const cssUrl =
  process.env.NODE_ENV === 'production'
    ? '/public/output.css'
    : `/public/output.css?v=${Date.now()}`

export const Layout = ({ title = 'Test Application', header, children }: LayoutProps) => {
  return (
    <html data-theme="cupcake">
      <head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <ThemePersistence />
        <link rel="stylesheet" href={cssUrl} />
      </head>
      <body>
        {header ?? <Header title={title} />}
        {children}
        {<PageFooter />}
      </body>
    </html>
  )
}