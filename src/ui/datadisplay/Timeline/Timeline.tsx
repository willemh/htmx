import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type TimelineProps = PropsWithChildren<{
  orientation?: 'vertical' | 'horizontal'
  snapIcon?: boolean
  className?: string
}>

type TimelineItemProps = PropsWithChildren<{
  start?: Child
  icon?: Child
  connectBefore?: boolean
  connectAfter?: boolean
  startClassName?: string
  endClassName?: string
}>

export const Timeline = ({
  orientation = 'vertical',
  snapIcon = false,
  className = '',
  children,
}: TimelineProps) => (
  <ul className={`timeline timeline-${orientation} ${snapIcon ? 'timeline-snap-icon' : ''} ${className}`.trim()}>
    {children}
  </ul>
)

export const TimelineItem = ({
  start,
  icon,
  connectBefore = true,
  connectAfter = true,
  startClassName = '',
  endClassName = '',
  children,
}: TimelineItemProps) => (
  <li>
    {connectBefore && <hr />}
    {start != null && <div className={`timeline-start ${startClassName}`.trim()}>{start}</div>}
    <div className="timeline-middle">{icon}</div>
    <div className={`timeline-end ${endClassName}`.trim()}>{children}</div>
    {connectAfter && <hr />}
  </li>
)