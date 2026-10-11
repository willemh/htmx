type StatusProps = {
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel?: string
  className?: string
}

export const Status = ({ color, size = 'md', ariaLabel, className = '' }: StatusProps) => (
  <span
    className={`status status-${size} ${color ? `status-${color}` : ''} ${className}`.trim()}
    role={ariaLabel ? 'img' : undefined}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : 'true'}
  />
)