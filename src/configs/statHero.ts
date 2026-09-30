import { statHeroImages } from '@resources/statHero'
import { strings } from '@strings/strings'

const copy = strings.statHero

export const statHeroConfig = {
  ariaLabel: copy.ariaLabel,
  alt: copy.alt,
  banner: {
    src: statHeroImages.banner,
    width: 1920,
    height: 742,
  },
} as const
