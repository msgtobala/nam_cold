import { useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export type PageMotionProps = {
  children: ReactNode
}

/** One fade-in system for every page. Heroes play on load; other sections play as they enter. */
export default function PageMotion({ children }: PageMotionProps) {
  const root = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useGSAP(
    () => {
      window.scrollTo(0, 0)

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce || !root.current) return

      const scope = root.current

      scope.querySelectorAll<HTMLElement>('[data-reveal="load"]').forEach((hero) => {
        const media = hero.querySelectorAll('[data-reveal-media]')
        const items = hero.querySelectorAll('[data-reveal-item]')
        const timeline = gsap.timeline()

        if (media.length) {
          timeline.from(media, {
            autoAlpha: 0,
            scale: 1.03,
            duration: 0.9,
            ease: 'power2.out',
          })
        }

        if (items.length) {
          timeline.from(
            items,
            {
              y: 24,
              autoAlpha: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: 'power2.out',
            },
            media.length ? '-=0.45' : 0,
          )
        }

        if (!media.length && !items.length) {
          timeline.from(hero, { autoAlpha: 0, duration: 0.7, ease: 'power2.out' })
        }
      })

      scope.querySelectorAll<HTMLElement>('[data-reveal]').forEach((section) => {
        if (section.getAttribute('data-reveal') === 'load') return

        const items = section.querySelectorAll('[data-reveal-item]')
        gsap.from(items.length ? items : section, {
          y: 24,
          autoAlpha: 0,
          duration: 0.7,
          stagger: items.length ? 0.08 : 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        })
      })

      ScrollTrigger.refresh(true)
    },
    { scope: root, dependencies: [pathname], revertOnUpdate: true },
  )

  return <div ref={root}>{children}</div>
}
