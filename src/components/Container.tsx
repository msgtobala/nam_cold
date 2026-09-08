import type { ElementType, ReactNode } from 'react'

type ContainerWidth = 'page' | 'footer'

export type ContainerProps = {
  as?: ElementType
  width?: ContainerWidth
  children: ReactNode
  className?: string
}

const widthClasses: Record<ContainerWidth, string> = {
  /** 1440 max + 72px gutters → 1296 content (header / page sections) */
  page: 'max-w-page px-4 sm:px-8 lg:px-page-x',
  /** 1440 max + 80px gutters → 1280 content (footer) */
  footer: 'max-w-page px-4 sm:px-8 lg:px-footer-x',
}

export default function Container({
  as: Tag = 'div',
  width = 'page',
  children,
  className = '',
}: ContainerProps) {
  return (
    <Tag
      className={['mx-auto w-full', widthClasses[width], className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}
