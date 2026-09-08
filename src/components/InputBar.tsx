import type { InputHTMLAttributes, ReactNode } from 'react'

export type InputBarProps = {
  icon?: ReactNode
  placeholder?: string
  label?: string
  className?: string
  inputClassName?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>

export default function InputBar({
  icon,
  placeholder = 'Enter your PIN Code or City...',
  label,
  className = '',
  inputClassName = '',
  id,
  ...props
}: InputBarProps) {
  const inputId = id ?? 'input-bar'

  return (
    <label
      htmlFor={inputId}
      className={[
        'flex min-w-0 flex-1 cursor-text items-center gap-3 rounded-[40px] bg-white p-4',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label ? <span className="sr-only">{label}</span> : null}
      {icon ? (
        <span className="inline-flex size-[18px] shrink-0 items-center justify-center text-body [&_svg]:size-[18px]">
          {icon}
        </span>
      ) : null}
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        className={[
          'min-w-0 flex-1 border-0 bg-transparent text-body-sm font-normal text-body outline-none placeholder:text-body',
          inputClassName,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
    </label>
  )
}
