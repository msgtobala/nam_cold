import { strings } from '@strings/strings'

const copy = strings.reliefScience
const steps = copy.steps

export const reliefScienceConfig = {
  eyebrow: copy.eyebrow,
  heading: copy.heading,
  description: copy.description,
  learnMore: copy.learnMore,
  learnMoreHref: '/products',
  steps: [
    {
      id: 'symptom-identification',
      number: steps.symptomIdentification.number,
      title: steps.symptomIdentification.title,
      description: steps.symptomIdentification.description,
    },
    {
      id: 'targeted-formulation',
      number: steps.targetedFormulation.number,
      title: steps.targetedFormulation.title,
      description: steps.targetedFormulation.description,
    },
    {
      id: 'validated-relief',
      number: steps.validatedRelief.number,
      title: steps.validatedRelief.title,
      description: steps.validatedRelief.description,
    },
  ],
} as const
