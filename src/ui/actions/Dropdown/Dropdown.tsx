import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type DropdownProps = PropsWithChildren<{
  trigger: Child
  placement?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  triggerClassName?: string
  contentClassName?: string
  className?: string
  hover?: boolean
  open?: boolean
}>

export const Dropdown = ({
  trigger,
  placement = 'bottom',
  align = 'start',
  triggerClassName = 'btn',
  contentClassName = '',
  className = '',
  hover = false,
  open = false,
  children,
}: DropdownProps) => (
  <details
    className={`dropdown dropdown-${placement} dropdown-${align} ${hover ? 'dropdown-hover' : ''} ${className}`.trim()}
    open={open}
  >
    <summary className={triggerClassName}>{trigger}</summary>
    <ul className={`menu dropdown-content z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm ${contentClassName}`.trim()}>
      {children}
    </ul>
  </details>
)