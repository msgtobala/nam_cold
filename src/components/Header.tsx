import { Link, NavLink } from 'react-router-dom'
import Button from '@components/Button'
import Container from '@components/Container'
import SearchIcon from '@icons/SearchIcon'
import { navigationConfig } from '@configs/navigation'
import { namColdLogo } from '@resources/brand'
import { strings } from '@strings/strings'

export type HeaderProps = {
  onSearchClick?: () => void
  onCtaClick?: () => void
  className?: string
}

export default function Header({
  onSearchClick,
  onCtaClick,
  className = '',
}: HeaderProps) {
  return (
    <header
      className={[
        'sticky top-0 z-50 h-header w-full border-b border-white bg-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Container className="relative flex h-full items-center justify-between">
        <Link
          to="/"
          className="relative z-10 shrink-0"
          aria-label={strings.brand.homeAriaLabel}
        >
          <img
            src={namColdLogo}
            alt={strings.brand.name}
            width={108}
            height={52}
            className="h-[52px] w-[108px] object-contain"
          />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-[33px] md:flex"
          aria-label={strings.common.mainNavAriaLabel}
        >
          {navigationConfig.items.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  'px-1 py-1 text-nav text-primary-dark transition-colors hover:text-primary',
                  isActive ? 'font-medium text-primary' : 'font-normal',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-5">
          <button
            type="button"
            aria-label={strings.common.searchAriaLabel}
            onClick={onSearchClick}
            className="inline-flex size-[18px] cursor-pointer items-center justify-center text-primary transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <SearchIcon className="size-[18px]" />
          </button>

          <Button variant="primary" size="sm" onClick={onCtaClick}>
            {navigationConfig.cta}
          </Button>
        </div>
      </Container>
    </header>
  )
}
