import { useState } from 'react'
import Button from '@components/Button'
import Container from '@components/Container'
import { symptomIcons } from '@resources/symptoms'

const symptoms = [
  {
    id: 'common-cold',
    title: 'Common Cold',
    subtitle: 'Sardi / Jukham',
    icon: symptomIcons.commonCold,
  },
  {
    id: 'blocked-nose',
    title: 'Blocked Nose',
    subtitle: 'Band Naak',
    icon: symptomIcons.blockedNose,
  },
  {
    id: 'night-congestion',
    title: 'Night Congestion',
    subtitle: 'Raat ki band naak',
    icon: symptomIcons.nightCongestion,
  },
  {
    id: 'allergies',
    title: 'Allergies',
    subtitle: 'Allergic Symptoms',
    icon: symptomIcons.allergies,
  },
  {
    id: 'kids-care',
    title: 'Kids Care',
    subtitle: 'Bachhon ki dekhbhal',
    icon: symptomIcons.kidsCare,
  },
  {
    id: 'flu-symptoms',
    title: 'Flu Symptoms',
    subtitle: 'Bukhar aur body ache',
    icon: symptomIcons.fluSymptoms,
  },
] as const

export type SymptomId = (typeof symptoms)[number]['id']

export type SymptomsProps = {
  className?: string
  onFindSolution?: (selected: SymptomId[]) => void
}

export default function Symptoms({
  className = '',
  onFindSolution,
}: SymptomsProps) {
  const [selected, setSelected] = useState<SymptomId[]>([])

  function toggleSymptom(id: SymptomId) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  return (
    <section
      className={[
        'w-full bg-[linear-gradient(-28deg,#F5F9FF_28%,#FFFFFF_100%)] pt-[100px] pb-20',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="symptoms-heading"
    >
      <Container className="flex flex-col items-center gap-11">
        <header className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
          <span className="rounded-badge border border-border-primary-soft bg-primary-tint px-4 py-1.5 text-nav font-medium text-primary">
            Interactive Diagnostics
          </span>
          <h2
            id="symptoms-heading"
            className="text-heading font-normal leading-[1.04] text-ink"
          >
            How are you feeling today?
          </h2>
          <p className="max-w-[800px] text-base font-normal text-[#4b5563]">
            Select your symptoms below to discover the target clinical NAM COLD
            solution tailored for your recovery.
          </p>
        </header>

        <ul className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {symptoms.map((symptom) => {
            const isSelected = selected.includes(symptom.id)

            return (
              <li key={symptom.id} className="flex justify-center">
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={[
                    'flex h-[247px] w-full max-w-[199px] cursor-pointer flex-col items-center rounded-card border bg-white px-3 pt-8 transition-[border-color,box-shadow,background-color] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                    isSelected
                      ? 'border-primary bg-primary-tint shadow-card'
                      : 'border-border-primary hover:border-primary',
                  ].join(' ')}
                >
                  <span className="flex h-[110px] w-[100px] items-center justify-center overflow-hidden">
                    <img
                      src={symptom.icon}
                      alt=""
                      width={100}
                      height={110}
                      className="max-h-full max-w-full object-contain"
                      decoding="async"
                    />
                  </span>
                  <span className="mt-auto mb-8 flex w-full max-w-[140px] flex-col items-center text-center leading-normal">
                    <span className="text-[16px] font-semibold text-primary">
                      {symptom.title}
                    </span>
                    <span className="text-body-sm font-normal text-[#4b5563]">
                      {symptom.subtitle}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <Button
          type="button"
          variant="primary"
          onClick={() => onFindSolution?.(selected)}
        >
          Find My Solution
        </Button>
      </Container>
    </section>
  )
}
