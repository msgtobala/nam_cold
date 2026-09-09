import { aboutHeaderImages } from '@resources/aboutHeader'
import { strings } from '@strings/strings'

const copy = strings.aboutHeader

export const aboutHeaderConfig = {
  ariaLabel: copy.ariaLabel,
  eyebrow: copy.eyebrow,
  heading: copy.heading,
  description: copy.description,
  hero: {
    src: aboutHeaderImages.hero,
    alt: copy.heroAlt,
    width: 1248,
    height: 832,
  },
} as const
