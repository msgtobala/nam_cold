import { useNavigate } from 'react-router-dom'
import Button from '@components/Button'
import { allergyReliefConfig } from '@configs/allergyRelief'

export type AllergyReliefProps = {
  className?: string
}

/** Figma Allergy relief (1:1095) */
export default function AllergyRelief({ className = '' }: AllergyReliefProps) {
  const navigate = useNavigate()
  const { label, heading, description, tags, cta, ctaHref, visual, pollen } =
    allergyReliefConfig

  return (
    <section
      className={['relative w-full overflow-hidden bg-surface-mint', className]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="allergy-relief-heading"
    >
      {pollen.map((dot, index) => (
        <img
          key={index}
          src={dot.src}
          alt=""
          className={['pointer-events-none absolute z-0', dot.className].join(
            ' ',
          )}
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-page flex-col items-center gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:flex-row lg:gap-20 lg:px-[120px] lg:py-[104px]">
        <div className="relative aspect-[620/560] w-full overflow-hidden rounded-[24px] lg:h-[560px] lg:w-[620px] lg:shrink-0 lg:aspect-auto">
          <img
            src={visual.src}
            alt={visual.alt}
            width={visual.width}
            height={visual.height}
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-6 sm:gap-7">
          <div className="flex items-center gap-2">
            <span
              className="h-0.5 w-6 shrink-0 bg-accent-forest"
              aria-hidden="true"
            />
            <span className="text-body-sm font-medium uppercase tracking-[1.96px] text-accent-forest">
              {label}
            </span>
          </div>

          <h2
            id="allergy-relief-heading"
            className="max-w-[392px] text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading"
          >
            {heading}
          </h2>

          <p className="text-body-sm font-normal leading-[1.3] text-[#4a5e44] sm:text-base">
            {description}
          </p>

          <ul className="flex max-w-[432px] flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <span className="inline-flex items-center rounded-full border border-[#d0e8c8] bg-white/[0.78] px-4 py-[9px] text-body-sm font-normal text-accent-forest">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate(ctaHref)}
          >
            {cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
