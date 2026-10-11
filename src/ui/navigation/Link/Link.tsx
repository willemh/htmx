import type { PropsWithChildren } from 'hono/jsx'

type LinkProps = PropsWithChildren<{
  href: string
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'info' | 'warning' | 'error'
  hoverOnly?: boolean
  target?: '_self' | '_blank' | '_parent' | '_top'
  className?: string
}>

export const Link = ({ href, color, hoverOnly = false, target, className = '', children }: LinkProps) => (
  <a
    href={href}
    target={target}
    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    className={`link ${color ? `link-${color}` : ''} ${hoverOnly ? 'link-hover' : ''} ${className}`.trim()}
  >
    {children}
  </a>
)