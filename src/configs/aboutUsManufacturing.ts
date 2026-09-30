import { aboutUsManufacturingImages } from '@resources/aboutUsManufacturing'
import { strings } from '@strings/strings'

const copy = strings.aboutUsManufacturing
const items = copy.items

export type AboutUsManufacturingItem = {
  id: string
  title: string
  description: string
}

export const aboutUsManufacturingConfig = {
  heading: copy.heading,
  description: copy.description,
  image: {
    src: aboutUsManufacturingImages.facility,
    alt: copy.imageAlt,
    width: 1344,
    height: 480,
  },
  items: [
    {
      id: 'gmp',
      title: items.gmp.title,
      description: items.gmp.description,
    },
    {
      id: 'quality',
      title: items.quality.title,
      description: items.quality.description,
    },
    {
      id: 'field-force',
      title: items.fieldForce.title,
      description: items.fieldForce.description,
    },
  ] satisfies AboutUsManufacturingItem[],
} as const
