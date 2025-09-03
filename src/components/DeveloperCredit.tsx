import Link from "next/link";
import Image from "next/image";

export default function DeveloperCredit() {
  return (
    <div className="bg-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8">
          <div className="hidden sm:block h-px w-16 bg-gray-700"></div>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-500">made by</span>
            <Link
              href="https://ivan-smolin.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Перейти на сайт разработчика Ivan Smolin"
            >
              <Image
                src="https://ivan-smolin.ru/favicon.svg"
                alt=""
                width={14}
                height={14}
                className="w-3.5 h-3.5 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                unoptimized
              />
              <span className="font-medium">ivan-smolin.ru</span>
            </Link>
          </div>

          <div className="hidden sm:block h-px w-16 bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
