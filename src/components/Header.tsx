import { useEffect, useId, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Button from '@components/Button'
import Container from '@components/Container'
import CloseIcon from '@icons/CloseIcon'
import MenuIcon from '@icons/MenuIcon'
import SearchIcon from '@icons/SearchIcon'
import { navigationConfig } from '@configs/navigation'
import { namColdLogo } from '@resources/brand'
import { strings } from '@strings/strings'

export type HeaderProps = {
  onSearchClick?: () => void
  onCtaClick?: () => void
  className?: string
}

function navLinkClassName({ isActive }: { isActive: boolean }) {
  return [
    'relative px-1 py-1 text-nav transition-colors hover:text-primary',
    isActive
      ? 'font-medium text-primary after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary'
      : 'font-normal text-primary-dark',
  ].join(' ')
}

function mobileNavLinkClassName({ isActive }: { isActive: boolean }) {
  return [
    'block rounded-md px-2 py-3 text-body transition-colors hover:text-primary',
    isActive
      ? 'bg-primary-tint font-medium text-primary'
      : 'font-normal text-primary-dark',
  ].join(' ')
}

export default function Header({
  onSearchClick,
  onCtaClick,
  className = '',
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const menuId = useId()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full border-b border-white bg-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="h-header w-full">
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
              <NavLink key={to} to={to} className={navLinkClassName}>
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

            <div className="hidden md:block">
              <Button variant="primary" size="sm" onClick={onCtaClick}>
                {navigationConfig.cta}
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex size-11 cursor-pointer items-center justify-center text-primary transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
              aria-label={
                menuOpen
                  ? strings.common.menuCloseAriaLabel
                  : strings.common.menuOpenAriaLabel
              }
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <CloseIcon className="size-[18px]" />
              ) : (
                <MenuIcon className="size-[18px]" />
              )}
            </button>
          </div>
        </Container>
      </div>

      {menuOpen ? (
        <nav
          id={menuId}
          className="fixed inset-x-0 top-header bottom-0 z-40 overflow-y-auto border-t border-border bg-white md:hidden"
          aria-label={strings.common.mainNavAriaLabel}
        >
          <Container className="flex flex-col py-4">
            {navigationConfig.items.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={mobileNavLinkClassName}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={onCtaClick}
              className="mt-4 w-full"
            >
              {navigationConfig.cta}
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  )
}
