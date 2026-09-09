import { allergyReliefImages } from '@resources/allergyRelief'
import { strings } from '@strings/strings'

const copy = strings.allergyRelief

export const allergyReliefConfig = {
  label: copy.label,
  heading: copy.heading,
  description: copy.description,
  tags: copy.tags,
  cta: copy.cta,
  ctaHref: '/products',
  visual: {
    src: allergyReliefImages.visual,
    alt: copy.visualAlt,
    width: 620,
    height: 560,
  },
  pollen: [
    {
      src: allergyReliefImages.pollen[0],
      className: 'top-[60px] left-[23%] size-[22px] lg:left-[332px]',
    },
    {
      src: allergyReliefImages.pollen[1],
      className: 'top-[60px] right-[35%] size-[18px] lg:right-auto lg:left-[820px]',
    },
    {
      src: allergyReliefImages.pollen[2],
      className: 'top-[110px] right-[18%] size-[28px] lg:right-auto lg:left-[1080px]',
    },
    {
      src: allergyReliefImages.pollen[3],
      className: 'top-[240px] right-[8%] size-[14px] lg:right-auto lg:left-[1200px]',
    },
  ],
} as const
