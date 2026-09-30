import { aboutUsHeroImages } from '@resources/aboutUsHero'
import { strings } from '@strings/strings'

const copy = strings.aboutUsHero

export const aboutUsHeroConfig = {
  ariaLabel: copy.ariaLabel,
  eyebrow: copy.eyebrow,
  heading: copy.heading,
  description: copy.description,
  primaryCta: copy.primaryCta,
  primaryCtaHref: '/products',
  secondaryCta: copy.secondaryCta,
  secondaryCtaHref: '#our-story',
  hero: {
    src: aboutUsHeroImages.hero,
    alt: copy.heroAlt,
    width: 758,
    height: 560,
  },
} as const
