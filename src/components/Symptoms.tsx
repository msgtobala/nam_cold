import { useState } from 'react'
import Button from '@components/Button'
import Container from '@components/Container'
import { symptomsConfig, type SymptomId } from '@configs/symptoms'

export type { SymptomId }

export type SymptomsProps = {
  className?: string
  onFindSolution?: (selected: SymptomId[]) => void
}

export default function Symptoms({
  className = '',
  onFindSolution,
}: SymptomsProps) {
  const [selected, setSelected] = useState<SymptomId[]>([])
  const { badge, heading, description, cta, items } = symptomsConfig

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
        'w-full bg-[linear-gradient(-28deg,#F5F9FF_28%,#FFFFFF_100%)] pt-[100px] pb-[100px]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="symptoms-heading"
    >
      <Container className="flex flex-col items-center gap-11">
        <header className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
          <span className="rounded-badge border border-border-primary-soft bg-primary-tint px-4 py-1.5 text-nav font-medium text-primary">
            {badge}
          </span>
          <h2
            id="symptoms-heading"
            className="text-heading font-normal leading-[1.04] text-ink"
          >
            {heading}
          </h2>
          <p className="max-w-[800px] text-base font-normal text-[#4b5563]">
            {description}
          </p>
        </header>

        <ul className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {items.map((symptom) => {
            const isSelected = selected.includes(symptom.id)

            return (
              <li key={symptom.id} className="flex justify-center">
                <button
                  type="button"
                  aria-pressed={isSelected}
                  data-active={isSelected || undefined}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={[
                    'relative flex h-[247px] w-full max-w-[199px] cursor-pointer flex-col items-center rounded-card border-2 bg-white px-3 pt-8 transition-[border-color,box-shadow,background-color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]',
                    isSelected
                      ? 'border-primary bg-[#eef3ff] shadow-[0_8px_24px_rgba(31,79,191,0.18)]'
                      : 'border-[rgba(31,79,191,0.53)] hover:border-primary hover:bg-primary-tint',
                  ].join(' ')}
                >
                  {isSelected ? (
                    <span
                      className="absolute top-3 right-3 flex size-6 items-center justify-center rounded-full bg-primary text-white"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className="size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 8.5 6.5 11.5 12.5 4.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ) : null}
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
          {cta}
        </Button>
      </Container>
    </section>
  )
}
