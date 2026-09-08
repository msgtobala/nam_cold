import { strings } from '@strings/strings'

const links = strings.footer.links
const columns = strings.footer.columns

export const footerConfig = {
  headlineLine1: strings.footer.headlineLine1,
  headlineLine2Prefix: strings.footer.headlineLine2Prefix,
  headlineBrand: strings.footer.headlineBrand,
  pharmacyPlaceholder: strings.footer.pharmacyPlaceholder,
  pharmacyLabel: strings.footer.pharmacyLabel,
  pharmacyCta: strings.footer.pharmacyCta,
  blurb: strings.footer.blurb,
  disclaimer: strings.footer.disclaimer,
  copyright: strings.footer.copyright,
  linkColumns: [
    {
      title: columns.solutions,
      links: [
        { label: links.nasalRelief, to: '/solutions' },
        { label: links.coldSyrup, to: '/solutions' },
        { label: links.pediatricDrops, to: '/solutions' },
        { label: links.dailyWash, to: '/solutions' },
      ],
    },
    {
      title: columns.products,
      links: [
        { label: links.nasalRelief, to: '/products' },
        { label: links.coldSyrup, to: '/products' },
        { label: links.pediatricDrops, to: '/products' },
        { label: links.dailyWash, to: '/products' },
      ],
    },
    {
      title: columns.learn,
      links: [
        { label: links.nasalRelief, to: '/about' },
        { label: links.coldSyrup, to: '/about' },
        { label: links.pediatricDrops, to: '/about' },
        { label: links.dailyWash, to: '/about' },
      ],
    },
    {
      title: columns.about,
      links: [
        { label: links.nasalRelief, to: '/about' },
        { label: links.coldSyrup, to: '/about' },
        { label: links.pediatricDrops, to: '/about' },
        { label: links.dailyWash, to: '/about' },
      ],
    },
  ],
} as const
