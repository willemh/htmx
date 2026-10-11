import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type FabBaseProps = PropsWithChildren<{
  trigger: Child
  triggerClassName?: string
  className?: string
  flower?: boolean
}>

type FabProps = FabBaseProps & (
  | { mainAction?: Child; closeAction?: never }
  | { mainAction?: never; closeAction?: Child }
)

export const Fab = ({
  trigger,
  triggerClassName = 'btn btn-lg btn-circle btn-primary',
  className = '',
  flower = false,
  mainAction,
  closeAction,
  children,
}: FabProps) => (
  <div className={`fab ${flower ? 'fab-flower' : ''} ${className}`.trim()}>
    <div tabIndex={0} role="button" className={triggerClassName}>
      {trigger}
    </div>
    {mainAction != null && <div className="fab-main-action">{mainAction}</div>}
    {closeAction != null && <div className="fab-close">{closeAction}</div>}
    {children}
  </div>
)