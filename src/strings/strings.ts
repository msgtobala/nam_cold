export const strings = {
  brand: {
    name: 'NAM COLD',
    homeAriaLabel: 'Nam Cold home',
  },

  common: {
    searchAriaLabel: 'Search',
    mainNavAriaLabel: 'Main',
  },

  header: {
    cta: 'Find Your Relief',
    nav: {
      solutions: 'Solutions',
      products: 'Products',
      about: 'About Us',
      contact: 'Contact',
    },
  },

  hero: {
    ariaLabel: 'Hero banner',
    alt: 'NAM COLD OXY — खुलके सांस लो',
  },

  symptoms: {
    badge: 'Interactive Diagnostics',
    heading: 'How are you feeling today?',
    description:
      'Select your symptoms below to discover the target clinical NAM COLD solution tailored for your recovery.',
    cta: 'Find My Solution',
    items: {
      commonCold: {
        title: 'Common Cold',
        subtitle: 'Sardi / Jukham',
      },
      blockedNose: {
        title: 'Blocked Nose',
        subtitle: 'Band Naak',
      },
      nightCongestion: {
        title: 'Night Congestion',
        subtitle: 'Raat ki band naak',
      },
      allergies: {
        title: 'Allergies',
        subtitle: 'Allergic Symptoms',
      },
      kidsCare: {
        title: 'Kids Care',
        subtitle: 'Bachhon ki dekhbhal',
      },
      fluSymptoms: {
        title: 'Flu Symptoms',
        subtitle: 'Bukhar aur body ache',
      },
    },
  },

  solutions: {
    badge: 'Complete Care. Complete Range.',
    headingPrefix: 'One Brand.',
    headingAccent: 'Multiple Solutions.',
    description:
      'Explore our targeted pharmaceutical solutions built for every stage of respiratory distress.',
    cta: 'View All Products',
    items: {
      nasalRelief: {
        title: 'Nasal Relief',
        subtitle: 'Fast relief for blocked nose',
        description:
          'Aerosolized micro-mists that target inflamed nasal membranes instantly.',
      },
      coldRelief: {
        title: 'Cold Relief',
        subtitle: 'Effective relief from cold & flu',
        description:
          'Complete relief from running nose, scratchy throat, and minor body pain.',
      },
      kidsCare: {
        title: 'Kids Care',
        subtitle: 'Gentle and safe care for kids',
        description:
          'Child-friendly dosage formulas curated carefully to soothe little lungs safely.',
      },
      allergyRelief: {
        title: 'Allergy Relief',
        subtitle: 'Freedom from allergic symptoms',
        description:
          'Non-drowsy blockades against pollen, pet dander, and environmental dust.',
      },
      dailyCare: {
        title: 'Daily Care',
        subtitle: 'Daily protection for better breathing',
        description:
          'Isotonic saline washes designed to cleanse and humidify nasal passages daily.',
      },
    },
  },

  footer: {
    headlineLine1: 'Sardi. Jukham. Band Naak.',
    headlineLine2Prefix: 'Ek Naam.',
    headlineBrand: 'NAM COLD.',
    pharmacyPlaceholder: 'Enter your PIN Code or City...',
    pharmacyLabel: 'PIN code or city',
    pharmacyCta: 'Search Pharmacy',
    blurb:
      'Premium clinical solutions built to preserve healthy airflow. Restoring natural respiration securely.',
    disclaimer:
      'Disclaimer: *Oxymetazoline starts relieving congestion in seconds. Consult your doctor if symptoms persist past 7 days. Use only as directed on packaging label.',
    copyright: '© 2026 NAM COLD Pharmaceuticals Ltd.',
    columns: {
      solutions: 'Solutions',
      products: 'Products',
      learn: 'Learn',
      about: 'About Us',
    },
    links: {
      nasalRelief: 'Nasal Relief',
      coldSyrup: 'Cold Syrup',
      pediatricDrops: 'Pediatric Drops',
      dailyWash: 'Daily Wash',
    },
  },
} as const

export type Strings = typeof strings
