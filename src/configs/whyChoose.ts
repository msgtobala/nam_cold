import { whyChooseIcons } from '@resources/whyChoose'
import { strings } from '@strings/strings'

const copy = strings.whyChoose
const cards = copy.cards

export type WhyChooseCardConfig = {
  id: string
  title: string
  description: string
  icon: string
}

export const whyChooseConfig = {
  ariaLabel: copy.ariaLabel,
  eyebrow: copy.eyebrow,
  heading: copy.heading,
  description: copy.description,
  cards: [
    {
      id: 'fast-relief',
      title: cards.fastRelief.title,
      description: cards.fastRelief.description,
      icon: whyChooseIcons.audioLines,
    },
    {
      id: 'trusted-formulations',
      title: cards.trustedFormulations.title,
      description: cards.trustedFormulations.description,
      icon: whyChooseIcons.shieldCheck,
    },
    {
      id: 'family-care',
      title: cards.familyCare.title,
      description: cards.familyCare.description,
      icon: whyChooseIcons.heartHandshake,
    },
    {
      id: 'everyday-comfort',
      title: cards.everydayComfort.title,
      description: cards.everydayComfort.description,
      icon: whyChooseIcons.cloud,
    },
  ] satisfies WhyChooseCardConfig[],
} as const
