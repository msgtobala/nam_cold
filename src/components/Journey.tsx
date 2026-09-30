import type { ReactNode } from 'react'
import { journeyConfig, type JourneyStepConfig } from '@configs/journey'
import ProgressiveImage from '@components/ProgressiveImage'

export type JourneyProps = {
  badge?: string
  titleBefore?: string
  titleAccent?: string
  titleAfter?: string
  description?: string
  steps?: readonly JourneyStepConfig[]
  timelineImage?: string
  timelineAlt?: string
  timelineWidth?: number
  timelineHeight?: number
  productImage?: string
  productWidth?: number
  productHeight?: number
  glowImage?: string
  glowWidth?: number
  glowHeight?: number
  className?: string
  headingId?: string
  /** Optional custom heading node; overrides titleBefore/Accent/After when set */
  title?: ReactNode
}

const stepColumns = ['lg:col-start-2', 'lg:col-start-4', 'lg:col-start-6', 'lg:col-start-8'] as const

/**
 * Homepage clinical timeline (Figma 1:264).
 * Illustration is the cropped timeline art, with the NAM COLD bottle
 * placed over step 3. Step captions sit on the same centers as the circles.
 */
export default function Journey({
  badge = journeyConfig.badge,
  titleBefore = journeyConfig.titleBefore,
  titleAccent = journeyConfig.titleAccent,
  titleAfter = journeyConfig.titleAfter,
  description = journeyConfig.description,
  steps = journeyConfig.steps,
  timelineImage = journeyConfig.timelineImage,
  timelineAlt = journeyConfig.timelineAlt,
  timelineWidth = journeyConfig.timelineWidth,
  timelineHeight = journeyConfig.timelineHeight,
  productImage = journeyConfig.productImage,
  productWidth = journeyConfig.productWidth,
  productHeight = journeyConfig.productHeight,
  glowImage = journeyConfig.glowImage,
  glowWidth = journeyConfig.glowWidth,
  glowHeight = journeyConfig.glowHeight,
  className = '',
  headingId = 'journey-heading',
  title,
}: JourneyProps) {
  return (
    <section
      data-reveal
      className={['w-full bg-white pt-14 pb-16 sm:pt-16 lg:pt-[56px] lg:pb-[99px]', className]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby={headingId}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
        <header data-reveal-item className="flex w-full max-w-[800px] flex-col items-center gap-3 px-4 text-center sm:px-6 lg:px-0">
          <span className="px-4 py-1.5 text-body-sm font-normal tracking-[1.68px] text-primary">
            {badge}
          </span>
          <div className="flex flex-col items-center gap-2">
            <h2
              id={headingId}
              className="text-[1.75rem] font-normal leading-[1.1] text-ink sm:text-lead lg:text-heading lg:leading-[1.04]"
            >
              {title ?? (
                <>
                  {titleBefore}
                  <span className="text-primary">{titleAccent}</span>
                  {titleAfter}
                </>
              )}
            </h2>
            <p className="max-w-[800px] text-body-sm font-normal text-[#4b5563] sm:text-base">
              {description}
            </p>
          </div>
        </header>

        <div className="mt-10 w-full lg:mt-[81px]">
          <div className="relative aspect-[1440/220] w-full overflow-hidden">
            <div className="absolute inset-x-0 top-0 aspect-[1440/347]">
              <div className="absolute top-0 left-[0.208%] h-full w-[99.792%] overflow-hidden">
                <ProgressiveImage
                  src={timelineImage}
                  alt={timelineAlt}
                  width={timelineWidth}
                  height={timelineHeight}
                  className="pointer-events-none absolute top-[-42.07%] left-[-0.04%] h-[142.07%] w-[100.07%] max-w-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="pointer-events-none absolute top-[8.069%] left-[58.333%] h-[44.957%] w-[10.486%]">
                <ProgressiveImage
                  src={glowImage}
                  alt=""
                  width={glowWidth}
                  height={glowHeight}
                  className="absolute inset-0 size-full max-w-none"
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
              </div>
              <div className="pointer-events-none absolute top-[8.069%] left-[61.181%] h-[43.228%] w-[3.958%] overflow-hidden">
                <ProgressiveImage
                  src={productImage}
                  alt=""
                  width={productWidth}
                  height={productHeight}
                  className="pointer-events-none absolute top-[-20.03%] left-[-214.97%] h-[132.3%] w-[522.45%] max-w-none"
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:mt-[1.806%] lg:grid-cols-[5.833333%_14.166667%_11.388889%_14.166667%_10.555556%_14.166667%_10.555556%_14.166667%_5%] lg:gap-0 lg:px-0">
            {steps.map((step, index) => (
              <li data-reveal-item
                key={step.id}
                className={[
                  'mx-auto flex w-full max-w-[204px] flex-col items-center gap-1.5 text-center',
                  stepColumns[index],
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <p className="w-full text-card-title font-medium leading-normal text-primary">
                  {step.title}
                </p>
                <p className="w-full text-body-sm font-normal leading-normal text-[#4b5563]">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
