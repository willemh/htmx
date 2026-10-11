type FileInputProps = {
  name?: string
  accept?: string
  multiple?: boolean
  required?: boolean
  disabled?: boolean
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  variant?: 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel: string
  className?: string
}

export const FileInput = ({
  name,
  accept,
  multiple = false,
  required = false,
  disabled = false,
  color,
  variant,
  size = 'md',
  ariaLabel,
  className = '',
}: FileInputProps) => (
  <input
    type="file"
    name={name}
    accept={accept}
    multiple={multiple}
    required={required}
    disabled={disabled}
    aria-label={ariaLabel}
    className={`file-input file-input-${size} ${color ? `file-input-${color}` : ''} ${variant ? `file-input-${variant}` : ''} ${className}`.trim()}
  />
)