import type { PropsWithChildren } from 'hono/jsx'

type AvatarProps = {
  src?: string
  alt?: string
  placeholder?: string
  sizeClassName?: string
  shapeClassName?: string
  status?: 'online' | 'offline'
  ring?: boolean
  className?: string
}

type AvatarGroupProps = PropsWithChildren<{
  className?: string
}>

export const Avatar = ({
  src,
  alt = '',
  placeholder,
  sizeClassName = 'h-12 w-12',
  shapeClassName = 'rounded-full',
  status,
  ring = false,
  className = '',
}: AvatarProps) => (
  <div className={`avatar ${status ? `avatar-${status}` : ''} ${placeholder && !src ? 'avatar-placeholder' : ''} ${className}`.trim()}>
    <div className={`${sizeClassName} ${shapeClassName} ${ring ? 'ring ring-primary ring-offset-base-100 ring-offset-2' : ''}`.trim()}>
      {src ? <img src={src} alt={alt} loading="lazy" /> : <span aria-hidden="true">{placeholder ?? '?'}</span>}
    </div>
  </div>
)

export const AvatarGroup = ({ className = '', children }: AvatarGroupProps) => (
  <div className={`avatar-group -space-x-6 ${className}`.trim()}>{children}</div>
)