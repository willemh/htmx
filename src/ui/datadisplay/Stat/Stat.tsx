import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type StatsProps = PropsWithChildren<{
  orientation?: 'horizontal' | 'vertical'
  className?: string
}>

type StatProps = PropsWithChildren<{
  title?: Child
  value: Child
  description?: Child
  figure?: Child
  actions?: Child
  className?: string
  valueClassName?: string
}>

export const Stats = ({ orientation = 'horizontal', className = '', children }: StatsProps) => (
  <div className={`stats stats-${orientation} ${className}`.trim()}>{children}</div>
)

export const Stat = ({
  title,
  value,
  description,
  figure,
  actions,
  className = '',
  valueClassName = '',
  children,
}: StatProps) => (
  <div className={`stat ${className}`.trim()}>
    {figure != null && <div className="stat-figure">{figure}</div>}
    {title != null && <div className="stat-title">{title}</div>}
    <div className={`stat-value ${valueClassName}`.trim()}>{value}</div>
    {description != null && <div className="stat-desc">{description}</div>}
    {children}
    {actions != null && <div className="stat-actions">{actions}</div>}
  </div>
)