import { productsHeroImages } from '@resources/productsHero'
import { strings } from '@strings/strings'

const copy = strings.productsHero

export const productsHeroConfig = {
  badge: copy.badge,
  headingLine1: copy.headingLine1,
  headingLine2: copy.headingLine2,
  description: copy.description,
  ariaLabel: copy.ariaLabel,
  background: {
    src: productsHeroImages.background,
    width: 1344,
    height: 768,
  },
  product: {
    src: productsHeroImages.product,
    alt: copy.productAlt,
    width: 1024,
    height: 1024,
  },
  stats: [
    {
      id: 'onset',
      value: copy.stats.onset.value,
      label: copy.stats.onset.label,
    },
    {
      id: 'duration',
      value: copy.stats.duration.value,
      label: copy.stats.duration.label,
    },
    {
      id: 'dose',
      value: copy.stats.dose.value,
      label: copy.stats.dose.label,
    },
  ],
} as const
