import type { SVGProps } from 'react'

export default function InstagramIcon({
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
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z" />
      <path d="M17.1 2H6.9A4.9 4.9 0 0 0 2 6.9v10.2A4.9 4.9 0 0 0 6.9 22h10.2a4.9 4.9 0 0 0 4.9-4.9V6.9A4.9 4.9 0 0 0 17.1 2zm3.2 15.1a3.2 3.2 0 0 1-3.2 3.2H6.9a3.2 3.2 0 0 1-3.2-3.2V6.9a3.2 3.2 0 0 1 3.2-3.2h10.2a3.2 3.2 0 0 1 3.2 3.2v10.2z" />
      <circle cx="17.4" cy="6.6" r="1.15" />
    </svg>
  )
}
