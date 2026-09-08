import type { ButtonHTMLAttributes, ReactNode } from 'react'
import ArrowRightIcon from '@icons/ArrowRightIcon'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonSize = 'md' | 'sm'

export type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  showArrow?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white shadow-button',
  secondary: 'bg-secondary text-white',
  tertiary: 'bg-white text-secondary',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'gap-2 px-7 py-3.5 text-button font-semibold rounded-button',
  sm: 'gap-1 px-4 py-[7px] text-nav font-normal rounded-pill',
}

const variantSizeOverrides: Partial<
  Record<`${ButtonVariant}-${ButtonSize}`, string>
> = {
  'secondary-md': 'gap-1 py-4 text-body-sm rounded-full shadow-none',
  'tertiary-md': 'gap-1 py-4 text-body-sm font-medium rounded-full shadow-none',
  'primary-sm': 'shadow-none',
}

const arrowClasses: Record<ButtonVariant, string> = {
  primary: 'text-white',
  secondary: 'text-white',
  tertiary: 'text-primary',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  showArrow,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const withArrow = showArrow ?? size === 'md'

  return (
    <button
      type={type}
      className={[
        'inline-flex cursor-pointer items-center justify-center overflow-clip whitespace-nowrap transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        variantSizeOverrides[`${variant}-${size}`] ?? '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <span>{children}</span>
      {withArrow ? (
        <ArrowRightIcon className={`size-4 shrink-0 ${arrowClasses[variant]}`} />
      ) : null}
    </button>
  )
}
