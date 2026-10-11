import type { PropsWithChildren } from 'hono/jsx'

type PaginationProps = PropsWithChildren<{
  orientation?: 'horizontal' | 'vertical'
  ariaLabel?: string
  className?: string
}>

type PaginationItemProps = PropsWithChildren<{
  href?: string
  active?: boolean
  disabled?: boolean
  ariaLabel?: string
  className?: string
}>

export const Pagination = ({
  orientation = 'horizontal',
  ariaLabel = 'Pagination',
  className = '',
  children,
}: PaginationProps) => (
  <nav aria-label={ariaLabel}>
    <div className={`join join-${orientation} ${className}`.trim()}>{children}</div>
  </nav>
)

export const PaginationItem = ({
  href,
  active = false,
  disabled = false,
  ariaLabel,
  className = '',
  children,
}: PaginationItemProps) => {
  const itemClassName = `join-item btn ${active ? 'btn-active' : ''} ${disabled ? 'btn-disabled' : ''} ${className}`.trim()

  return href !== undefined ? (
    <a
      href={disabled ? undefined : href}
      className={itemClassName}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled ? 'true' : undefined}
      role={disabled ? 'link' : undefined}
    >
      {children}
    </a>
  ) : (
    <button
      type="button"
      className={itemClassName}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  )
}