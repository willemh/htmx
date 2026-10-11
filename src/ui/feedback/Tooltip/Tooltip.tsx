import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type TooltipProps = PropsWithChildren<{
  content: Child
  placement?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  open?: boolean
  ariaLabel?: string
  className?: string
}>

export const Tooltip = ({
  content,
  placement = 'top',
  align,
  color,
  open = false,
  ariaLabel,
  className = '',
  children,
}: TooltipProps) => (
  <span
    className={`tooltip tooltip-${placement} ${align ? `tooltip-${align}` : ''} ${color ? `tooltip-${color}` : ''} ${open ? 'tooltip-open' : ''} ${className}`.trim()}
    data-tip={typeof content === 'string' ? content : undefined}
    aria-label={ariaLabel}
  >
    {children}
    {typeof content !== 'string' && <span className="tooltip-content">{content}</span>}
  </span>
)