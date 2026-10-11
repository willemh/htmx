import type { PropsWithChildren } from 'hono/jsx'

type MockupCodeProps = PropsWithChildren<{
  className?: string
}>

type MockupCodeLineProps = PropsWithChildren<{
  prefix?: string
  className?: string
}>

export const MockupCode = ({ className = '', children }: MockupCodeProps) => (
  <div className={`mockup-code ${className}`.trim()}>{children}</div>
)

export const MockupCodeLine = ({ prefix = '$', className = '', children }: MockupCodeLineProps) => (
  <pre data-prefix={prefix} className={className || undefined}>
    <code>{children}</code>
  </pre>
)