import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type DrawerProps = PropsWithChildren<{
  id: string
  sidebar: Child
  side?: 'left' | 'right'
  open?: boolean
  toggleLabel?: string
  className?: string
}>

export const Drawer = ({
  id,
  sidebar,
  side = 'left',
  open = false,
  toggleLabel = 'Open menu',
  className = '',
  children,
}: DrawerProps) => (
  <div className={`drawer ${side === 'right' ? 'drawer-end' : ''} ${className}`.trim()}>
    <input id={id} type="checkbox" className="drawer-toggle" checked={open} aria-label="Toggle sidebar" />
    <div className="drawer-content">
      {children}
      <label htmlFor={id} className="btn btn-primary drawer-button lg:hidden">{toggleLabel}</label>
    </div>
    <div className="drawer-side">
      <label htmlFor={id} aria-label="Close sidebar" className="drawer-overlay"></label>
      {sidebar}
    </div>
  </div>
)