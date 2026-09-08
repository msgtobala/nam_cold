import { strings } from '@strings/strings'

export const navigationConfig = {
  items: [
    { to: '/solutions', label: strings.header.nav.solutions },
    { to: '/products', label: strings.header.nav.products },
    { to: '/about', label: strings.header.nav.about },
    { to: '/contact', label: strings.header.nav.contact },
  ],
  cta: strings.header.cta,
} as const
