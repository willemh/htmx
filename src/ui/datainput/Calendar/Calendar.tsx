import type { PropsWithChildren } from 'hono/jsx'

type CalendarProps = PropsWithChildren<{
  library?: 'cally' | 'react-day-picker' | 'vanilla-calendar-pro'
  className?: string
}>

const calendarClasses = {
  cally: 'cally',
  'react-day-picker': 'react-day-picker',
  'vanilla-calendar-pro': 'vc',
} as const

export const Calendar = ({ library = 'cally', className = '', children }: CalendarProps) => (
  <div className={`${calendarClasses[library]} ${className}`.trim()}>
    {children}
  </div>
)