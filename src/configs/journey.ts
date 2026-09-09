import { journeyTimeline } from '@resources/journey'
import { strings } from '@strings/strings'

const steps = strings.journey.steps

export type JourneyStepConfig = {
  id: string
  title: string
  description: string
}

export const journeyConfig = {
  badge: strings.journey.badge,
  titleBefore: strings.journey.titleBefore,
  titleAccent: strings.journey.titleAccent,
  titleAfter: strings.journey.titleAfter,
  description: strings.journey.description,
  timelineImage: journeyTimeline,
  timelineAlt: strings.journey.timelineAlt,
  timelineWidth: 2141,
  timelineHeight: 734,
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
  ] satisfies JourneyStepConfig[],
} as const
