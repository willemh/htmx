import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type AccordionProps = PropsWithChildren<{
  className?: string
}>

type AccordionItemProps = PropsWithChildren<{
  title: Child
  name?: string
  open?: boolean
  icon?: 'arrow' | 'plus'
  className?: string
}>

export const Accordion = ({ className = '', children }: AccordionProps) => (
  <div className={`join join-vertical ${className}`.trim()}>{children}</div>
)

export const AccordionItem = ({
  title,
  name,
  open = false,
  icon,
  className = '',
  children,
}: AccordionItemProps) => (
  <details
    name={name}
    open={open}
    className={`collapse join-item border border-base-300 bg-base-100 ${icon ? `collapse-${icon}` : ''} ${className}`.trim()}
  >
    <summary className="collapse-title font-semibold">{title}</summary>
    <div className="collapse-content text-sm">{children}</div>
  </details>
)