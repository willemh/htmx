import type { PropsWithChildren } from 'hono/jsx'

type Child = PropsWithChildren['children']

type ModalProps = PropsWithChildren<{
  id: string
  trigger: Child
  placement?: 'top' | 'middle' | 'bottom' | 'start' | 'end'
  triggerClassName?: string
  className?: string
  boxClassName?: string
  closeText?: string
} & (
  | { title: string; ariaLabel?: string }
  | { title?: never; ariaLabel: string }
)>

export const Modal = ({
  id,
  trigger,
  title,
  ariaLabel,
  placement = 'middle',
  triggerClassName = 'btn',
  className = '',
  boxClassName = '',
  closeText = 'Close',
  children,
}: ModalProps) => (
  <>
    <button type="button" className={triggerClassName} popoverTarget={id}>
      {trigger}
    </button>
    <div
      id={id}
      className={`modal modal-${placement} ${className}`.trim()}
      popover="auto"
      role="dialog"
      aria-labelledby={title ? `${id}-title` : undefined}
      aria-label={title ? undefined : ariaLabel}
    >
      <div className={`modal-box ${boxClassName}`.trim()}>
        {title && <h2 id={`${id}-title`} className="text-lg font-bold">{title}</h2>}
        {children}
        <div className="modal-action">
          <button type="button" className="btn" popoverTarget={id} popoverTargetAction="hide">
            {closeText}
          </button>
        </div>
      </div>
      <div className="modal-backdrop">
        <button type="button" popoverTarget={id} popoverTargetAction="hide" aria-label="Close dialog">
          Close
        </button>
      </div>
    </div>
  </>
)