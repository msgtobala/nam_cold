import { manifestoConfig } from '@configs/manifesto'

export type ManifestoProps = {
  className?: string
  heading?: string
  description?: string
}

/** Figma Manifesto (1:1169) — blue band below Solutions hero */
export default function Manifesto({
  className = '',
  heading = manifestoConfig.heading,
  description = manifestoConfig.description,
}: ManifestoProps) {
  return (
    <section
      data-reveal
      className={['w-full bg-primary', className].filter(Boolean).join(' ')}
      aria-labelledby="manifesto-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-6 px-4 py-10 sm:gap-8 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-[120px] lg:py-14">
        <h2
          id="manifesto-heading"
          className="max-w-[613px] shrink-0 text-[1.75rem] font-normal leading-[1.3] text-white sm:text-lead lg:text-heading"
        >
          {heading}
        </h2>
        <p className="w-full max-w-[523px] text-body-sm font-normal leading-[1.3] text-white sm:text-base">
          {description}
        </p>
      </div>
    </section>
  )
}
