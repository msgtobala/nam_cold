import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowRightIcon from '@icons/ArrowRightIcon'
import { featuredInsightsConfig } from '@configs/featuredInsights'

export type FeaturedInsightsProps = {
  className?: string
}

/** Figma Featured this week (178:2929) */
export default function FeaturedInsights({
  className = '',
}: FeaturedInsightsProps) {
  const navigate = useNavigate()
  const {
    ariaLabel,
    eyebrow,
    heading,
    viewAll,
    viewAllHref,
    topicsLabel,
    divider,
    articles,
    topics,
  } = featuredInsightsConfig

  return (
    <section
      className={['w-full bg-white', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-[58px] px-4 py-14 sm:px-8 sm:py-16 lg:px-24 lg:py-20">
        <div className="flex w-full flex-col gap-12 sm:gap-16 lg:gap-[95px]">
          <header className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex flex-col gap-2.5">
              <span className="text-body-sm font-medium uppercase tracking-[1.96px] text-primary">
                {eyebrow}
              </span>
              <h2
                id="featured-insights-heading"
                className="text-[1.75rem] font-normal leading-[1.3] tracking-[0.28px] text-ink-strong"
              >
                {heading}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate(viewAllHref)}
              className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 self-start text-body-sm font-medium text-primary transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:self-auto"
            >
              {viewAll}
              <ArrowRightIcon className="size-3.5 text-primary" />
            </button>
          </header>

          <div className="flex w-full flex-col gap-10">
            {articles.map((article, index) => (
              <Fragment key={article.id}>
                <article className="flex w-full flex-col items-start gap-8 lg:flex-row lg:gap-[180px]">
                  <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[20px] sm:h-[240px] lg:h-[240px] lg:w-[500px]">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      width={article.imageWidth}
                      height={article.imageHeight}
                      className={
                        article.imageFit === 'framed'
                          ? 'absolute top-[-71.88%] left-[-3.43%] h-[289.48%] w-[117.45%] max-w-none'
                          : 'absolute inset-0 size-full object-cover'
                      }
                      decoding="async"
                    />
                  </div>
                  <div className="flex w-full max-w-[568px] flex-col items-start gap-5">
                    <span className="inline-flex items-center justify-center rounded-[2px] bg-primary px-2 py-1.5 text-body-sm font-medium leading-4 tracking-[0.28px] text-white">
                      {article.tag}
                    </span>
                    <div className="flex w-full flex-col gap-2.5">
                      <h3 className="text-[1.75rem] font-normal leading-[1.3] tracking-[0.28px] text-ink-strong">
                        {article.title}
                      </h3>
                      <p className="text-base font-normal leading-[1.3] text-[#5a6272]">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </article>
                {index < articles.length - 1 ? (
                  <img
                    src={divider}
                    alt=""
                    width={1248}
                    height={1}
                    className="block h-px w-full max-w-none"
                    decoding="async"
                    aria-hidden="true"
                  />
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 border-y border-[#dedcd4] py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <p className="shrink-0 text-base font-medium text-ink-strong">
            {topicsLabel}
          </p>
          <ul className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <li key={topic.id}>
                <span className="inline-flex items-center rounded-full bg-surface-warm px-[18px] py-2.5 text-body-sm font-normal text-ink-strong">
                  {topic.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
