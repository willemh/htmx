import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type CollapseProps = PropsWithChildren<{
  title: Child
  name?: string
  icon?: 'arrow' | 'plus'
  open?: boolean
  className?: string
  titleClassName?: string
  contentClassName?: string
}>

export const Collapse = ({
  title,
  name,
  icon,
  open = false,
  className = '',
  titleClassName = '',
  contentClassName = '',
  children,
}: CollapseProps) => (
  <details
    name={name}
    open={open}
    className={`collapse ${icon ? `collapse-${icon}` : ''} ${className}`.trim()}
  >
    <summary className={`collapse-title ${titleClassName}`.trim()}>{title}</summary>
    <div className={`collapse-content ${contentClassName}`.trim()}>{children}</div>
  </details>
)