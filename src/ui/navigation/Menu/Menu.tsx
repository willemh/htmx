import type { PropsWithChildren } from 'hono/jsx'

type MenuProps = PropsWithChildren<{
  orientation?: 'vertical' | 'horizontal'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel?: string
  className?: string
}>

type MenuItemProps = PropsWithChildren<{
  href?: string
  active?: boolean
  disabled?: boolean
  className?: string
}>

type MenuTitleProps = PropsWithChildren<{
  className?: string
}>

export const Menu = ({
  orientation = 'vertical',
  size = 'md',
  ariaLabel,
  className = '',
  children,
}: MenuProps) => (
  <ul className={`menu menu-${orientation} menu-${size} ${className}`.trim()} aria-label={ariaLabel}>
    {children}
  </ul>
)

export const MenuItem = ({ href, active = false, disabled = false, className = '', children }: MenuItemProps) => (
  <li>
    {href !== undefined ? (
      <a
        href={disabled ? undefined : href}
        className={`${active ? 'menu-active' : ''} ${className}`.trim()}
        aria-current={active ? 'page' : undefined}
        aria-disabled={disabled ? 'true' : undefined}
        role={disabled ? 'link' : undefined}
      >
        {children}
      </a>
    ) : (
      <button type="button" className={`${active ? 'menu-active' : ''} ${className}`.trim()} disabled={disabled}>
        {children}
      </button>
    )}
  </li>
)

export const MenuTitle = ({ className = '', children }: MenuTitleProps) => (
  <li className={`menu-title ${className}`.trim()}>{children}</li>
)