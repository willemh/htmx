import type { PropsWithChildren } from 'hono/jsx'

type BreadcrumbsProps = PropsWithChildren<{
  ariaLabel?: string
  className?: string
}>

type BreadcrumbItemProps = PropsWithChildren<{
  href?: string
  current?: boolean
  className?: string
}>

export const Breadcrumbs = ({
  ariaLabel = 'Breadcrumbs',
  className = '',
  children,
}: BreadcrumbsProps) => (
  <nav aria-label={ariaLabel} className={className || undefined}>
    <ul className="breadcrumbs">{children}</ul>
  </nav>
)

export const BreadcrumbItem = ({ href, current = false, className = '', children }: BreadcrumbItemProps) => (
  <li className={className || undefined}>
    {current || !href ? <span aria-current={current ? 'page' : undefined}>{children}</span> : <a href={href}>{children}</a>}
  </li>
)