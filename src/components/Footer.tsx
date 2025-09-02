"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useScrollAnimation";
import { useRef } from "react";
import { siteData } from "@/data/siteData";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const isVisible = useIntersectionObserver(
    footerRef,
    undefined,
    "footer-section"
  );

  return (
    <footer ref={footerRef} className="relative bg-wood-darkest py-16">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Логотип компании */}
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-accent-amber mb-4">
            {siteData.company.name}
          </h3>

          {/* Описание */}
          <p className="font-manrope text-wood-light/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {siteData.company.description}
          </p>

          {/* Контактная информация */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-accent-amber/20 p-3 rounded-full mb-3">
                <Phone size={24} className="text-accent-amber" />
              </div>
              <div className="text-wood-light font-manrope text-center">
                <div className="text-sm opacity-70 mb-1">Телефон</div>
                <div className="font-semibold">+7 (812) 123-45-67</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="bg-accent-amber/20 p-3 rounded-full mb-3">
                <Mail size={24} className="text-accent-amber" />
              </div>
              <div className="text-wood-light font-manrope text-center">
                <div className="text-sm opacity-70 mb-1">Email</div>
                <div className="font-semibold">{siteData.company.email}</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="bg-accent-amber/20 p-3 rounded-full mb-3">
                <Clock size={24} className="text-accent-amber" />
              </div>
              <div className="text-wood-light font-manrope text-center">
                <div className="text-sm opacity-70 mb-1">Время работы</div>
                <div className="font-semibold">{siteData.company.workTime}</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="bg-accent-amber/20 p-3 rounded-full mb-3">
                <MapPin size={24} className="text-accent-amber" />
              </div>
              <div className="text-wood-light font-manrope text-center">
                <div className="text-sm opacity-70 mb-1">Регион работы</div>
                <div className="font-semibold text-sm">
                  {siteData.company.region}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Преимущества */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-8 text-wood-light/70 font-manrope"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent-amber rounded-full mr-2"></div>
              <span>Строительство за {siteData.company.buildTime}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent-amber rounded-full mr-2"></div>
              <span>Гарантия {siteData.company.guarantee}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent-amber rounded-full mr-2"></div>
              <span>Любые материалы</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent-amber rounded-full mr-2"></div>
              <span>Бесплатные замеры</span>
            </div>
          </motion.div>

          {/* Разделитель */}
          <div className="w-24 h-px bg-accent-amber mx-auto mb-8"></div>

          {/* Копирайт */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-wood-light/60 font-manrope text-sm"
          >
            <p className="mb-2">
              © {new Date().getFullYear()} {siteData.company.name}. Все права
              защищены.
            </p>
            <p className="text-xs">
              Лицензия на строительство №123456789 | ИНН 1234567890
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
