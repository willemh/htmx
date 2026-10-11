type InputType = 'text' | 'password' | 'email' | 'number' | 'date' | 'datetime-local' | 'week' | 'month' | 'tel' | 'url' | 'search' | 'time' | 'hidden'

type InputProps = {
  type?: InputType
  name?: string
  value?: string | number
  placeholder?: string
  autoComplete?: string
  min?: string | number
  max?: string | number
  step?: string | number
  pattern?: string
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  variant?: 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel?: string
  className?: string
}

export const Input = ({
  type = 'text',
  name,
  value,
  placeholder,
  autoComplete,
  min,
  max,
  step,
  pattern,
  required = false,
  disabled = false,
  readOnly = false,
  color,
  variant,
  size = 'md',
  ariaLabel,
  className = '',
}: InputProps) => (
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    autoComplete={autoComplete}
    min={min}
    max={max}
    step={step}
    pattern={pattern}
    required={required}
    disabled={disabled}
    readOnly={readOnly ? true : undefined}
    aria-label={ariaLabel}
    className={`input input-${size} ${color ? `input-${color}` : ''} ${variant ? `input-${variant}` : ''} ${className}`.trim()}
  />
)