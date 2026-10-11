import type { PropsWithChildren } from 'hono/jsx'

type KbdProps = PropsWithChildren<{
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}>

export const Kbd = ({ size, className = '', children }: KbdProps) => (
  <kbd className={`kbd ${size ? `kbd-${size}` : ''} ${className}`.trim()}>{children}</kbd>
)