import type { PropsWithChildren } from 'hono/jsx'

type TabsProps = PropsWithChildren<{
  variant?: 'box' | 'border' | 'lift'
  placement?: 'top' | 'bottom'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel?: string
  className?: string
}>

type TabProps = PropsWithChildren<{
  href: string
  active?: boolean
  disabled?: boolean
  className?: string
}>

type TabPanelProps = PropsWithChildren<{
  id: string
  labelledBy: string
  className?: string
}>

export const Tabs = ({
  variant,
  placement = 'top',
  size = 'md',
  ariaLabel,
  className = '',
  children,
}: TabsProps) => (
  <div
    role="tablist"
    aria-label={ariaLabel}
    className={`tabs ${variant ? `tabs-${variant}` : ''} tabs-${placement} tabs-${size} ${className}`.trim()}
  >
    {children}
  </div>
)

export const Tab = ({ href, active = false, disabled = false, className = '', children }: TabProps) => (
  <a
    role="tab"
    href={disabled ? undefined : href}
    className={`tab ${active ? 'tab-active' : ''} ${disabled ? 'tab-disabled' : ''} ${className}`.trim()}
    aria-selected={active}
    aria-disabled={disabled ? 'true' : undefined}
    tabIndex={disabled ? -1 : undefined}
  >
    {children}
  </a>
)

export const TabPanel = ({ id, labelledBy, className = '', children }: TabPanelProps) => (
  <div id={id} role="tabpanel" aria-labelledby={labelledBy} className={`tab-content ${className}`.trim()}>
    {children}
  </div>
)