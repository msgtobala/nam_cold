import { useNavigate } from 'react-router-dom'
import Button from '@components/Button'
import { kidsCareConfig } from '@configs/kidsCare'

export type KidsCareProps = {
  className?: string
}

/** Figma Kids care (171:1117) */
export default function KidsCare({ className = '' }: KidsCareProps) {
  const navigate = useNavigate()
  const { label, heading, description, cta, ctaHref, stats, products, family } =
    kidsCareConfig

  return (
    <section
      className={['w-full bg-[#fff8f0]', className].filter(Boolean).join(' ')}
      aria-labelledby="kids-care-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col items-center gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:flex-row lg:gap-[72px] lg:px-[120px] lg:py-[104px]">
        <div className="flex w-full max-w-[520px] shrink-0 flex-col items-start gap-6 sm:gap-7 lg:w-[520px]">
          <div className="flex items-center gap-2">
            <span
              className="h-0.5 w-6 shrink-0 bg-accent-rose"
              aria-hidden="true"
            />
            <span className="text-body-sm font-medium uppercase tracking-[1.96px] text-accent-rose">
              {label}
            </span>
          </div>

          <h2
            id="kids-care-heading"
            className="max-w-[444px] text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading"
          >
            {heading}
          </h2>

          <p className="max-w-[491px] text-body-sm font-normal leading-[1.65] text-[#6b4a38] sm:text-base">
            {description}
          </p>

          <div className="flex w-full flex-col gap-4 sm:flex-row">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex min-h-[140px] flex-1 flex-col gap-2 rounded-[14px] border border-[#ffd8c8] bg-white px-4 pt-[29px] pb-4"
              >
                <span className="text-2xl font-medium leading-normal whitespace-nowrap text-accent-rose">
                  {stat.title}
                </span>
                <span
                  className={[
                    'text-body-sm font-normal leading-[1.4] text-[#6b4a38]',
                    stat.id === 'newborn-care' ? 'max-w-[190px]' : 'max-w-[171px]',
                  ].join(' ')}
                >
                  {stat.description}
                </span>
              </div>
            ))}
          </div>

          <div className="relative h-[140px] w-full overflow-hidden rounded-[12px]">
            <img
              src={products.src}
              alt={products.alt}
              width={products.width}
              height={products.height}
              className="absolute inset-0 size-full object-cover"
              decoding="async"
            />
          </div>

          <Button
            type="button"
            variant="secondary"
            className="bg-accent-rose! shadow-none! hover:bg-accent-rose/90!"
            onClick={() => navigate(ctaHref)}
          >
            {cta}
          </Button>
        </div>

        <div className="relative aspect-[608/560] w-full min-w-0 flex-1 overflow-hidden rounded-[24px] lg:h-[560px] lg:aspect-auto">
          <img
            src={family.src}
            alt={family.alt}
            width={family.width}
            height={family.height}
            className="absolute inset-0 size-full object-cover"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
