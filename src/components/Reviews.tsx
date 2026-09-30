import { useId } from 'react'
import { reviewsConfig } from '@configs/reviews'

const starPath =
  'M9.76788 1.73243C9.69793 1.77586 9.64152 1.83796 9.605 1.91174L7.68083 5.81091C7.55392 6.0678 7.36648 6.29001 7.13465 6.4584C6.90282 6.62679 6.63355 6.73633 6.35 6.77758L2.04583 7.40675C1.96392 7.41833 1.88691 7.45268 1.82356 7.5059C1.76022 7.55911 1.7131 7.62905 1.68757 7.70774C1.66203 7.78643 1.65911 7.87071 1.67914 7.95097C1.69916 8.03124 1.74133 8.10427 1.80083 8.16175L4.91417 11.1926C5.11967 11.3927 5.27341 11.6398 5.36211 11.9126C5.45082 12.1854 5.47183 12.4757 5.42333 12.7584L4.68917 17.0409C4.67488 17.1223 4.68373 17.2061 4.71471 17.2828C4.74569 17.3594 4.79756 17.4258 4.86441 17.4744C4.93126 17.523 5.01042 17.5519 5.09288 17.5578C5.17533 17.5637 5.25778 17.5463 5.33083 17.5076L9.17833 15.4842C9.4319 15.3511 9.71402 15.2815 10.0004 15.2815C10.2868 15.2815 10.5689 15.3511 10.8225 15.4842L14.6708 17.5076C14.7439 17.5465 14.8265 17.5641 14.9091 17.5583C14.9916 17.5526 15.071 17.5237 15.138 17.4751C15.2049 17.4264 15.2569 17.3599 15.2879 17.2831C15.3189 17.2064 15.3277 17.1224 15.3133 17.0409L14.5783 12.7576C14.5301 12.475 14.5512 12.1849 14.6399 11.9123C14.7286 11.6396 14.8822 11.3927 15.0875 11.1926L18.2008 8.16091C18.2598 8.10337 18.3016 8.03047 18.3213 7.95044C18.3411 7.87042 18.338 7.78647 18.3125 7.70808C18.287 7.6297 18.2401 7.56002 18.1771 7.50691C18.114 7.45381 18.0374 7.4194 17.9558 7.40758L13.6508 6.77758C13.3676 6.73601 13.0987 6.62633 12.8672 6.45796C12.6357 6.28959 12.4485 6.06755 12.3217 5.81091L10.3967 1.91174C10.3601 1.83796 10.3037 1.77586 10.2338 1.73243C10.1638 1.68901 10.0832 1.666 10.0008 1.666C9.91851 1.666 9.83782 1.68901 9.76788 1.73243Z'

function PartialStar({ fill, size }: { fill: number; size: number }) {
  const clipId = useId()

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="block"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width={20 * fill} height="20" />
        </clipPath>
      </defs>
      <path
        d={starPath}
        fill="#E5E7EB"
        stroke="#E5E7EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={starPath}
        fill="#F59E0B"
        stroke="#F59E0B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath={`url(#${clipId})`}
      />
    </svg>
  )
}

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
        const fill = Math.min(1, Math.max(0, rating - index))
        return (
          <span
            key={index}
            className="relative shrink-0"
            style={{ width: size, height: size }}
          >
            {fill === 0 || fill === 1 ? (
              <img
                src={fill === 1 ? filledSrc : emptySrc}
                alt=""
                width={size}
                height={size}
                className="absolute inset-0 size-full"
                decoding="async"
                aria-hidden="true"
              />
            ) : (
              <PartialStar fill={fill} size={size} />
            )}
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
              rating={Number(ratingValue)}
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
