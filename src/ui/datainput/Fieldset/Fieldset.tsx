import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type FieldsetProps = PropsWithChildren<{
  legend?: Child
  description?: Child
  disabled?: boolean
  className?: string
}>

type FieldsetLegendProps = PropsWithChildren<{
  className?: string
}>

type FieldLabelProps = PropsWithChildren<{
  htmlFor?: string
  className?: string
}>

export const Fieldset = ({ legend, description, disabled = false, className = '', children }: FieldsetProps) => (
  <fieldset className={`fieldset ${className}`.trim()} disabled={disabled}>
    {legend != null && <legend className="fieldset-legend">{legend}</legend>}
    {children}
    {description != null && <p className="label">{description}</p>}
  </fieldset>
)

export const FieldsetLegend = ({ className = '', children }: FieldsetLegendProps) => (
  <legend className={`fieldset-legend ${className}`.trim()}>{children}</legend>
)

export const FieldLabel = ({ htmlFor, className = '', children }: FieldLabelProps) => (
  <label htmlFor={htmlFor} className={`label ${className}`.trim()}>{children}</label>
)