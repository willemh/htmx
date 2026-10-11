type SkeletonProps = {
  text?: boolean
  className?: string
  ariaLabel?: string
}

export const Skeleton = ({ text = false, className = '', ariaLabel = 'Loading content' }: SkeletonProps) => (
  <div
    className={`skeleton ${text ? 'skeleton-text' : ''} ${className}`.trim()}
    role="status"
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : 'true'}
  />
)