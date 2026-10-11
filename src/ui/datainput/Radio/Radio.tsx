type RadioProps = {
  name: string
  value?: string
  checked?: boolean
  required?: boolean
  disabled?: boolean
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel: string
  className?: string
}

export const Radio = ({
  name,
  value,
  checked = false,
  required = false,
  disabled = false,
  color,
  size = 'md',
  ariaLabel,
  className = '',
}: RadioProps) => (
  <input
    type="radio"
    name={name}
    value={value}
    checked={checked}
    required={required}
    disabled={disabled}
    aria-label={ariaLabel}
    className={`radio radio-${size} ${color ? `radio-${color}` : ''} ${className}`.trim()}
  />
)