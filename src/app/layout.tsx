import type { Metadata } from "next";
import { Playfair_Display, Inter, Manrope, Oswald } from "next/font/google";
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
  title: "Быстрая Баня - Строительство бань и саун под ключ",
  description:
    "Строим бани и сауны любой сложности в Северо-Западном регионе России за 30 дней с гарантией 3 года. Быстро, качественно, надежно.",
  keywords:
    "строительство бань, строительство саун, баня под ключ, сауна под ключ, русская баня, финская сауна, турецкий хамам, баня-бочка",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${playfair.variable} ${inter.variable} ${manrope.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
