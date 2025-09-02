"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "advantages", label: "Преимущества" },
    { id: "bath-types", label: "Виды бань" },
    { id: "calculator", label: "Калькулятор" },
    { id: "projects", label: "Проекты" },
    { id: "process", label: "Этапы" },
    { id: "contact", label: "Контакты" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 z-50 bg-transparent"
      >
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Логотип */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-accent-amber to-accent-copper rounded-lg flex items-center justify-center">
                <span className="font-oswald font-black text-white text-lg lg:text-xl">
                  ББ
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-oswald font-bold text-white text-lg lg:text-xl">
                  {siteData.company.name}
                </h1>
                <p className="font-inter text-wood-light/80 text-xs lg:text-sm">
                  {siteData.company.buildTime} • {siteData.company.guarantee}
                </p>
              </div>
            </motion.div>

            {/* Навигация для десктопа */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -2 }}
                  className="font-inter font-medium text-wood-light hover:text-white transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-amber to-accent-copper group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </nav>

            {/* Контакты и кнопка */}
            <div className="flex items-center space-x-4">
              {/* Телефон - скрыт на мобильных */}
              <motion.a
                href="tel:+78005557755"
                whileHover={{ scale: 1.05 }}
                className="hidden md:flex items-center space-x-2 text-wood-light hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-wood-light/10 rounded-full flex items-center justify-center group-hover:bg-accent-amber/20 transition-colors duration-300">
                  <Phone size={18} />
                </div>
                <div className="hidden lg:block">
                  <p className="font-oswald font-bold text-sm">
                    +7 (800) 555-77-55
                  </p>
                  <p className="font-inter text-xs text-wood-light/80">
                    {siteData.company.workTime}
                  </p>
                </div>
              </motion.a>

              {/* Кнопка заказа звонка */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="hidden sm:block bg-gradient-to-r from-accent-amber to-accent-copper text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-oswald font-bold text-sm lg:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                ЗАКАЗАТЬ ЗВОНОК
              </motion.button>

              {/* Мобильное меню */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 bg-wood-light/10 rounded-full flex items-center justify-center text-wood-light hover:text-white hover:bg-accent-amber/20 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Мобильное меню */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-20 left-0 right-0 z-40 lg:hidden overflow-hidden bg-wood-darkest/95 backdrop-blur-md border-b border-wood-light/10"
      >
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-6">
          <nav className="space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left font-inter font-medium text-wood-light hover:text-white py-2 px-4 rounded-lg hover:bg-wood-light/10 transition-all duration-300"
              >
                {item.label}
              </motion.button>
            ))}

            {/* Контакты в мобильном меню */}
            <div className="pt-4 border-t border-wood-light/20">
              <motion.a
                href="tel:+78005557755"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-wood-light/10 transition-all duration-300 text-wood-light hover:text-white"
              >
                <Phone size={18} />
                <div>
                  <p className="font-oswald font-bold">+7 (800) 555-77-55</p>
                  <p className="font-inter text-sm text-wood-light/80">
                    {siteData.company.workTime}
                  </p>
                </div>
              </motion.a>

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: 0.7 }}
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-to-r from-accent-amber to-accent-copper text-white py-3 px-4 rounded-lg font-oswald font-bold mt-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                ЗАКАЗАТЬ ЗВОНОК
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.div>

      {/* Оверлей для мобильного меню */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </>
  );
}
