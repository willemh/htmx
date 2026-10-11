type ProgressProps = {
  value?: number
  max?: number
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  ariaLabel?: string
  className?: string
}

export const Progress = ({ value, max = 100, color, ariaLabel, className = '' }: ProgressProps) => {
  const safeMax = Number.isFinite(max) && max > 0 ? max : 100
  const safeValue = value === undefined ? undefined : Math.max(0, Math.min(safeMax, value))

  return (
    <progress
      className={`progress ${color ? `progress-${color}` : ''} ${className}`.trim()}
      value={safeValue}
      max={safeMax}
      aria-label={ariaLabel}
    />
  )
}