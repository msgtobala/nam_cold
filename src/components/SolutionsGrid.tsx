import { useNavigate } from 'react-router-dom'
import Button from '@components/Button'
import Container from '@components/Container'
import {
  solutionsGridConfig,
  type SolutionCardConfig,
} from '@configs/solutionsGrid'

function SolutionCard({ card }: { card: SolutionCardConfig }) {
  return (
    <article
      className={[
        'relative h-[420px] overflow-hidden rounded-card sm:h-[440px]',
        card.backgroundClassName,
      ].join(' ')}
    >
      <div className={card.contentClassName}>
        <p className="text-body-sm font-normal leading-normal text-[#0d0d0c]">
          {card.question}
        </p>
        <h3
          className={[
            'text-2xl font-normal leading-normal',
            card.titleClassName,
          ].join(' ')}
        >
          {card.title}
        </h3>
        <p
          className={
            card.descriptionClassName ??
            'mt-3 text-body-sm font-normal leading-[1.2] text-black/50'
          }
        >
          {card.description}
        </p>
      </div>

      <img
        src={card.image.src}
        alt=""
        width={card.image.width}
        height={card.image.height}
        className={card.image.imageClassName}
        loading="lazy"
        decoding="async"
      />
    </article>
  )
}

export type SolutionsGridProps = {
  className?: string
}

export default function SolutionsGrid({ className = '' }: SolutionsGridProps) {
  const navigate = useNavigate()
  const { badge, headingPrefix, headingAccent, description, cta, ctaPath } =
    solutionsGridConfig

  return (
    <section
      className={['w-full mt-[100px]', className].filter(Boolean).join(' ')}
      aria-labelledby="solutions-heading"
    >
      <Container className="flex flex-col gap-10 pb-10 sm:gap-12 lg:gap-[68px]">
        <header className="flex w-full flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="flex max-w-[830px] flex-col gap-3">
            <span className="text-body-sm font-normal tracking-[0.12em] text-primary">
              {badge}
            </span>
            <div className="flex flex-col gap-2">
              <h2
                id="solutions-heading"
                className="text-heading font-normal leading-[1.04] text-ink"
              >
                {headingPrefix}{' '}
                <span className="text-primary">{headingAccent}</span>
              </h2>
              <p className="max-w-[830px] text-lg leading-[1.4] text-muted">
                {description}
              </p>
            </div>
          </div>

          <Button
            type="button"
            className="shrink-0 self-start"
            onClick={() => navigate(ctaPath)}
          >
            {cta}
          </Button>
        </header>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutionsGridConfig.cards.map((card) => (
            <SolutionCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  )
}
