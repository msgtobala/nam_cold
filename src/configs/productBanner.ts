import { namColdBanner } from '@resources/productBanner'
import { strings } from '@strings/strings'

export const productBannerConfig = {
  image: namColdBanner,
  width: 1440,
  height: 682,
  ariaLabel: strings.productBanner.ariaLabel,
  alt: strings.productBanner.alt,
  topGapClassName: 'mt-[120px]',
} as const
