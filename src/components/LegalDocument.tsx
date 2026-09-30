import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import Container from '@components/Container'

type LegalSection = {
  heading: string
  paragraphs: readonly string[]
  bullets: readonly string[]
}

export type LegalDocumentContent = {
  eyebrow: string
  title: string
  updated: string
  effective: string
  intro: readonly string[]
  sections: readonly LegalSection[]
}

export type LegalDocumentProps = {
  content: LegalDocumentContent
  linkPrivacyPolicy?: boolean
}

function renderText(text: string, linkPrivacyPolicy: boolean): ReactNode[] {
  const pattern = linkPrivacyPolicy
    ? /(hello@namcold\.com|Privacy Policy)/g
    : /(hello@namcold\.com)/g
  const parts = text.split(pattern)

  return parts.map((part, index) => {
    if (part === 'hello@namcold.com') {
      return (
        <a
          key={index}
          href="mailto:hello@namcold.com"
          className="text-primary underline-offset-2 hover:underline"
        >
          {part}
        </a>
      )
    }

    if (part === 'Privacy Policy' && linkPrivacyPolicy) {
      return (
        <Link
          key={index}
          to="/privacy-policy"
          className="text-primary underline-offset-2 hover:underline"
        >
          {part}
        </Link>
      )
    }

    return part
  })
}

export default function LegalDocument({
  content,
  linkPrivacyPolicy = false,
}: LegalDocumentProps) {
  return (
    <article className="w-full bg-white">
      <Container className="flex flex-col gap-10 py-14 sm:py-16 lg:py-[96px]">
        <header className="flex max-w-[760px] flex-col gap-4">
          <p className="text-body-sm font-semibold uppercase tracking-[1.96px] text-primary">
            {content.eyebrow}
          </p>
          <h1 className="text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading">
            {content.title}
          </h1>
          <p className="text-body-sm text-muted-alt">
            {content.updated}
            <span className="px-2" aria-hidden>
              |
            </span>
            {content.effective}
          </p>
        </header>

        <div className="flex max-w-[760px] flex-col gap-8 text-base leading-[1.7] text-muted-alt">
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{renderText(paragraph, linkPrivacyPolicy)}</p>
          ))}

          {content.sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-4">
              <h2 className="text-xl font-medium leading-[1.3] text-ink">
                {section.heading}
              </h2>
              {section.paragraphs[0] ? (
                <p>{renderText(section.paragraphs[0], linkPrivacyPolicy)}</p>
              ) : null}
              {section.bullets.length > 0 ? (
                <ul className="list-disc space-y-2 pl-5">
                  {section.bullets.map((item) => (
                    <li key={item}>{renderText(item, linkPrivacyPolicy)}</li>
                  ))}
                </ul>
              ) : null}
              {section.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>
                  {renderText(paragraph, linkPrivacyPolicy)}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </article>
  )
}
