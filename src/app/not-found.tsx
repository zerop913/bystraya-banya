import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Страница не найдена | Быстрая Баня",
  description:
    "К сожалению, запрашиваемая страница не найдена. Перейдите на главную страницу или воспользуйтесь навигацией.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-amber-200 select-none leading-none">
            404
          </h1>
          <div className="relative -mt-4">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              <span className="text-6xl md:text-8xl font-black opacity-50">
                404
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Страница не найдена
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              К сожалению, страница, которую вы ищете, не существует или была
              перемещена.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              На главную
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Связаться с нами
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-amber-200">
            <p className="text-sm text-gray-500 mb-4">
              Возможно, вас заинтересует:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link
                href="/#bath-types"
                className="text-amber-600 hover:text-amber-700 hover:underline"
              >
                Типы бань
              </Link>
              <Link
                href="/#calculator"
                className="text-amber-600 hover:text-amber-700 hover:underline"
              >
                Калькулятор
              </Link>
              <Link
                href="/#projects"
                className="text-amber-600 hover:text-amber-700 hover:underline"
              >
                Наши проекты
              </Link>
              <Link
                href="/#advantages"
                className="text-amber-600 hover:text-amber-700 hover:underline"
              >
                Преимущества
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 opacity-20">
          <div className="flex justify-center space-x-4">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-amber-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
