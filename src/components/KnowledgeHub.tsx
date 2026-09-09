import { useNavigate } from 'react-router-dom'
import Container from '@components/Container'
import ArrowRightIcon from '@icons/ArrowRightIcon'
import { knowledgeHubConfig } from '@configs/knowledgeHub'

export type KnowledgeHubProps = {
  className?: string
}

/** Figma Knowledge hub (1:780) — article cards match selection */
export default function KnowledgeHub({ className = '' }: KnowledgeHubProps) {
  const navigate = useNavigate()
  const { eyebrow, heading, viewAll, viewAllHref, readMore, articles } =
    knowledgeHubConfig

  return (
    <section
      className={['w-full bg-white', className].filter(Boolean).join(' ')}
      aria-labelledby="knowledge-hub-heading"
    >
      <Container className="flex flex-col gap-8 py-14 sm:gap-10 sm:py-16 lg:gap-10 lg:py-[88px]">
        <header className="flex w-full flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[700px] flex-col gap-3">
            <span className="text-body-sm font-normal uppercase tracking-[1.68px] text-primary">
              {eyebrow}
            </span>
            <h2
              id="knowledge-hub-heading"
              className="max-w-[510px] text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading"
            >
              {heading}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigate(viewAllHref)}
            className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 self-start text-button font-normal text-primary transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:self-auto"
          >
            {viewAll}
            <ArrowRightIcon className="size-3.5 text-primary" />
          </button>
        </header>

        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {articles.map((article) => (
            <li key={article.id} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-white">
                <div className="relative h-[191px] w-full shrink-0 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    width={318}
                    height={191}
                    className="absolute inset-0 size-full object-cover"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start gap-3 p-5">
                  <span className="text-nav font-medium uppercase text-[#a5ce3a]">
                    {article.tag}
                  </span>
                  <h3 className="text-base font-medium text-[#111827]">
                    {article.title}
                  </h3>
                  <p className="text-label font-normal text-[#4b5563]">
                    {article.description}
                  </p>
                  <button
                    type="button"
                    className="mt-auto inline-flex cursor-pointer items-center gap-1 text-nav font-semibold text-primary transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {readMore}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
