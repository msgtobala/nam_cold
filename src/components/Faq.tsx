import { useState } from 'react'
import { faqConfig } from '@configs/faq'

export type FaqProps = {
  className?: string
}

/** Figma Products FAQ (177:1806) */
export default function Faq({ className = '' }: FaqProps) {
  const { eyebrow, headingAccent, headingRest, items } = faqConfig
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section
      className={['w-full bg-[#f5f8fd]', className].filter(Boolean).join(' ')}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <header className="flex w-full max-w-[600px] flex-col gap-3">
          <span className="text-body-sm font-medium tracking-[1.4px] text-primary-bright">
            {eyebrow}
          </span>
          <h2
            id="faq-heading"
            className="max-w-[398px] text-[1.75rem] font-normal leading-[1.04] tracking-[-0.03em] text-ink sm:text-lead lg:text-heading lg:tracking-[-1.2px]"
          >
            <span className="text-primary">{headingAccent}</span>
            {headingRest}
          </h2>
        </header>

        <ul className="flex w-full flex-col">
          {items.map((item) => {
            const isOpen = openId === item.id
            const panelId = `faq-panel-${item.id}`
            const buttonId = `faq-button-${item.id}`

            return (
              <li key={item.id} className="border-b border-[#e0e8ff]">
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span className="text-card-title font-normal text-[#0a1838]">
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 text-[22px] font-light leading-none text-primary-bright"
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pb-6"
                  >
                    <p className="max-w-[720px] pr-10 text-body-sm font-normal leading-[1.65] text-[#5a6476] sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
