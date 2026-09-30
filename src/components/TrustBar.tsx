import { trustBarConfig } from '@configs/trustBar'

export type TrustBarProps = {
  className?: string
}

/** Figma Products trust bar (177:1607) */
export default function TrustBar({ className = '' }: TrustBarProps) {
  const { ariaLabel, deliveryNote, items } = trustBarConfig

  return (
    <section
      className={[
        'w-full border-b border-[#e0e8ff] bg-primary',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-3 px-4 py-[18px] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-2">
              <span className="relative size-3.5 shrink-0 overflow-clip">
                <img
                  src={item.icon}
                  alt=""
                  width={14}
                  height={14}
                  className="absolute inset-0 size-full"
                  decoding="async"
                  aria-hidden="true"
                />
              </span>
              <span className="whitespace-nowrap text-body-sm font-normal text-white">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <p className="shrink-0 whitespace-nowrap text-body-sm font-normal text-[#d2def5]">
          {deliveryNote}
        </p>
      </div>
    </section>
  )
}
