import type { PropsWithChildren } from 'hono/jsx'

type BadgeProps = PropsWithChildren<{
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  variant?: 'outline' | 'dash' | 'soft' | 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}>

export const Badge = ({ color, variant, size, className = '', children }: BadgeProps) => (
  <span className={[
    'badge',
    color && `badge-${color}`,
    variant && `badge-${variant}`,
    size && `badge-${size}`,
    className,
  ].filter(Boolean).join(' ')}>
    {children}
  </span>
)