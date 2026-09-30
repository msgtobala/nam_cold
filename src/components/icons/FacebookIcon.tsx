import type { SVGProps } from 'react'

export default function FacebookIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
      {...props}
    >
      <path d="M15.1 8.5h2.4V5.2h-2.4c-2.3 0-3.8 1.5-3.8 4v1.8H8.7v3.3h2.6V22h3.4v-7.7h2.5l.5-3.3h-3v-1.3c0-.7.4-1.2 1.4-1.2z" />
    </svg>
  )
}
