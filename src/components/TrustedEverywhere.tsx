import Container from '@components/Container'
import { trustedEverywhereConfig } from '@configs/trustedEverywhere'

export type TrustedEverywhereProps = {
  className?: string
}

/** Figma Trusted availability band (1:1005) */
export default function TrustedEverywhere({
  className = '',
}: TrustedEverywhereProps) {
  const {
    headingBefore,
    headingAccent,
    description,
    partnersLabel,
    pharmacy,
    features,
    partners,
  } = trustedEverywhereConfig

  return (
    <section
      className={['w-full overflow-hidden bg-surface-sage', className]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="trusted-everywhere-heading"
    >
      <Container className="relative flex flex-col gap-10 py-14 sm:gap-12 sm:py-16 lg:flex-row lg:items-center lg:gap-8 lg:py-[59px]">
        <div className="relative z-10 flex w-full max-w-[537px] shrink-0 flex-col gap-8 lg:gap-10">
          <div className="flex flex-col gap-[9px]">
            <h2
              id="trusted-everywhere-heading"
              className="text-[1.75rem] font-normal leading-[1.3] sm:text-lead lg:text-heading"
            >
              <span className="block text-[#121911]">{headingBefore}</span>
              <span className="block text-accent-olive">{headingAccent}</span>
            </h2>
            <p className="max-w-[404px] text-body-sm font-normal text-[#4b5563] sm:text-base">
              {description}
            </p>
          </div>

          <ul className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[43px]">
            {features.map((feature) => (
              <li key={feature.id} className="flex items-center gap-[12px]">
                <img
                  src={feature.icon}
                  alt=""
                  width={59}
                  height={60}
                  className="size-[59px] shrink-0 rounded-full shadow-soft"
                  decoding="async"
                />
                <span className="text-base font-normal leading-normal text-[#4b5563]">
                  <span className="block">{feature.titleLine1}</span>
                  <span className="block">{feature.titleLine2}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
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

        <div className="relative w-full min-w-0 flex-1 lg:min-h-[404px]">
          <img
            src={pharmacy.src}
            alt={pharmacy.alt}
            width={pharmacy.width}
            height={pharmacy.height}
            className="relative z-10 mx-auto h-auto w-full max-w-[784px] object-contain object-center lg:absolute lg:right-0 lg:top-1/2 lg:max-w-none lg:w-[110%] lg:-translate-y-1/2 xl:w-[784px]"
            decoding="async"
          />
        </div>
      </Container>
    </section>
  )
}
