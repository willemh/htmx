import type { PropsWithChildren } from 'hono/jsx'

type MockupBrowserProps = PropsWithChildren<{
  url?: string
  className?: string
  toolbarClassName?: string
  contentClassName?: string
}>

export const MockupBrowser = ({
  url = 'https://example.com',
  className = '',
  toolbarClassName = '',
  contentClassName = '',
  children,
}: MockupBrowserProps) => (
  <div className={`mockup-browser border border-base-300 ${className}`.trim()}>
    <div className={`mockup-browser-toolbar ${toolbarClassName}`.trim()}>
      <div className="input border border-base-300">{url}</div>
    </div>
    <div className={contentClassName || undefined}>{children}</div>
  </div>
)