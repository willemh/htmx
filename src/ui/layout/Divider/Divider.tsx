import type { PropsWithChildren } from 'hono/jsx'

type DividerProps = PropsWithChildren<{
  orientation?: 'horizontal' | 'vertical'
  className?: string
}>

export const Divider = ({ orientation = 'horizontal', className = '', children }: DividerProps) => (
  <div className={`divider ${orientation === 'vertical' ? 'divider-horizontal' : ''} ${className}`.trim()}>
    {children}
  </div>
)