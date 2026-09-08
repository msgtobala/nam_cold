import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@components/Button'
import Container from '@components/Container'
import InputBar from '@components/InputBar'
import MapPinIcon from '@icons/MapPinIcon'
import { footerConfig } from '@configs/footer'
import { namColdLightLogo } from '@resources/brand'
import { strings } from '@strings/strings'

export type FooterProps = {
  onSearchPharmacy?: (query: string) => void
  className?: string
}

export default function Footer({
  onSearchPharmacy,
  className = '',
}: FooterProps) {
  const [query, setQuery] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearchPharmacy?.(query.trim())
  }

  return (
    <footer
      className={[
        'w-full [background-image:var(--gradient-footer)] pb-10 pt-[100px] text-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Container width="footer" className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-6">
          <h2 className="max-w-full text-center font-semibold text-display text-white">
            <span className="block leading-[1.2]">
              {footerConfig.headlineLine1}
            </span>
            <span className="block leading-[1.2]">
              {footerConfig.headlineLine2Prefix}{' '}
              <span className="text-accent-gold">
                {footerConfig.headlineBrand}
              </span>
            </span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[600px] flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <InputBar
              icon={<MapPinIcon />}
              placeholder={footerConfig.pharmacyPlaceholder}
              label={footerConfig.pharmacyLabel}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />

            <Button type="submit" variant="primary" className="shrink-0">
              {footerConfig.pharmacyCta}
            </Button>
          </form>
        </div>

        <div className="h-px w-full bg-footer-divider" aria-hidden />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-full max-w-[360px] flex-col gap-4">
            <Link to="/" aria-label={strings.brand.homeAriaLabel}>
              <img
                src={namColdLightLogo}
                alt={strings.brand.name}
                width={108}
                height={52}
                className="h-[52px] w-[108px] object-contain"
              />
            </Link>
            <p className="text-label text-footer-muted">{footerConfig.blurb}</p>
          </div>

          <div className="grid w-full flex-1 grid-cols-2 gap-8 sm:grid-cols-4 lg:max-w-[760px] lg:gap-6">
            {footerConfig.linkColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <p className="text-body-sm font-bold text-white">
                  {column.title}
                </p>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        to={link.to}
                        className="text-label text-footer-muted transition-opacity hover:opacity-80"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-footer-divider" aria-hidden />

        <div className="flex flex-col gap-4 text-footer-subtle sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[800px] text-caption">{footerConfig.disclaimer}</p>
          <p className="shrink-0 text-nav">{footerConfig.copyright}</p>
        </div>
      </Container>
    </footer>
  )
}
