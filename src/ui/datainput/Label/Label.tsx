import type { PropsWithChildren } from 'hono/jsx'

type LabelProps = PropsWithChildren<{
  htmlFor?: string
  className?: string
}>

type FloatingLabelProps = PropsWithChildren<{
  text: string
  className?: string
}>

export const Label = ({ htmlFor, className = '', children }: LabelProps) => (
  <label htmlFor={htmlFor} className={`label ${className}`.trim()}>{children}</label>
)

export const FloatingLabel = ({ text, className = '', children }: FloatingLabelProps) => (
  <label className={`floating-label ${className}`.trim()}>
    {children}
    <span>{text}</span>
  </label>
)