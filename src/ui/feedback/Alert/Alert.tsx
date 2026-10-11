import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type AlertProps = PropsWithChildren<{
  color?: 'info' | 'success' | 'warning' | 'error'
  variant?: 'outline' | 'dash' | 'soft'
  orientation?: 'horizontal' | 'vertical'
  title?: Child
  icon?: Child
  actions?: Child
  role?: 'alert' | 'status'
  className?: string
}>

export const Alert = ({
  color,
  variant,
  orientation,
  title,
  icon,
  actions,
  role = 'alert',
  className = '',
  children,
}: AlertProps) => (
  <div
    role={role}
    className={`alert ${color ? `alert-${color}` : ''} ${variant ? `alert-${variant}` : ''} ${orientation ? `alert-${orientation}` : ''} ${className}`.trim()}
  >
    {icon != null && <span className="shrink-0">{icon}</span>}
    <div className="flex-1">
      {title != null && <h3 className="font-semibold">{title}</h3>}
      {children}
    </div>
    {actions != null && <div className="flex shrink-0 gap-2">{actions}</div>}
  </div>
)