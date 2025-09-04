export function GET(): Response {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://xn----7sbbbc7eqhj2g2be.xn--p1ai";

  const robotsTxt = `User-agent: *
Allow: /

# Запрещаем индексацию служебных файлов
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Карта сайта
Sitemap: ${siteUrl}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
