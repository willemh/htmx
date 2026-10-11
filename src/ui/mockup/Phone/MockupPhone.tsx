import type { PropsWithChildren } from 'hono/jsx'

type MockupPhoneProps = PropsWithChildren<{
  camera?: boolean
  className?: string
  displayClassName?: string
}>

export const MockupPhone = ({
  camera = true,
  className = '',
  displayClassName = '',
  children,
}: MockupPhoneProps) => (
  <div className={`mockup-phone ${className}`.trim()}>
    {camera && <div className="mockup-phone-camera"></div>}
    <div className={`mockup-phone-display ${displayClassName}`.trim()}>
      {children}
    </div>
  </div>
)