import type { PropsWithChildren } from 'hono/jsx'

type ToastProps = PropsWithChildren<{
  horizontal?: 'start' | 'center' | 'end'
  vertical?: 'top' | 'middle' | 'bottom'
  ariaLabel?: string
  live?: 'polite' | 'assertive' | 'off'
  className?: string
}>

export const Toast = ({
  horizontal = 'end',
  vertical = 'bottom',
  ariaLabel = 'Notifications',
  live = 'polite',
  className = '',
  children,
}: ToastProps) => (
  <div
    className={`toast toast-${vertical} toast-${horizontal} ${className}`.trim()}
    role="region"
    aria-label={ariaLabel}
    aria-live={live}
    aria-relevant="additions text"
  >
    {children}
  </div>
)