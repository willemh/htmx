import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type StepsProps = PropsWithChildren<{
  orientation?: 'horizontal' | 'vertical'
  ariaLabel?: string
  className?: string
}>

type StepProps = PropsWithChildren<{
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  icon?: Child
  dataContent?: string
  current?: boolean
  className?: string
}>

export const Steps = ({ orientation = 'horizontal', ariaLabel, className = '', children }: StepsProps) => (
  <ul className={`steps steps-${orientation} ${className}`.trim()} aria-label={ariaLabel}>
    {children}
  </ul>
)

export const Step = ({ color, icon, dataContent, current = false, className = '', children }: StepProps) => (
  <li
    className={`step ${color ? `step-${color}` : ''} ${className}`.trim()}
    data-content={dataContent}
    aria-current={current ? 'step' : undefined}
  >
    {icon != null && <span className="step-icon">{icon}</span>}
    {children}
  </li>
)