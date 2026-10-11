import type { PropsWithChildren } from 'hono/jsx'

type MockupWindowProps = PropsWithChildren<{
  className?: string
  contentClassName?: string
}>

export const MockupWindow = ({ className = '', contentClassName = '', children }: MockupWindowProps) => (
  <div className={`mockup-window border border-base-300 ${className}`.trim()}>
    <div className={`bg-base-200 ${contentClassName}`.trim()}>
      {children}
    </div>
  </div>
)