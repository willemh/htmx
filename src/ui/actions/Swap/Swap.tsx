import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type SwapProps = {
  onContent: Child
  offContent: Child
  ariaLabel: string
  checked?: boolean
  effect?: 'rotate' | 'flip'
  className?: string
}

export const Swap = ({
  onContent,
  offContent,
  ariaLabel,
  checked = false,
  effect,
  className = '',
}: SwapProps) => (
  <label className={`swap ${effect ? `swap-${effect}` : ''} ${className}`.trim()}>
    <input type="checkbox" checked={checked} aria-label={ariaLabel} />
    <span className="swap-on">{onContent}</span>
    <span className="swap-off">{offContent}</span>
  </label>
)