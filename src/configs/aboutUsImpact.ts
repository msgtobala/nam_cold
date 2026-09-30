import { aboutUsImpactImages } from '@resources/aboutUsImpact'
import { strings } from '@strings/strings'

const copy = strings.aboutUsImpact
const stats = copy.stats

export type AboutUsImpactStat = {
  id: string
  label: string
  value: string
  description: string
  backgroundClassName: string
  valueClassName: string
}

export const aboutUsImpactConfig = {
  eyebrow: copy.eyebrow,
  heading: copy.heading,
  wellbeingEyebrow: copy.wellbeingEyebrow,
  family: {
    src: aboutUsImpactImages.family,
    alt: copy.familyAlt,
    badge: copy.familyBadge,
    width: 932,
    height: 400,
  },
  products: {
    src: aboutUsImpactImages.products,
    alt: copy.productsAlt,
    width: 400,
    height: 232,
  },
  range: {
    eyebrow: copy.rangeEyebrow,
    title: copy.rangeTitle,
    description: copy.rangeDescription,
  },
  stats: [
    {
      id: 'field-force',
      label: stats.fieldForce.label,
      value: stats.fieldForce.value,
      description: stats.fieldForce.description,
      backgroundClassName: 'bg-[#e2dbf5]',
      valueClassName: 'text-accent-purple',
    },
    {
      id: 'founded',
      label: stats.founded.label,
      value: stats.founded.value,
      description: stats.founded.description,
      backgroundClassName: 'bg-[#cbdef8]',
      valueClassName: 'text-primary',
    },
    {
      id: 'countries',
      label: stats.countries.label,
      value: stats.countries.value,
      description: stats.countries.description,
      backgroundClassName: 'bg-[#e1ecce]',
      valueClassName: 'text-accent-green',
    },
    {
      id: 'formulations',
      label: stats.formulations.label,
      value: stats.formulations.value,
      description: stats.formulations.description,
      backgroundClassName: 'bg-[#feebf1]',
      valueClassName: 'text-accent-pink',
    },
  ] satisfies AboutUsImpactStat[],
} as const
