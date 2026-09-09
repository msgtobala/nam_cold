import { productJourneyImages } from '@resources/productJourney'
import { strings } from '@strings/strings'

const steps = strings.journey.steps

export const productJourneyConfig = {
  badge: strings.journey.badge,
  titleBefore: strings.journey.titleBefore,
  titleAccent: strings.journey.titleAccent,
  titleAfter: strings.journey.titleAfter,
  description: strings.journey.description,
  timelineImage: productJourneyImages.timeline,
  timelineAlt: strings.journey.timelineAlt,
  timelineWidth: 1440,
  timelineHeight: 255,
  headingId: 'product-journey-heading',
  steps: [
    {
      id: 'symptoms-start',
      title: steps.symptomsStart.title,
      description: steps.symptomsStart.description,
    },
    {
      id: 'congestion-builds',
      title: steps.congestionBuilds.title,
      description: steps.congestionBuilds.description,
    },
    {
      id: 'nam-cold-works',
      title: steps.namColdWorks.title,
      description: steps.namColdWorks.description,
    },
    {
      id: 'feel-better',
      title: steps.feelBetter.title,
      description: steps.feelBetter.description,
    },
  ],
} as const
