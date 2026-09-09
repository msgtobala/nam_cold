import { nightCongestionImages } from '@resources/nightCongestion'
import { strings } from '@strings/strings'

const copy = strings.nightCongestion

export const nightCongestionConfig = {
  label: copy.label,
  heading: copy.heading,
  description: copy.description,
  cta: copy.cta,
  ctaHref: '/products',
  recommendation: {
    badge: copy.recommendation.badge,
    title: copy.recommendation.title,
    subtitle: copy.recommendation.subtitle,
    product: {
      src: nightCongestionImages.product,
      alt: copy.recommendation.productAlt,
      width: 80,
      height: 100,
    },
  },
  sleep: {
    src: nightCongestionImages.sleepPhotography,
    alt: copy.sleepAlt,
    width: 608,
    height: 600,
  },
  moonGlow: nightCongestionImages.moonGlow,
} as const
