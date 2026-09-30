import { productsHeroImages } from '@resources/productsHero'
import { strings } from '@strings/strings'

const copy = strings.productsHero

export const productsHeroConfig = {
  badge: copy.badge,
  heading: copy.heading,
  ariaLabel: copy.ariaLabel,
  banner: {
    src: productsHeroImages.banner,
    alt: copy.bannerAlt,
    width: 1774,
    height: 886,
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
  ],
} as const
