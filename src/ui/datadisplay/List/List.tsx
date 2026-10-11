import type { PropsWithChildren } from 'hono/jsx'

type ListProps = PropsWithChildren<{
  className?: string
}>

type ListItemProps = PropsWithChildren<{
  className?: string
}>

export const List = ({ className = '', children }: ListProps) => (
  <ul className={`list ${className}`.trim()}>{children}</ul>
)

export const ListItem = ({ className = '', children }: ListItemProps) => (
  <li className={`list-row ${className}`.trim()}>{children}</li>
)