import { aboutUsIntroConfig } from '@configs/aboutUsIntro'

export type AboutUsIntroProps = {
  className?: string
}

/** Figma Intro bar (151:783) — 1440×362, px 48, py 80 */
export default function AboutUsIntro({ className = '' }: AboutUsIntroProps) {
  const { label, heading, description } = aboutUsIntroConfig

  return (
    <section
      className={[
        'w-full border-y border-solid border-border-warm bg-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="about-us-intro-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col items-start justify-between gap-8 px-4 py-14 sm:px-8 sm:py-16 lg:flex-row lg:gap-0 lg:px-page-x lg:py-header">
        <p className="w-full shrink-0 text-body-sm font-medium leading-normal tracking-[1.96px] text-primary lg:w-[220px]">
          {label}
        </p>
        <div className="flex w-full flex-col gap-4 overflow-hidden lg:w-[800px]">
          <h2
            id="about-us-intro-heading"
            className="w-full text-[1.75rem] font-normal leading-[1.3] tracking-[0.28px] text-ink-strong sm:text-lead"
          >
            {heading}
          </h2>
          <p className="w-full text-base font-normal leading-[1.3] text-muted-alt">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
