import Container from '@components/Container'
import { reliefIntroConfig } from '@configs/reliefIntro'

export type ReliefIntroProps = {
  className?: string
  eyebrow?: string
  heading?: string
}

/** Figma Solution Page eyebrow + heading (1:1036 / 1:1037) */
export default function ReliefIntro({
  className = '',
  eyebrow = reliefIntroConfig.eyebrow,
  heading = reliefIntroConfig.heading,
}: ReliefIntroProps) {
  return (
    <section
      className={['w-full bg-white pt-[116px] pb-[90px]', className]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="relief-intro-heading"
    >
      <Container className="flex flex-col items-center gap-1.5 text-center">
        <span className="text-body-sm font-normal uppercase tracking-eyebrow text-primary">
          {eyebrow}
        </span>
        <h2
          id="relief-intro-heading"
          className="text-[1.75rem] font-normal leading-[1.04] tracking-[-1.2px] text-ink sm:text-lead lg:text-heading"
        >
          {heading}
        </h2>
      </Container>
    </section>
  )
}
