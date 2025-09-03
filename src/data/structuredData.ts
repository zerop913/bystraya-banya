export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Быстрая Баня",
    alternateName: "БыстраяБаня",
    url: "https://быстрая-баня.рф",
    logo: "https://быстрая-баня.рф/favicon.svg",
    description:
      "Строительство бань и саун любой сложности в Северо-Западном регионе России за 30 дней с гарантией 3 года",
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      name: "Быстрая Баня",
    },
    areaServed: {
      "@type": "Place",
      name: "Северо-Западный регион России",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "59.9311",
        longitude: "30.3609",
      },
      geoRadius: "300",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7-XXX-XXX-XX-XX",
      contactType: "Customer Service",
      availableLanguage: "Russian",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    },
    sameAs: ["https://vk.com/bystraya_banya", "https://t.me/bystraya_banya"],
  },

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://быстрая-баня.рф/#organization",
    name: "Быстрая Баня",
    description:
      "Строительство бань и саун любой сложности в Северо-Западном регионе России",
    url: "https://быстрая-баня.рф",
    telephone: "+7-XXX-XXX-XX-XX",
    email: "info@быстрая-баня.рф",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Санкт-Петербург",
      addressRegion: "Ленинградская область",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "59.9311",
      longitude: "30.3609",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "RUB",
  },

  services: {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Строительство бань и саун",
    provider: {
      "@type": "Organization",
      name: "Быстрая Баня",
    },
    areaServed: {
      "@type": "Place",
      name: "Северо-Западный регион России",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Строительство бань и саун",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Русская баня под ключ",
            description:
              "Строительство традиционной русской бани с печью-каменкой",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Финская сауна под ключ",
            description: "Строительство финской сауны с сухим паром",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Турецкий хамам под ключ",
            description: "Строительство турецкой парной хамам",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Баня-бочка под ключ",
            description: "Изготовление и установка бани-бочки",
          },
        },
      ],
    },
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://быстрая-баня.рф/#website",
    url: "https://быстрая-баня.рф",
    name: "Быстрая Баня - Строительство бань и саун под ключ",
    description:
      "Строим бани и сауны любой сложности в Северо-Западном регионе России за 30 дней с гарантией 3 года",
    publisher: {
      "@id": "https://быстрая-баня.рф/#organization",
    },
    inLanguage: "ru-RU",
  },

  webpage: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://быстрая-баня.рф/#webpage",
    url: "https://быстрая-баня.рф",
    name: "Быстрая Баня - Строительство бань и саун под ключ за 30 дней",
    isPartOf: {
      "@id": "https://быстрая-баня.рф/#website",
    },
    about: {
      "@id": "https://быстрая-баня.рф/#organization",
    },
    description:
      "Строим бани и сауны любой сложности в Северо-Западном регионе России за 30 дней с гарантией 3 года",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: "https://быстрая-баня.рф",
        },
      ],
    },
    mainEntity: {
      "@id": "https://быстрая-баня.рф/#organization",
    },
    inLanguage: "ru-RU",
  },

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько времени займет строительство бани?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы строим бани под ключ за 30 дней независимо от сложности проекта. Это включает все этапы: от фундамента до финишной отделки.",
        },
      },
      {
        "@type": "Question",
        name: "Какая гарантия предоставляется на работы?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы предоставляем полную гарантию 3 года на все строительные работы и используемые материалы.",
        },
      },
      {
        "@type": "Question",
        name: "В каких регионах вы работаете?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы работаем по всему Северо-Западному региону России, включая Санкт-Петербург, Ленинградскую область и соседние регионы.",
        },
      },
      {
        "@type": "Question",
        name: "Какие типы бань вы строите?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы строим русские бани, финские сауны, турецкие хамамы, японские офуро и бани-бочки. Работаем с любыми материалами: дерево, кирпич, камень.",
        },
      },
    ],
  },
};
