import type { PropsWithChildren } from 'hono/jsx'

type ThemeControllerProps = PropsWithChildren<{
  theme: string
  type?: 'checkbox' | 'radio'
  name?: string
  checked?: boolean
  inputClassName?: string
  className?: string
  ariaLabel?: string
}>

export const ThemeController = ({
  theme,
  type = 'checkbox',
  name,
  checked = false,
  inputClassName = '',
  className = 'label cursor-pointer gap-2',
  ariaLabel,
  children,
}: ThemeControllerProps) => (
  <label className={className}>
    <input
      type={type}
      name={name ?? (type === 'radio' ? 'theme' : undefined)}
      value={theme}
      checked={checked}
      className={`theme-controller ${type === 'radio' ? 'radio' : 'toggle'} ${inputClassName}`.trim()}
      aria-label={ariaLabel ?? theme}
    />
    <span>{children ?? theme}</span>
  </label>
)