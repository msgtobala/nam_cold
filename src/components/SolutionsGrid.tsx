import { useNavigate } from 'react-router-dom'
import Button from '@components/Button'
import Container from '@components/Container'
import { solutionImages } from '@resources/solutions'

type SolutionCard = {
  id: string
  title: string
  subtitle: string
  description: string
  titleClassName: string
  backgroundClassName: string
  image?: {
    src: string
    className: string
    width: number
    height: number
  }
  className?: string
}

const solutions: SolutionCard[] = [
  {
    id: 'nasal-relief',
    title: 'Nasal Relief',
    subtitle: 'Fast relief for blocked nose',
    description:
      'Aerosolized micro-mists that target inflamed nasal membranes instantly.',
    titleClassName: 'text-accent-purple',
    backgroundClassName: 'bg-[#e2dbf5]',
    className: 'lg:col-span-5',
    image: {
      src: solutionImages.nasalRelief,
      width: 369,
      height: 345,
      className:
        'pointer-events-none absolute right-[-12px] bottom-[-8px] h-[345px] w-[369px] max-w-none object-contain',
    },
  },
  {
    id: 'cold-relief',
    title: 'Cold Relief',
    subtitle: 'Effective relief from cold & flu',
    description:
      'Complete relief from running nose, scratchy throat, and minor body pain.',
    titleClassName: 'text-primary',
    backgroundClassName: 'bg-[#cbdef8]',
    className: 'lg:col-span-3',
    image: {
      src: solutionImages.coldRelief,
      width: 220,
      height: 250,
      className:
        'pointer-events-none absolute bottom-0 left-1/2 h-[250px] w-[220px] -translate-x-1/2 object-contain',
    },
  },
  {
    id: 'kids-care',
    title: 'Kids Care',
    subtitle: 'Gentle and safe care for kids',
    description:
      'Child-friendly dosage formulas curated carefully to soothe little lungs safely.',
    titleClassName: 'text-accent-pink',
    backgroundClassName: 'bg-[#feebf1]',
    className: 'lg:col-span-4',
  },
  {
    id: 'allergy-relief',
    title: 'Allergy Relief',
    subtitle: 'Freedom from allergic symptoms',
    description:
      'Non-drowsy blockades against pollen, pet dander, and environmental dust.',
    titleClassName: 'text-accent-green',
    backgroundClassName: 'bg-[#e1ecce]',
    className: 'lg:col-span-6',
    image: {
      src: solutionImages.allergyRelief,
      width: 376,
      height: 379,
      className:
        'pointer-events-none absolute right-0 bottom-[-40px] h-[379px] w-[376px] max-w-none object-contain',
    },
  },
  {
    id: 'daily-care',
    title: 'Daily Care',
    subtitle: 'Daily protection for better breathing',
    description:
      'Isotonic saline washes designed to cleanse and humidify nasal passages daily.',
    titleClassName: 'text-primary',
    backgroundClassName: 'bg-accent-sky',
    className: 'lg:col-span-6',
  },
]

export type SolutionsGridProps = {
  className?: string
}

export default function SolutionsGrid({ className = '' }: SolutionsGridProps) {
  const navigate = useNavigate()

  return (
    <section
      className={['w-full mt-[100px]', className].filter(Boolean).join(' ')}
      aria-labelledby="solutions-heading"
    >
      <Container className="flex flex-col items-center gap-12 pb-10">
        <header className="flex w-full max-w-[830px] flex-col items-center gap-3 text-center">
          <span className="px-4 py-1.5 text-body-sm font-normal tracking-[0.12em] text-primary">
            Complete Care. Complete Range.
          </span>
          <div className="flex flex-col items-center gap-2">
            <h2
              id="solutions-heading"
              className="text-heading font-normal leading-[1.04] text-ink"
            >
              One Brand.{' '}
              <span className="text-primary">Multiple Solutions.</span>
            </h2>
            <p className="max-w-[830px] text-lg leading-[1.4] text-muted">
              Explore our targeted pharmaceutical solutions built for every
              stage of respiratory distress.
            </p>
          </div>
        </header>

        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {solutions.map((solution) => (
            <li
              key={solution.id}
              className={[
                'relative h-[440px] overflow-hidden rounded-card',
                solution.backgroundClassName,
                solution.className ?? '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="relative z-10 flex max-w-[342px] flex-col gap-1 px-7 pt-10">
                <h3
                  className={[
                    'text-section font-normal leading-normal',
                    solution.titleClassName,
                  ].join(' ')}
                >
                  {solution.title}
                </h3>
                <p className="text-body-sm font-normal text-[#0d0d0c]">
                  {solution.subtitle}
                </p>
                <p className="mt-1 max-w-[268px] text-body-sm font-normal text-black/50">
                  {solution.description}
                </p>
              </div>

              {solution.image ? (
                <img
                  src={solution.image.src}
                  alt=""
                  width={solution.image.width}
                  height={solution.image.height}
                  className={solution.image.className}
                  decoding="async"
                />
              ) : null}
            </li>
          ))}
        </ul>

        <Button type="button" onClick={() => navigate('/products')}>
          View All Products
        </Button>
      </Container>
    </section>
  )
}
