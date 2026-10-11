type RangeProps = {
  name?: string
  value?: number
  min?: number
  max?: number
  step?: number
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  orientation?: 'horizontal' | 'vertical'
  ariaLabel: string
  className?: string
}

export const Range = ({
  name,
  value,
  min = 0,
  max = 100,
  step = 1,
  color,
  size = 'md',
  orientation = 'horizontal',
  ariaLabel,
  className = '',
}: RangeProps) => (
  <input
    type="range"
    name={name}
    value={value}
    min={min}
    max={max}
    step={step}
    aria-label={ariaLabel}
    className={`range range-${size} ${color ? `range-${color}` : ''} ${orientation === 'vertical' ? 'range-vertical' : ''} ${className}`.trim()}
  />
)