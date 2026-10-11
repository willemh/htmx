import type { PropsWithChildren } from 'hono/jsx'

type FooterProps = PropsWithChildren<{
  orientation?: 'horizontal' | 'vertical'
  centered?: boolean
  className?: string
}>

export const Footer = ({
  orientation = 'vertical',
  centered = false,
  className = '',
  children,
}: FooterProps) => (
  <footer
    className={`footer footer-${orientation} ${centered ? 'footer-center' : ''} ${className}`.trim()}
  >
    {children}
  </footer>
)