import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type TableProps = PropsWithChildren<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  zebra?: boolean
  pinRows?: boolean
  pinColumns?: boolean
  caption?: Child
  className?: string
  wrapperClassName?: string
}>

export const Table = ({
  size,
  zebra = false,
  pinRows = false,
  pinColumns = false,
  caption,
  className = '',
  wrapperClassName = '',
  children,
}: TableProps) => (
  <div className={`overflow-x-auto ${wrapperClassName}`.trim()}>
    <table className={[
      'table',
      size && `table-${size}`,
      zebra && 'table-zebra',
      pinRows && 'table-pin-rows',
      pinColumns && 'table-pin-cols',
      className,
    ].filter(Boolean).join(' ')}>
      {caption != null && <caption>{caption}</caption>}
      {children}
    </table>
  </div>
)