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
  socialLabel: strings.footer.socialLabel,
  social: [
    {
      id: 'instagram',
      label: strings.footer.social.instagram,
      href: 'https://www.instagram.com/namcold.in/',
    },
    {
      id: 'facebook',
      label: strings.footer.social.facebook,
      href: 'https://www.facebook.com/Namcold.in/',
    },
    {
      id: 'linkedin',
      label: strings.footer.social.linkedin,
      href: 'https://www.linkedin.com/company/namcold/',
    },
  ],
  linkColumns: [
    {
      title: columns.solutions,
      links: [
        { label: links.solutions.nasalRelief, to: '/solutions' },
        { label: links.solutions.coldRelief, to: '/solutions' },
        { label: links.solutions.congestionRelief, to: '/solutions' },
        { label: links.solutions.respiratoryCare, to: '/solutions' },
      ],
    },
    {
      title: columns.products,
      links: [
        { label: links.products.oxy, to: '/products' },
        { label: links.products.oxyAdvance, to: '/products' },
        { label: links.products.ns, to: '/products' },
        { label: links.products.vepocaps, to: '/products' },
      ],
    },
    {
      title: columns.learn,
      links: [
        { label: links.learn.nasalCongestion, to: '/insight' },
        { label: links.learn.commonCold, to: '/insight' },
        { label: links.learn.respiratoryCare, to: '/insight' },
        { label: links.learn.productInformation, to: '/products' },
      ],
    },
    {
      title: columns.about,
      links: [
        { label: links.about.about, to: '/about-us' },
        { label: links.about.privacy, to: '/privacy-policy' },
        { label: links.about.terms, to: '/terms' },
        { label: links.about.contact, to: '/contact' },
      ],
    },
  ],
} as const
