import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type IndicatorProps = PropsWithChildren<{
  indicator: Child
  position?: 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'
  indicatorClassName?: string
  className?: string
}>

export const Indicator = ({
  indicator,
  position = 'top-end',
  indicatorClassName = '',
  className = '',
  children,
}: IndicatorProps) => {
  const [vertical, horizontal] = position.split('-')

  return (
    <div className={`indicator ${className}`.trim()}>
      <span className={`indicator-item indicator-${vertical} indicator-${horizontal} ${indicatorClassName}`.trim()}>
        {indicator}
      </span>
      {children}
    </div>
  )
}