import { statHeroConfig } from '@configs/statHero'

export type StatHeroProps = {
  className?: string
}

/** Figma Products stat hero (1:1661) */
export default function StatHero({ className = '' }: StatHeroProps) {
  const { ariaLabel, eyebrow, value, watermark, description, glow } =
    statHeroConfig

  return (
    <section
      className={[
        'relative w-full overflow-hidden bg-gradient-to-r from-[#0a1838] to-primary-bright',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
    >
      <div
        className="pointer-events-none absolute top-[60px] left-1/2 h-[260px] w-[600px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="absolute inset-[-30.77%_-13.33%]">
          <img
            src={glow}
            alt=""
            width={760}
            height={420}
            className="block size-full max-w-none"
            decoding="async"
          />
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-page flex-col items-center gap-3 px-4 py-16 text-center sm:gap-4 sm:px-8 sm:py-20 lg:px-20 lg:py-20">
        <p className="text-[12px] font-bold tracking-[1.44px] text-[#7dd3fc]">
          {eyebrow}
        </p>

        {/*
          Watermark lives in the same box as "25 Sec" and stays
          slightly narrower so it sits behind the value without spanning it fully.
        */}
        <div className="relative inline-block text-[3.5rem] leading-none sm:text-[5rem] lg:text-[100px]">
          <span
            className="pointer-events-none absolute top-1/2 left-1/2 select-none whitespace-nowrap text-[1.8em] font-extrabold tracking-[-0.06em] text-white opacity-[0.08]"
            style={{ transform: 'translate(-50%, -50%) scaleX(1.15)' }}
            aria-hidden="true"
          >
            {watermark}
          </span>
          <p className="relative z-10 whitespace-nowrap font-extrabold tracking-[-0.05em] text-white lg:tracking-[-5px]">
            {value}
          </p>
        </div>

        <p className="text-body-sm font-normal text-[#93c5fd] sm:text-base">
          {description}
        </p>
      </div>
    </section>
  )
}
