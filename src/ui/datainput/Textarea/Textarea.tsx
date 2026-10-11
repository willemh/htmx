type TextareaProps = {
  name?: string
  value?: string
  placeholder?: string
  rows?: number
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  variant?: 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel?: string
  className?: string
}

export const Textarea = ({
  name,
  value,
  placeholder,
  rows,
  required = false,
  disabled = false,
  readOnly = false,
  color,
  variant,
  size = 'md',
  ariaLabel,
  className = '',
}: TextareaProps) => (
  <textarea
    name={name}
    placeholder={placeholder}
    rows={rows}
    required={required}
    disabled={disabled}
    readOnly={readOnly ? true : undefined}
    aria-label={ariaLabel}
    className={`textarea textarea-${size} ${color ? `textarea-${color}` : ''} ${variant ? `textarea-${variant}` : ''} ${className}`.trim()}
  >
    {value}
  </textarea>
)