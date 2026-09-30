import type { SVGProps } from 'react'

export default function MenuIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
      {...props}
    >
      <path
        d="M2.25 4.5h13.5M2.25 9h13.5M2.25 13.5h13.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
