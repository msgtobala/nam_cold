import { solutionImages } from '@resources/solutions'
import { strings } from '@strings/strings'

export type SolutionCardImage = {
  src: string
  width: number
  height: number
  /** Absolute positioning + size for the product shot */
  imageClassName: string
}

export type SolutionCardConfig = {
  id: string
  question: string
  title: string
  description: string
  backgroundClassName: string
  titleClassName: string
  contentClassName: string
  descriptionClassName?: string
  image: SolutionCardImage
}

const copy = strings.solutions.items

export const solutionsGridConfig = {
  badge: strings.solutions.badge,
  headingPrefix: strings.solutions.headingPrefix,
  headingAccent: strings.solutions.headingAccent,
  description: strings.solutions.description,
  cta: strings.solutions.cta,
  ctaPath: '/products',
  cards: [
    {
      id: 'oxy',
      question: copy.oxy.question,
      title: copy.oxy.title,
      description: copy.oxy.description,
      backgroundClassName: 'bg-[#e2dbf5]',
      titleClassName: 'uppercase text-accent-purple',
      // Figma 185:3020 — card 419×440; text left 28 / top 37
      contentClassName:
        'relative z-10 flex max-w-[268px] flex-col px-7 pt-[37px]',
      descriptionClassName:
        'mt-3 max-w-[222px] text-body-sm font-normal leading-[1.2] text-black/50',
      image: {
        src: solutionImages.oxy,
        width: 1286,
        height: 1201,
        // Figma 170:564 clip: left 115, top 155, 299×291 on 419×440 (slight bottom overflow)
        imageClassName:
          'pointer-events-none absolute bottom-[-6px] left-[27.45%] h-[66.14%] w-[71.36%] object-cover object-left-top',
      },
    },
    {
      id: 'ns',
      question: copy.ns.question,
      title: copy.ns.title,
      description: copy.ns.description,
      backgroundClassName: 'bg-[#cbdef8]',
      titleClassName: 'text-primary',
      // Figma 170:544 — card 418×440; text left 46 / top 37; desc width 243 (2 lines)
      contentClassName:
        'relative z-10 flex flex-col pl-[46px] pr-7 pt-[37px]',
      descriptionClassName:
        'mt-3 w-[243px] max-w-[243px] text-body-sm font-normal leading-[1.2] text-black/50',
      image: {
        src: solutionImages.ns,
        width: 452,
        height: 546,
        // Figma 170:545: left 96, top 167, 226×273 on 418×440 (flush bottom)
        imageClassName:
          'pointer-events-none absolute bottom-0 left-[22.97%] h-[62.05%] w-[54.07%] object-cover object-bottom',
      },
    },
    {
      id: 'vepocaps',
      question: copy.vepocaps.question,
      title: copy.vepocaps.title,
      description: copy.vepocaps.description,
      backgroundClassName: 'bg-[#feebf1]',
      titleClassName: 'text-accent-pink',
      // Figma 185:3021 — card 418×440; text left 36 / top 37; desc width 243 (2 lines)
      contentClassName:
        'relative z-10 flex flex-col pl-9 pr-7 pt-[37px]',
      descriptionClassName:
        'mt-3 w-[243px] max-w-[243px] text-body-sm font-normal leading-[1.2] text-black/50',
      image: {
        src: solutionImages.vepocaps,
        width: 664,
        height: 504,
        // Figma 170:607: left 46, top 172, 332×252, radius 14 on 418×440
        imageClassName:
          'pointer-events-none absolute left-[11%] top-[39.09%] h-[57.27%] w-[79.43%] rounded-[14px] object-cover object-center',
      },
    },
  ] satisfies SolutionCardConfig[],
} as const
