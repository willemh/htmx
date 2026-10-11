import type { PropsWithChildren } from 'hono/jsx'

type MaskShape =
  | 'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon'
  | 'diamond' | 'square' | 'circle' | 'parallelogram' | 'parallelogram-2'
  | 'parallelogram-3' | 'parallelogram-4' | 'star' | 'star-2' | 'triangle'
  | 'triangle-2' | 'triangle-3' | 'triangle-4'

type MaskProps = PropsWithChildren<{
  shape: MaskShape
  className?: string
}>

export const Mask = ({ shape, className = '', children }: MaskProps) => (
  <div className={`mask mask-${shape} ${className}`.trim()}>{children}</div>
)