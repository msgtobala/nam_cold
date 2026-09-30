import { useNavigate } from 'react-router-dom'
import Button from '@components/Button'
import { blockedNoseConfig } from '@configs/blockedNose'

export type BlockedNoseProps = {
  className?: string
}

/** Figma Blocked nose (171:1055) — hero fills the 1440×704 frame */
export default function BlockedNose({ className = '' }: BlockedNoseProps) {
  const navigate = useNavigate()
  const { label, heading, description, cta, ctaHref, background, benefits } =
    blockedNoseConfig

  return (
    <section
      className={['relative w-full overflow-hidden bg-[#0f3fa0]', className]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="blocked-nose-heading"
    >
      <div className="relative mx-auto w-full max-w-[1440px] xl:aspect-[1440/704]">
        <img
          src={background.src}
          alt={background.alt}
          width={background.width}
          height={background.height}
          className="h-auto w-full xl:pointer-events-none xl:absolute xl:inset-0 xl:size-full xl:object-cover xl:object-center"
          loading="lazy"
          decoding="async"
        />

        <div className="relative z-10 flex flex-col gap-10 px-4 py-12 sm:px-8 sm:py-14 xl:absolute xl:inset-0 xl:block xl:p-0">
          <div className="flex w-full max-w-[560px] flex-col items-start gap-6 xl:absolute xl:top-[169px] xl:left-[120px] xl:w-[560px]">
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

            <p className="w-full max-w-[311px] text-body-sm font-normal leading-[1.6] text-[#c8d8ee] sm:text-base">
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

          <ul className="flex w-full flex-col gap-4 xl:absolute xl:top-1/2 xl:right-[120px] xl:w-[290px] xl:-translate-y-1/2">
            {benefits.map((benefit) => (
              <li
                key={benefit.id}
                className="flex flex-col gap-2 rounded-2xl border border-white/30 bg-white/8 p-6 backdrop-blur-[13px]"
              >
                <h3 className="text-card-title font-semibold leading-normal text-white">
                  {benefit.title}
                </h3>
                <p className="text-body-sm font-normal leading-[1.5] text-[#a0b8d8]">
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
