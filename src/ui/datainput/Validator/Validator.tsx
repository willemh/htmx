type ValidatorProps = {
  id?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'date'
  name?: string
  value?: string | number
  placeholder?: string
  autoComplete?: string
  pattern?: string
  min?: string | number
  max?: string | number
  required?: boolean
  disabled?: boolean
  hint?: string
  ariaLabel?: string
  inputClassName?: string
}

export const Validator = ({
  id,
  type = 'text',
  name,
  value,
  placeholder,
  autoComplete,
  pattern,
  min,
  max,
  required = false,
  disabled = false,
  hint,
  ariaLabel,
  inputClassName = 'input',
}: ValidatorProps) => (
  <>
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      pattern={pattern}
      min={min}
      max={max}
      required={required}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={hint && id ? `${id}-hint` : undefined}
      className={`${inputClassName} validator`.trim()}
    />
    {hint && <p id={id ? `${id}-hint` : undefined} className="validator-hint">{hint}</p>}
  </>
)