import { aboutUsPortfolioImages } from '@resources/aboutUsPortfolio'
import { strings } from '@strings/strings'

const copy = strings.aboutUsPortfolio
const items = copy.items

export type AboutUsPortfolioItem = {
  id: string
  number: string
  title: string
  description: string
}

export const aboutUsPortfolioConfig = {
  index: copy.index,
  label: copy.label,
  heading: copy.heading,
  description: copy.description,
  image: {
    src: aboutUsPortfolioImages.family,
    alt: copy.imageAlt,
    width: 1344,
    height: 480,
  },
  items: [
    {
      id: 'nasal-relief',
      number: items.nasalRelief.number,
      title: items.nasalRelief.title,
      description: items.nasalRelief.description,
    },
    {
      id: 'cold-relief',
      number: items.coldRelief.number,
      title: items.coldRelief.title,
      description: items.coldRelief.description,
    },
    {
      id: 'allergy-relief',
      number: items.allergyRelief.number,
      title: items.allergyRelief.title,
      description: items.allergyRelief.description,
    },
    {
      id: 'kids-care',
      number: items.kidsCare.number,
      title: items.kidsCare.title,
      description: items.kidsCare.description,
    },
    {
      id: 'daily-care',
      number: items.dailyCare.number,
      title: items.dailyCare.title,
      description: items.dailyCare.description,
    },
  ] satisfies AboutUsPortfolioItem[],
} as const
