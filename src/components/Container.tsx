import type { ElementType, ReactNode } from 'react'

type ContainerWidth = 'page' | 'footer'

export type ContainerProps = {
  as?: ElementType
  width?: ContainerWidth
  children: ReactNode
  className?: string
}

const widthClasses: Record<ContainerWidth, string> = {
  /** 1440 max; tighter side gutters */
  page: 'max-w-page px-3 sm:px-6 lg:px-page-x',
  /** 1440 max; tighter footer gutters */
  footer: 'max-w-page px-3 sm:px-6 lg:px-footer-x',
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
