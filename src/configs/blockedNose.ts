import { blockedNoseImages } from '@resources/blockedNose'
import { strings } from '@strings/strings'

const copy = strings.blockedNose

export const blockedNoseConfig = {
  label: copy.label,
  heading: copy.heading,
  description: copy.description,
  cta: copy.cta,
  ctaHref: '/products',
  background: {
    src: blockedNoseImages.background,
    alt: copy.backgroundAlt,
    width: 1440,
    height: 640,
  },
  benefits: [
    {
      id: 'fast-acting',
      title: copy.benefits.fastActing.title,
      description: copy.benefits.fastActing.description,
    },
    {
      id: 'clears-congestion',
      title: copy.benefits.clearsCongestion.title,
      description: copy.benefits.clearsCongestion.description,
    },
    {
      id: 'long-lasting',
      title: copy.benefits.longLasting.title,
      description: copy.benefits.longLasting.description,
    },
  ],
} as const
