type OTPProps = {
  name?: string
  length?: number
  value?: string
  required?: boolean
  disabled?: boolean
  joined?: boolean
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'info' | 'warning' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel: string
  className?: string
}

export const OTP = ({
  name,
  length = 6,
  value,
  required = true,
  disabled = false,
  joined = false,
  color,
  size = 'md',
  ariaLabel,
  className = '',
}: OTPProps) => {
  const digitCount = Math.max(1, Math.min(12, Math.trunc(length)))

  return (
    <label className={`otp otp-${size} ${color ? `otp-${color}` : ''} ${joined ? 'otp-joined' : ''} ${className}`.trim()}>
      {Array.from({ length: digitCount }, (_, index) => <span key={index}></span>)}
      <input
        type="text"
        name={name}
        value={value}
        autoComplete="one-time-code"
        inputMode="numeric"
        maxLength={digitCount}
        pattern={`[0-9]{${digitCount}}`}
        required={required}
        disabled={disabled}
        aria-label={ariaLabel}
      />
    </label>
  )
}