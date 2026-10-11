import type { PropsWithChildren } from 'hono/jsx'

type StackProps = PropsWithChildren<{
  className?: string
}>

export const Stack = ({ className = '', children }: StackProps) => (
  <div className={`stack ${className}`.trim()}>
    {children}
  </div>
)