import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type MegamenuProps = PropsWithChildren<{
  id: string
  trigger?: Child
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  width?: 'wide' | 'full'
  responsive?: boolean
  showIndicator?: boolean
  triggerClassName?: string
  className?: string
}>

export const Megamenu = ({
  id,
  trigger,
  size = 'md',
  width,
  responsive = true,
  showIndicator = true,
  triggerClassName = 'btn sm:hidden',
  className = '',
  children,
}: MegamenuProps) => (
  <>
    {trigger != null && (
      <button type="button" className={triggerClassName} popoverTarget={id} aria-controls={id}>
        {trigger}
      </button>
    )}
    <div
      id={id}
      className={`megamenu megamenu-${size} ${width ? `megamenu-${width}` : ''} ${responsive ? 'max-sm:megamenu-vertical' : ''} ${className}`.trim()}
      popover="auto"
    >
      {showIndicator && <span className="megamenu-active" aria-hidden="true"></span>}
      {children}
    </div>
  </>
)