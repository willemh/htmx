import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type DockProps = PropsWithChildren<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel?: string
  className?: string
}>

type DockItemProps = {
  href: string
  icon: Child
  label: Child
  active?: boolean
  className?: string
}

export const Dock = ({ size = 'md', ariaLabel = 'Primary navigation', className = '', children }: DockProps) => (
  <nav className={`dock dock-${size} ${className}`.trim()} aria-label={ariaLabel}>
    {children}
  </nav>
)

export const DockItem = ({ href, icon, label, active = false, className = '' }: DockItemProps) => (
  <a href={href} className={`${active ? 'dock-active' : ''} ${className}`.trim()} aria-current={active ? 'page' : undefined}>
    {icon}
    <span className="dock-label">{label}</span>
  </a>
)