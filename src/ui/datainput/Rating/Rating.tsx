type RatingProps = {
  name: string
  value?: number
  max?: number
  shape?: 'star' | 'star-2' | 'heart'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  half?: boolean
  clearable?: boolean
  readOnly?: boolean
  className?: string
  itemClassName?: string
}

export const Rating = ({
  name,
  value = 0,
  max = 5,
  shape = 'star-2',
  size = 'md',
  half = false,
  clearable = false,
  readOnly = false,
  className = '',
  itemClassName = '',
}: RatingProps) => {
  const starCount = Math.max(1, Math.min(10, Math.trunc(max)))
  const subdivisions = half ? 2 : 1
  const items = Array.from({ length: starCount * subdivisions }, (_, index) => (index + 1) / subdivisions)

  return (
    <div className={`rating rating-${size} ${half ? 'rating-half' : ''} ${className}`.trim()} role="radiogroup" aria-label="Rating">
      {clearable && !readOnly && (
        <input type="radio" name={name} value="0" className="rating-hidden" aria-label="Clear rating" checked={value === 0} />
      )}
      {items.map((ratingValue, index) => {
        const halfShape = half ? (index % 2 === 0 ? 'mask-half-1' : 'mask-half-2') : ''
        const label = `${ratingValue} ${ratingValue === 1 ? 'star' : 'stars'}`

        return readOnly ? (
          <span
            key={ratingValue}
            className={`mask mask-${shape} ${halfShape} ${ratingValue <= value ? 'bg-current' : 'bg-base-300'} ${itemClassName}`.trim()}
            aria-label={label}
            aria-current={ratingValue === value ? 'true' : undefined}
          />
        ) : (
          <input
            key={ratingValue}
            type="radio"
            name={name}
            value={ratingValue}
            checked={ratingValue === value}
            className={`mask mask-${shape} ${halfShape} ${itemClassName}`.trim()}
            aria-label={label}
          />
        )
      })}
    </div>
  )
}