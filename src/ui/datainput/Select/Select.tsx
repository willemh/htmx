import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type SelectOption = {
  value: string
  label: Child
  disabled?: boolean
  selected?: boolean
}

type SelectProps = PropsWithChildren<{
  name?: string
  value?: string
  options?: SelectOption[]
  placeholder?: string
  required?: boolean
  disabled?: boolean
  multiple?: boolean
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  variant?: 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel?: string
  className?: string
}>

export const Select = ({
  name,
  value,
  options,
  placeholder,
  required = false,
  disabled = false,
  multiple = false,
  color,
  variant,
  size = 'md',
  ariaLabel,
  className = '',
  children,
}: SelectProps) => (
  <select
    name={name}
    required={required}
    disabled={disabled}
    multiple={multiple}
    aria-label={ariaLabel}
    className={`select select-${size} ${color ? `select-${color}` : ''} ${variant ? `select-${variant}` : ''} ${className}`.trim()}
  >
    {placeholder && <option value="" disabled>{placeholder}</option>}
    {options?.map((option) => (
      <option
        value={option.value}
        disabled={option.disabled}
        selected={option.selected ?? option.value === value}
      >
        {option.label}
      </option>
    ))}
    {children}
  </select>
)