import type { PropsWithChildren } from 'hono/jsx'

type FilterProps = PropsWithChildren<{
  action?: string
  method?: 'get' | 'post'
  className?: string
}>

export const Filter = ({ action, method = 'get', className = '', children }: FilterProps) => (
  <form action={action} method={method} className={`filter ${className}`.trim()}>
    {children}
  </form>
)

export const FilterReset = ({ ariaLabel = 'Reset filters', className = '' }: { ariaLabel?: string; className?: string }) => (
  <input type="reset" value="×" aria-label={ariaLabel} className={`btn btn-square ${className}`.trim()} />
)