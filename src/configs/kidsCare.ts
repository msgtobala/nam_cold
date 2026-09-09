import { kidsCareImages } from '@resources/kidsCare'
import { strings } from '@strings/strings'

const copy = strings.kidsCare

export const kidsCareConfig = {
  label: copy.label,
  heading: copy.heading,
  description: copy.description,
  cta: copy.cta,
  ctaHref: '/products',
  stats: [
    {
      id: 'from-birth',
      value: copy.stats.fromBirth.value,
      label: copy.stats.fromBirth.label,
    },
    {
      id: 'gentle',
      value: copy.stats.gentle.value,
      label: copy.stats.gentle.label,
    },
  ],
  products: {
    src: kidsCareImages.products,
    alt: copy.productsAlt,
    width: 520,
    height: 140,
  },
  family: {
    src: kidsCareImages.family,
    alt: copy.familyAlt,
    width: 608,
    height: 560,
  },
} as const
