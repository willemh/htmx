import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type CardProps = PropsWithChildren<{
  title?: Child
  figure?: Child
  actions?: Child
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'border' | 'dash'
  side?: boolean
  imageFull?: boolean
  className?: string
  bodyClassName?: string
}>

export const Card = ({
  title,
  figure,
  actions,
  size = 'md',
  variant,
  side = false,
  imageFull = false,
  className = '',
  bodyClassName = '',
  children,
}: CardProps) => (
  <div className={`card card-${size} ${variant ? `card-${variant}` : ''} ${side ? 'card-side' : ''} ${imageFull ? 'image-full' : ''} ${className}`.trim()}>
    {figure != null && <figure>{figure}</figure>}
    <div className={`card-body ${bodyClassName}`.trim()}>
      {title != null && <h2 className="card-title">{title}</h2>}
      {children}
      {actions != null && <div className="card-actions justify-end">{actions}</div>}
    </div>
  </div>
)