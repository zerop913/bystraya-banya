export const fontConfig = {
  preload: true,
  display: "swap" as const,
  fallback: ["system-ui", "arial"],
};

export const seoConfig = {
  home: {
    title: "Быстрая Баня - Строительство бань и саун под ключ за 30 дней",
    description:
      "⭐ Строим бани и сауны любой сложности в Северо-Западном регионе России за 30 дней с гарантией 3 года. ✅ Русские бани, финские сауны, хамамы, бани-бочки под ключ.",
    keywords: [
      "строительство бань",
      "строительство саун",
      "баня под ключ",
      "сауна под ключ",
      "русская баня",
      "финская сауна",
    ],
  },
};

export const performanceConfig = {
  preloadResources: [
    { href: "/hero-bg.jpg", as: "image", type: "image/jpeg" },
    { href: "/favicon.svg", as: "image", type: "image/svg+xml" },
  ],

  dnsPrefetch: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],

  preconnect: [
    { href: "https://fonts.googleapis.com" },
    { href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  ],
};
