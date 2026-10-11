import type { PropsWithChildren } from 'hono/jsx'

type ButtonColor = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
type ButtonVariant = 'outline' | 'dash' | 'soft' | 'ghost' | 'link'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type ButtonProps = PropsWithChildren<{
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
  shape?: 'square' | 'circle'
  type?: 'button' | 'submit' | 'reset'
  href?: string
  className?: string
  disabled?: boolean
  loading?: boolean
  wide?: boolean
  block?: boolean
  active?: boolean
  ariaLabel?: string
}>

export const Button = ({
  color,
  variant,
  size,
  shape,
  type = 'button',
  href,
  className = '',
  disabled = false,
  loading = false,
  wide = false,
  block = false,
  active = false,
  ariaLabel,
  children,
}: ButtonProps) => {
  const unavailable = disabled || loading
  const buttonClassName = [
    'btn',
    color && `btn-${color}`,
    variant && `btn-${variant}`,
    size && `btn-${size}`,
    shape && `btn-${shape}`,
    wide && 'btn-wide',
    block && 'btn-block',
    active && 'btn-active',
    unavailable && 'btn-disabled',
    className,
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a
        className={buttonClassName}
        href={unavailable ? undefined : href}
        aria-label={ariaLabel}
        aria-disabled={unavailable ? 'true' : undefined}
        tabIndex={unavailable ? -1 : undefined}
      >
        {loading && <span className="loading loading-spinner loading-xs" aria-hidden="true"></span>}
        {children}
      </a>
    )
  }

  return (
    <button
      className={buttonClassName}
      type={type}
      disabled={unavailable}
      aria-label={ariaLabel}
      aria-busy={loading ? 'true' : undefined}
    >
      {loading && <span className="loading loading-spinner loading-xs" aria-hidden="true"></span>}
      {children}
    </button>
  )
}