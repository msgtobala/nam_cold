import { productScienceImages } from '@resources/productScience'
import { strings } from '@strings/strings'

const copy = strings.productScience

export type ProductScienceStepTone = 'blue' | 'green'

export type ProductScienceStepConfig = {
  id: string
  number: string
  title: string
  description: string
  tone: ProductScienceStepTone
}

export const productScienceConfig = {
  eyebrow: copy.eyebrow,
  heading: copy.heading,
  description: copy.description,
  diagram: {
    src: productScienceImages.diagram,
    alt: copy.diagramAlt,
    width: 1152,
    height: 896,
  },
  steps: [
    {
      id: 'congestion-forms',
      number: copy.steps.congestionForms.number,
      title: copy.steps.congestionForms.title,
      description: copy.steps.congestionForms.description,
      tone: 'blue',
    },
    {
      id: 'spray-reaches-source',
      number: copy.steps.sprayReachesSource.number,
      title: copy.steps.sprayReachesSource.title,
      description: copy.steps.sprayReachesSource.description,
      tone: 'blue',
    },
    {
      id: 'vessels-constrict',
      number: copy.steps.vesselsConstrict.number,
      title: copy.steps.vesselsConstrict.title,
      description: copy.steps.vesselsConstrict.description,
      tone: 'green',
    },
    {
      id: 'clear-breathing',
      number: copy.steps.clearBreathing.number,
      title: copy.steps.clearBreathing.title,
      description: copy.steps.clearBreathing.description,
      tone: 'green',
    },
  ] satisfies ProductScienceStepConfig[],
} as const
