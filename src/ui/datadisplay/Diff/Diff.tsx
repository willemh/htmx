import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type DiffProps = {
  before: Child
  after: Child
  className?: string
  beforeClassName?: string
  afterClassName?: string
}

export const Diff = ({
  before,
  after,
  className = '',
  beforeClassName = '',
  afterClassName = '',
}: DiffProps) => (
  <div className={`diff ${className}`.trim()}>
    <div className={`diff-item-1 ${beforeClassName}`.trim()}>{before}</div>
    <div className={`diff-item-2 ${afterClassName}`.trim()}>{after}</div>
    <div className="diff-resizer" aria-hidden="true"></div>
  </div>
)