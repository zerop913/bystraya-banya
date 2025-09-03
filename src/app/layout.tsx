import type { Metadata } from "next";
import { Playfair_Display, Inter, Manrope, Oswald } from "next/font/google";
import { structuredData } from "@/data/structuredData";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Быстрая Баня - Строительство бань и саун под ключ за 30 дней",
    template: "%s | Быстрая Баня",
  },
  description:
    "⭐ Строим бани и сауны любой сложности в Северо-Западном регионе России за 30 дней с гарантией 3 года. ✅ Русские бани, финские сауны, хамамы, бани-бочки под ключ. 📞 Бесплатная консультация и расчет стоимости.",
  keywords: [
    "строительство бань",
    "строительство саун",
    "баня под ключ",
    "сауна под ключ",
    "русская баня",
    "финская сауна",
    "турецкий хамам",
    "баня бочка",
    "строительство бань спб",
    "строительство бань ленобласть",
    "баня из бруса",
    "баня из бревна",
    "проекты бань",
  ],
  authors: [{ name: "Быстрая Баня" }],
  creator: "Быстрая Баня",
  publisher: "Быстрая Баня",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://быстрая-баня.рф"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Быстрая Баня - Строительство бань и саун под ключ за 30 дней",
    description:
      "Строим бани и сауны любой сложности в Северо-Западном регионе России за 30 дней с гарантией 3 года. Русские бани, финские сауны, хамамы под ключ.",
    url: "/",
    siteName: "Быстрая Баня",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Строительство бань и саун - Быстрая Баня",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Быстрая Баня - Строительство бань и саун под ключ",
    description:
      "Строим бани и сауны любой сложности за 30 дней с гарантией 3 года",
    images: ["/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              structuredData.organization,
              structuredData.localBusiness,
              structuredData.services,
              structuredData.website,
              structuredData.webpage,
              structuredData.faq,
            ]),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/hero-bg.jpg" as="image" type="image/jpeg" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="msapplication-TileColor" content="#8B4513" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${manrope.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
