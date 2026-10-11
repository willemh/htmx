type CountdownProps = {
  value: number
  ariaLabel?: string
  className?: string
}

export const Countdown = ({ value, ariaLabel, className = '' }: CountdownProps) => {
  const displayValue = Math.max(0, Math.min(999, Math.trunc(value)))

  return (
    <span className={`countdown ${className}`.trim()} aria-label={ariaLabel ?? String(displayValue)}>
      <span style={`--value:${displayValue};`} aria-hidden="true">{displayValue}</span>
    </span>
  )
}