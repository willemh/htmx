import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type ChatProps = PropsWithChildren<{
  side?: 'start' | 'end'
  name?: string
  time?: string
  dateTime?: string
  avatar?: Child
  footer?: Child
  bubbleColor?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  className?: string
  bubbleClassName?: string
}>

export const Chat = ({
  side = 'start',
  name,
  time,
  dateTime,
  avatar,
  footer,
  bubbleColor,
  className = '',
  bubbleClassName = '',
  children,
}: ChatProps) => (
  <div className={`chat chat-${side} ${className}`.trim()}>
    {avatar != null && <div className="chat-image avatar"><div className="w-10 rounded-full">{avatar}</div></div>}
    {(name || time) && (
      <div className="chat-header">
        {name}
        {time && <time className="text-xs opacity-50" dateTime={dateTime}>{time}</time>}
      </div>
    )}
    <div className={`chat-bubble ${bubbleColor ? `chat-bubble-${bubbleColor}` : ''} ${bubbleClassName}`.trim()}>
      {children}
    </div>
    {footer != null && <div className="chat-footer opacity-50">{footer}</div>}
  </div>
)