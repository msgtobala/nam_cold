import SearchIcon from '@icons/SearchIcon'
import { insightsLibraryConfig } from '@configs/insightsLibrary'
import ProgressiveImage from '@components/ProgressiveImage'

export type InsightsLibraryProps = {
  className?: string
}

/** Figma Insight library grid (1:2782) */
export default function InsightsLibrary({
  className = '',
}: InsightsLibraryProps) {
  const {
    ariaLabel,
    eyebrow,
    heading,
    searchPlaceholder,
    searchAriaLabel,
    articles,
  } = insightsLibraryConfig

  return (
    <section
      data-reveal
      className={['w-full bg-surface-warm', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-10 px-4 pt-14 sm:gap-12 sm:px-8 sm:pt-16 lg:gap-12 lg:px-24 lg:pt-[88px] lg:pb-20">
        <header data-reveal-item className="flex w-full flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-body-sm font-medium uppercase tracking-[1.96px] text-primary">
              {eyebrow}
            </span>
            <h2
              id="insights-library-heading"
              className="text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading"
            >
              {heading}
            </h2>
          </div>

          <label className="relative flex h-[49px] w-full max-w-[340px] shrink-0 cursor-text items-center justify-between overflow-hidden rounded-full border border-[#dedcd4] bg-white px-5 py-3.5">
            <span className="sr-only">{searchAriaLabel}</span>
            <input
              type="search"
              placeholder={searchPlaceholder}
              aria-label={searchAriaLabel}
              className="min-w-0 flex-1 border-0 bg-transparent text-nav font-normal text-ink-strong outline-none placeholder:text-[#697066]"
            />
            <SearchIcon className="size-5 shrink-0 text-primary/65" />
          </label>
        </header>

        <ul className="grid w-full grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <li data-reveal-item key={article.id} className="h-full min-w-0">
              <article className="flex h-full flex-col items-start gap-[18px] overflow-hidden rounded-2xl bg-white p-4 shadow-[0px_10px_30px_0px_rgba(13,26,6,0.07)]">
                <div className="relative h-[230px] w-full shrink-0 overflow-hidden rounded-[10px]">
                  <ProgressiveImage
                    src={article.image}
                    alt={article.imageAlt}
                    width={1248}
                    height={832}
                    className="absolute inset-0 size-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-2.5 overflow-hidden">
                  <span className="text-nav font-medium uppercase tracking-[1.44px] text-primary">
                    {article.tag}
                  </span>
                  <h3 className="max-w-[308px] text-card-title font-normal leading-[1.3] text-ink-strong">
                    {article.title}
                  </h3>
                  <p className="text-nav font-normal text-[#697066]">
                    {article.readTime}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
