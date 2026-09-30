import { aboutUsScienceImages } from '@resources/aboutUsScience'
import { strings } from '@strings/strings'

const copy = strings.aboutUsScience
const stats = copy.stats

export type AboutUsScienceStat = {
  id: string
  label: string
  value: string
  description: string
}

export const aboutUsScienceConfig = {
  index: copy.index,
  label: copy.label,
  heading: copy.heading,
  description: copy.description,
  image: {
    src: aboutUsScienceImages.lab,
    alt: copy.imageAlt,
    width: 1344,
    height: 520,
  },
  stats: [
    {
      id: 'formulations',
      label: stats.formulations.label,
      value: stats.formulations.value,
      description: stats.formulations.description,
    },
    {
      id: 'since',
      label: stats.since.label,
      value: stats.since.value,
      description: stats.since.description,
    },
    {
      id: 'reach',
      label: stats.reach.label,
      value: stats.reach.value,
      description: stats.reach.description,
    },
  ] satisfies AboutUsScienceStat[],
} as const
