import type { PropsWithChildren } from 'hono/jsx'

type CarouselProps = PropsWithChildren<{
  orientation?: 'horizontal' | 'vertical'
  alignment?: 'start' | 'center' | 'end'
  ariaLabel?: string
  className?: string
}>

type CarouselItemProps = PropsWithChildren<{
  className?: string
}>

export const Carousel = ({
  orientation = 'horizontal',
  alignment,
  ariaLabel,
  className = '',
  children,
}: CarouselProps) => (
  <div
    className={`carousel ${orientation === 'vertical' ? 'carousel-vertical' : ''} ${alignment ? `carousel-${alignment}` : ''} ${className}`.trim()}
    role="region"
    aria-label={ariaLabel}
  >
    {children}
  </div>
)

export const CarouselItem = ({ className = '', children }: CarouselItemProps) => (
  <div className={`carousel-item ${className}`.trim()}>{children}</div>
)