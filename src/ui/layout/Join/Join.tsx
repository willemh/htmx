import type { PropsWithChildren } from 'hono/jsx'

type JoinProps = PropsWithChildren<{
  orientation?: 'horizontal' | 'vertical'
  className?: string
}>

export const Join = ({ orientation = 'horizontal', className = '', children }: JoinProps) => (
  <div className={`join ${orientation === 'vertical' ? 'join-vertical' : ''} ${className}`.trim()}>
    {children}
  </div>
)