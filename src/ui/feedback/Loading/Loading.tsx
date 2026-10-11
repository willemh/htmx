type LoadingProps = {
  animation?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  ariaLabel?: string
  className?: string
}

export const Loading = ({
  animation = 'spinner',
  size = 'md',
  color,
  ariaLabel = 'Loading',
  className = '',
}: LoadingProps) => (
  <span
    className={`loading loading-${animation} loading-${size} ${color ? `text-${color}` : ''} ${className}`.trim()}
    role="status"
    aria-label={ariaLabel}
  />
)