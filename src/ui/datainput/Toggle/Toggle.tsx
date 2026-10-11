type ToggleProps = {
  name?: string
  value?: string
  checked?: boolean
  required?: boolean
  disabled?: boolean
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel: string
  className?: string
}

export const Toggle = ({
  name,
  value,
  checked = false,
  required = false,
  disabled = false,
  color,
  size = 'md',
  ariaLabel,
  className = '',
}: ToggleProps) => (
  <input
    type="checkbox"
    name={name}
    value={value}
    checked={checked}
    required={required}
    disabled={disabled}
    aria-label={ariaLabel}
    className={`toggle toggle-${size} ${color ? `toggle-${color}` : ''} ${className}`.trim()}
  />
)