import { statHeroImages } from '@resources/statHero'
import { strings } from '@strings/strings'

const copy = strings.statHero

export const statHeroConfig = {
  ariaLabel: copy.ariaLabel,
  eyebrow: copy.eyebrow,
  value: copy.value,
  watermark: copy.watermark,
  description: copy.description,
  glow: statHeroImages.glow,
} as const
