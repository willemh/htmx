import type { PropsWithChildren } from 'hono/jsx'

type NavbarProps = PropsWithChildren<{
  ariaLabel?: string
  className?: string
}>

type NavbarSectionProps = PropsWithChildren<{
  className?: string
}>

export const Navbar = ({ ariaLabel, className = '', children }: NavbarProps) => (
  <nav className={`navbar ${className}`.trim()} aria-label={ariaLabel}>
    {children}
  </nav>
)

export const NavbarStart = ({ className = '', children }: NavbarSectionProps) => (
  <div className={`navbar-start ${className}`.trim()}>{children}</div>
)

export const NavbarCenter = ({ className = '', children }: NavbarSectionProps) => (
  <div className={`navbar-center ${className}`.trim()}>{children}</div>
)

export const NavbarEnd = ({ className = '', children }: NavbarSectionProps) => (
  <div className={`navbar-end ${className}`.trim()}>{children}</div>
)