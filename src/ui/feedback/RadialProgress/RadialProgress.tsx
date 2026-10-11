import type { PropsWithChildren } from 'hono/jsx'

type RadialProgressProps = PropsWithChildren<{
  value: number
  size?: string
  thickness?: string
  ariaLabel?: string
  className?: string
}>

export const RadialProgress = ({
  value,
  size = '5rem',
  thickness = '0.5rem',
  ariaLabel,
  className = '',
  children,
}: RadialProgressProps) => {
  const safeValue = Math.max(0, Math.min(100, value))

  return (
    <div
      className={`radial-progress ${className}`.trim()}
      style={`--value:${safeValue};--size:${size};--thickness:${thickness};`}
      role="progressbar"
      aria-valuenow={safeValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
    >
      {children ?? `${safeValue}%`}
    </div>
  )
}