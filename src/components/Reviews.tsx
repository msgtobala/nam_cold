import { reviewsConfig } from '@configs/reviews'

export type ReviewsProps = {
  className?: string
}

function StarRow({
  rating,
  size,
  filledSrc,
  emptySrc,
}: {
  rating: number
  size: number
  filledSrc: string
  emptySrc: string
}) {
  return (
    <div className="flex items-start gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < rating
        return (
          <span
            key={index}
            className="relative shrink-0 overflow-clip"
            style={{ width: size, height: size }}
          >
            <img
              src={filled ? filledSrc : emptySrc}
              alt=""
              width={size}
              height={size}
              className="absolute inset-0 size-full"
              decoding="async"
              aria-hidden="true"
            />
          </span>
        )
      })}
    </div>
  )
}

/** Figma Products reviews (1:1722) */
export default function Reviews({ className = '' }: ReviewsProps) {
  const { eyebrow, heading, ratingValue, ratingMeta, stars, reviews } =
    reviewsConfig

  return (
    <section
      className={['w-full bg-[#fafaf8]', className].filter(Boolean).join(' ')}
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-12 px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <header className="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex w-full max-w-[640px] flex-col gap-3">
            <span className="text-caption font-bold tracking-[1.1px] text-primary-bright">
              {eyebrow}
            </span>
            <h2
              id="reviews-heading"
              className="max-w-[526px] text-[1.75rem] font-normal leading-[1.04] tracking-[-0.03em] text-ink sm:text-lead lg:text-heading lg:tracking-[-1.2px]"
            >
              {heading}
            </h2>
          </div>

          <div className="flex flex-col items-start gap-1.5 lg:items-end">
            <StarRow
              rating={5}
              size={20}
              filledSrc={stars.filled}
              emptySrc={stars.empty}
            />
            <p className="text-[2rem] font-medium leading-none text-[#0a1838]">
              {ratingValue}
            </p>
            <p className="text-body-sm font-normal text-[#8a94a6]">{ratingMeta}</p>
          </div>
        </header>

        <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.id} className="h-full">
              <article className="flex h-full min-h-[256px] flex-col gap-[18px] rounded-card border border-[#e8edf5] bg-white p-6 sm:p-8">
                <StarRow
                  rating={review.rating}
                  size={14}
                  filledSrc={stars.filledSm}
                  emptySrc={stars.empty}
                />
                <p className="flex-1 text-body-sm font-normal leading-[1.65] text-[#0a1838] sm:text-base">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-2.5">
                  <img
                    src={review.avatar}
                    alt={review.avatarAlt}
                    width={36}
                    height={36}
                    className="size-9 shrink-0 rounded-full object-cover"
                    decoding="async"
                  />
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <span className="text-body-sm font-medium text-[#0a1838]">
                      {review.name}
                    </span>
                    <span className="text-nav font-normal text-[#8a94a6]">
                      {review.meta}
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
