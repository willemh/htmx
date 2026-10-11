type CheckboxProps = {
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

export const Checkbox = ({
  name,
  value,
  checked = false,
  required = false,
  disabled = false,
  color,
  size = 'md',
  ariaLabel,
  className = '',
}: CheckboxProps) => (
  <input
    type="checkbox"
    name={name}
    value={value}
    checked={checked}
    required={required}
    disabled={disabled}
    aria-label={ariaLabel}
    className={`checkbox checkbox-${size} ${color ? `checkbox-${color}` : ''} ${className}`.trim()}
  />
)