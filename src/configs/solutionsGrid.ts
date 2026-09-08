import { solutionImages } from '@resources/solutions'
import { strings } from '@strings/strings'

export type SolutionCardImage =
  | {
      type: 'framed'
      src: string
      width: number
      height: number
      frameClassName: string
      imageClassName: string
    }
  | {
      type: 'direct'
      src: string
      width: number
      height: number
      imageClassName: string
    }

export type SolutionCardConfig = {
  id: string
  title: string
  subtitle: string
  description: string
  backgroundClassName: string
  titleClassName: string
  contentClassName: string
  descriptionClassName?: string
  image?: SolutionCardImage
}

const copy = strings.solutions.items

export const solutionsGridConfig = {
  badge: strings.solutions.badge,
  headingPrefix: strings.solutions.headingPrefix,
  headingAccent: strings.solutions.headingAccent,
  description: strings.solutions.description,
  cta: strings.solutions.cta,
  ctaPath: '/products',
  topRow: [
    {
      id: 'nasal-relief',
      title: copy.nasalRelief.title,
      subtitle: copy.nasalRelief.subtitle,
      description: copy.nasalRelief.description,
      backgroundClassName: 'bg-[#e2dbf5]',
      titleClassName: 'text-accent-purple',
      contentClassName: 'relative z-10 flex flex-col px-7 pt-[55px]',
      descriptionClassName: 'mt-[5px] max-w-[186px] text-body-sm font-normal text-black/50',
      image: {
        type: 'framed',
        src: solutionImages.nasalRelief,
        width: 354,
        height: 344,
        frameClassName:
          'pointer-events-none absolute bottom-[-10px] left-[186px] h-[344px] w-[354px] overflow-hidden',
        imageClassName: 'size-full max-w-none object-cover object-left-top',
      },
    },
    {
      id: 'cold-relief',
      title: copy.coldRelief.title,
      subtitle: copy.coldRelief.subtitle,
      description: copy.coldRelief.description,
      backgroundClassName: 'bg-[#cbdef8]',
      titleClassName: 'text-primary',
      contentClassName: 'relative z-10 flex flex-col px-7 pt-10',
      descriptionClassName: 'mt-[5px] max-w-[268px] text-body-sm font-normal text-black/50',
      image: {
        type: 'framed',
        src: solutionImages.coldRelief,
        width: 347,
        height: 347,
        frameClassName:
          'pointer-events-none absolute top-[174px] left-[35px] h-[250px] w-[220px] overflow-hidden',
        imageClassName:
          'absolute -top-[16.4%] -left-[32.27%] h-[138.8%] w-[157.73%] max-w-none',
      },
    },
    {
      id: 'kids-care',
      title: copy.kidsCare.title,
      subtitle: copy.kidsCare.subtitle,
      description: copy.kidsCare.description,
      backgroundClassName: 'bg-[#feebf1]',
      titleClassName: 'text-accent-pink',
      contentClassName: 'relative z-10 flex flex-col px-7 pt-10',
      descriptionClassName: 'mt-[5px] max-w-[342px] text-body-sm font-normal text-black/50',
      image: {
        type: 'direct',
        src: solutionImages.kidsCare,
        width: 347,
        height: 307,
        imageClassName:
          'pointer-events-none absolute bottom-4 left-1/2 h-[290px] w-auto max-w-[92%] -translate-x-1/2 object-contain object-bottom',
      },
    },
  ] satisfies SolutionCardConfig[],
  bottomRow: [
    {
      id: 'allergy-relief',
      title: copy.allergyRelief.title,
      subtitle: copy.allergyRelief.subtitle,
      description: copy.allergyRelief.description,
      backgroundClassName: 'bg-[#e1ecce]',
      titleClassName: 'text-accent-green',
      contentClassName: 'relative z-10 flex max-w-[226px] flex-col px-8 pt-11',
      descriptionClassName: 'mt-[5px] text-body-sm font-normal text-black/50',
      image: {
        type: 'framed',
        src: solutionImages.allergyRelief,
        width: 448,
        height: 449,
        frameClassName:
          'pointer-events-none absolute top-[54px] left-[234px] h-[379px] w-[376px] overflow-hidden',
        imageClassName:
          'absolute -top-[7.51%] -left-[8.93%] h-[118.43%] w-[119.24%] max-w-none',
      },
    },
    {
      id: 'daily-care',
      title: copy.dailyCare.title,
      subtitle: copy.dailyCare.subtitle,
      description: copy.dailyCare.description,
      backgroundClassName: 'bg-[#bad7f7]',
      titleClassName: 'text-primary',
      contentClassName: 'relative z-10 flex flex-col px-8 pt-8',
      descriptionClassName: 'mt-[5px] max-w-[233px] text-body-sm font-normal text-black/50',
      image: {
        type: 'direct',
        src: solutionImages.dailyCare,
        width: 306,
        height: 370,
        imageClassName:
          'pointer-events-none absolute right-8 bottom-4 h-auto w-auto max-w-none object-contain object-bottom',
      },
    },
  ] satisfies SolutionCardConfig[],
} as const
