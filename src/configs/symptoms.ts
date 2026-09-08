import { symptomIcons } from '@resources/symptoms'
import { strings } from '@strings/strings'

const items = strings.symptoms.items

export const symptomsConfig = {
  badge: strings.symptoms.badge,
  heading: strings.symptoms.heading,
  description: strings.symptoms.description,
  cta: strings.symptoms.cta,
  items: [
    {
      id: 'common-cold',
      title: items.commonCold.title,
      subtitle: items.commonCold.subtitle,
      icon: symptomIcons.commonCold,
    },
    {
      id: 'blocked-nose',
      title: items.blockedNose.title,
      subtitle: items.blockedNose.subtitle,
      icon: symptomIcons.blockedNose,
    },
    {
      id: 'night-congestion',
      title: items.nightCongestion.title,
      subtitle: items.nightCongestion.subtitle,
      icon: symptomIcons.nightCongestion,
    },
    {
      id: 'allergies',
      title: items.allergies.title,
      subtitle: items.allergies.subtitle,
      icon: symptomIcons.allergies,
    },
    {
      id: 'kids-care',
      title: items.kidsCare.title,
      subtitle: items.kidsCare.subtitle,
      icon: symptomIcons.kidsCare,
    },
    {
      id: 'flu-symptoms',
      title: items.fluSymptoms.title,
      subtitle: items.fluSymptoms.subtitle,
      icon: symptomIcons.fluSymptoms,
    },
  ],
} as const

export type SymptomId = (typeof symptomsConfig.items)[number]['id']
