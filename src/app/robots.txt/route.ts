export function GET(): Response {
  const robotsTxt = `User-agent: *
Allow: /

# Основные страницы
Allow: /
Allow: /sitemap.xml

# Запрещаем индексацию служебных файлов
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /*.json$
Disallow: /*_buildManifest.js$
Disallow: /*_ssgManifest.js$

# Разрешаем доступ к изображениям и медиа
Allow: /public/
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.gif$
Allow: /*.webp$
Allow: /*.svg$

# Карта сайта
Sitemap: ${
    process.env.NEXT_PUBLIC_SITE_URL || "https://быстрая-баня.рф"
  }/sitemap.xml

# Время краулинга (рекомендуется для больших сайтов)
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
