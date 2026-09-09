import { trustedEverywhereImages } from '@resources/trustedEverywhere'
import { strings } from '@strings/strings'

const copy = strings.trustedEverywhere
const features = copy.features
const images = trustedEverywhereImages

export const trustedEverywhereConfig = {
  headingBefore: copy.headingBefore,
  headingAccent: copy.headingAccent,
  description: copy.description,
  partnersLabel: copy.partnersLabel,
  pharmacy: {
    src: images.pharmacy,
    alt: copy.pharmacyAlt,
    width: 784,
    height: 463,
  },
  features: [
    {
      id: 'genuine',
      icon: images.iconGenuine,
      titleLine1: features.genuine.titleLine1,
      titleLine2: features.genuine.titleLine2,
    },
    {
      id: 'prices',
      icon: images.iconPrices,
      titleLine1: features.prices.titleLine1,
      titleLine2: features.prices.titleLine2,
    },
    {
      id: 'delivery',
      icon: images.iconDelivery,
      titleLine1: features.delivery.titleLine1,
      titleLine2: features.delivery.titleLine2,
    },
  ],
  partners: [
    {
      id: '1mg',
      src: images.partners.oneMg,
      alt: 'TATA 1mg',
      width: 69,
      height: 20,
      className: 'h-5 w-auto',
    },
    {
      id: 'pharmeasy',
      src: images.partners.pharmeasy,
      alt: 'PharmEasy',
      width: 83,
      height: 23,
      className: 'h-[23px] w-auto',
    },
    {
      id: 'apollo',
      src: images.partners.apollo,
      alt: 'Apollo Pharmacy',
      width: 57,
      height: 48,
      className: 'h-12 w-auto',
    },
  ],
} as const
