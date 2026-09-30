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
      id: 'newborn-care',
      title: copy.stats.newbornCare.title,
      description: copy.stats.newbornCare.description,
    },
    {
      id: 'gentle',
      title: copy.stats.gentle.title,
      description: copy.stats.gentle.description,
    },
  ],
  products: {
    src: kidsCareImages.products,
    alt: copy.productsAlt,
    width: 1536,
    height: 672,
  },
  family: {
    src: kidsCareImages.family,
    alt: copy.familyAlt,
    width: 1184,
    height: 864,
  },
} as const
