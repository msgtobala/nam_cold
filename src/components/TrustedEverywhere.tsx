import { trustedEverywhereConfig } from '@configs/trustedEverywhere'

export type TrustedEverywhereProps = {
  className?: string
}

/** Figma Trusted availability band (1:586) — pharmacy is a foreground image over the sage band */
export default function TrustedEverywhere({
  className = '',
}: TrustedEverywhereProps) {
  const {
    headingBefore,
    headingAccent,
    description,
    partnersLabel,
    pharmacy,
    glow,
    features,
    partners,
  } = trustedEverywhereConfig

  return (
    <section
      className={['relative w-full overflow-x-clip bg-white', className]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="trusted-everywhere-heading"
    >
      <div
        className="absolute inset-x-0 bottom-0 h-full bg-surface-sage lg:h-[404px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-page flex-col lg:block lg:h-[463px]">
        <div className="pointer-events-none absolute left-[700px] top-[203px] hidden h-[116px] w-[170px] lg:block">
          <div className="absolute inset-[-179.05%_-122.18%]">
            <img
              src={glow}
              alt=""
              width={585}
              height={531}
              className="size-full max-w-none"
              decoding="async"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-8 px-4 py-10 sm:px-8 sm:py-12 lg:w-[700px] lg:gap-0 lg:px-0 lg:pl-[72px] lg:pb-0 lg:pt-[107px]">
          <div className="flex w-full max-w-[537px] flex-col gap-[9px]">
            <h2
              id="trusted-everywhere-heading"
              className="text-[1.75rem] font-normal leading-[1.3] sm:text-lead lg:text-heading"
            >
              <span className="block text-[#121911]">{headingBefore}</span>
              <span className="block text-accent-olive">{headingAccent}</span>
            </h2>
            <p className="max-w-[404px] text-body-sm font-normal leading-normal text-body sm:text-base">
              {description}
            </p>
          </div>

          <ul className="mt-0 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[43px] lg:mt-[22px] lg:flex-nowrap">
            {features.map((feature) => (
              <li key={feature.id} className="relative flex items-center">
                <span className="relative h-[60px] w-[59px] shrink-0 rounded-[49.5px] bg-white shadow-soft">
                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[49.5px]">
                    <img
                      src={feature.icon}
                      alt=""
                      width={59}
                      height={60}
                      className="absolute inset-0 size-full max-w-none object-cover"
                      decoding="async"
                      aria-hidden="true"
                    />
                  </span>
                </span>
                <span className="ml-3 text-base font-normal leading-normal text-body">
                  <span className="block">{feature.titleLine1}</span>
                  <span className="block">{feature.titleLine2}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-0 flex flex-wrap items-center gap-6 lg:mt-10 lg:flex-nowrap lg:gap-6">
            <span className="text-body-sm font-medium text-accent-teal">
              {partnersLabel}
            </span>
            {partners.map((partner) => (
              <img
                key={partner.id}
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className={['object-contain', partner.className].join(' ')}
                decoding="async"
              />
            ))}
          </div>
        </div>

        <div className="relative w-full lg:absolute lg:left-[670px] lg:top-0 lg:h-[463px] lg:w-[784px]">
          <img
            src={pharmacy.src}
            alt={pharmacy.alt}
            width={pharmacy.width}
            height={pharmacy.height}
            className="relative z-[1] h-auto w-full object-cover object-center lg:absolute lg:inset-0 lg:h-[463px] lg:w-[784px] lg:max-w-none"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
