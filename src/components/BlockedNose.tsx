import { useNavigate } from 'react-router-dom'
import Button from '@components/Button'
import { blockedNoseConfig } from '@configs/blockedNose'

export type BlockedNoseProps = {
  className?: string
}

/** Figma Blocked nose (1:1056) */
export default function BlockedNose({ className = '' }: BlockedNoseProps) {
  const navigate = useNavigate()
  const { label, heading, description, cta, ctaHref, background, benefits } =
    blockedNoseConfig

  return (
    <section
      className={['relative w-full overflow-hidden bg-footer', className]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="blocked-nose-heading"
    >
      <div className="relative min-h-[520px] lg:min-h-0 lg:h-[640px]">
        <img
          src={background.src}
          alt=""
          width={background.width}
          height={background.height}
          className="absolute inset-0 size-full object-cover object-center"
          decoding="async"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-overlay to-[rgba(12,24,41,0.4)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex h-full w-full max-w-page flex-col gap-10 px-4 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:gap-20 lg:px-[120px] lg:py-[88px]">
          <div className="flex w-full max-w-[560px] shrink-0 flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <span
                className="h-0.5 w-6 shrink-0 bg-accent-amber"
                aria-hidden="true"
              />
              <span className="text-body-sm font-medium uppercase tracking-[1.96px] text-accent-amber">
                {label}
              </span>
            </div>

            <h2
              id="blocked-nose-heading"
              className="text-[1.75rem] font-normal leading-[1.3] text-white sm:text-lead lg:text-heading"
            >
              {heading}
            </h2>

            <p className="text-body-sm font-normal leading-[1.6] text-[#c8d8ee] sm:text-base">
              {description}
            </p>

            <Button
              type="button"
              variant="tertiary"
              onClick={() => navigate(ctaHref)}
            >
              {cta}
            </Button>
          </div>

          <ul className="flex w-full min-w-0 flex-1 flex-col gap-4">
            {benefits.map((benefit) => (
              <li
                key={benefit.id}
                className="flex flex-col gap-2 rounded-2xl border border-white/30 bg-white/8 p-5 backdrop-blur-[13px] sm:p-6"
              >
                <h3 className="text-card-title font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="text-body-sm font-normal leading-normal text-[#a0b8d8]">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
