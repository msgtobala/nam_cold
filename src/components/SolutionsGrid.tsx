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
        'relative h-[440px] overflow-hidden rounded-card',
        card.backgroundClassName,
      ].join(' ')}
    >
      <div className={card.contentClassName}>
        <h3
          className={[
            'text-2xl font-normal leading-normal',
            card.titleClassName,
          ].join(' ')}
        >
          {card.title}
        </h3>
        <p className="text-body-sm font-normal text-[#0d0d0c]">{card.subtitle}</p>
        <p
          className={
            card.descriptionClassName ??
            'mt-[5px] text-body-sm font-normal text-black/50'
          }
        >
          {card.description}
        </p>
      </div>

      {card.image?.type === 'framed' ? (
        <div className={card.image.frameClassName}>
          <img
            src={card.image.src}
            alt=""
            width={card.image.width}
            height={card.image.height}
            className={card.image.imageClassName}
            decoding="async"
          />
        </div>
      ) : null}

      {card.image?.type === 'direct' ? (
        <img
          src={card.image.src}
          alt=""
          width={card.image.width}
          height={card.image.height}
          className={card.image.imageClassName}
          decoding="async"
        />
      ) : null}
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
      <Container className="flex flex-col items-center gap-[68px] pb-10">
        <header className="flex w-full max-w-[830px] flex-col items-center gap-3 text-center">
          <span className="px-4 py-1.5 text-body-sm font-normal tracking-[0.12em] text-primary">
            {badge}
          </span>
          <div className="flex flex-col items-center gap-2">
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
        </header>

        <div className="flex w-full flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,528fr)_minmax(0,309fr)_minmax(0,418fr)]">
            {solutionsGridConfig.topRow.map((card) => (
              <SolutionCard key={card.id} card={card} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {solutionsGridConfig.bottomRow.map((card) => (
              <SolutionCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        <Button type="button" onClick={() => navigate(ctaPath)}>
          {cta}
        </Button>
      </Container>
    </section>
  )
}
