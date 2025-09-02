"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useScrollAnimation";
import { useRef, useState } from "react";
import { siteData } from "@/data/siteData";
import BathModal from "./BathModal";

export default function BathTypesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useIntersectionObserver(
    sectionRef,
    undefined,
    "bath-types-section"
  );

  const [selectedBath, setSelectedBath] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (bathType: any) => {
    setSelectedBath(bathType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBath(null);
  };

  // Изображения для типов бань
  const bathImages = [
    "/bath-russian.jpg",
    "/bath-finnish.jpg",
    "/bath-turkish.jpg",
    "/bath-barrel.jpg",
    "/bath-japanese.jpg",
    "/bath-mobile.jpg",
  ];

  return (
    <section
      id="bath-types"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-wood-light via-wood-medium to-wood-dark relative overflow-hidden"
    >
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-amber rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-accent-copper rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-wood-darkest rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Креативный заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-6">
            {/* Основной заголовок как фоновая декорация */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-accent-amber/25 select-none leading-tight"
            >
              ТИПЫ БАНЬ
            </motion.div>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: "120px" } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-accent-amber to-accent-copper mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-wood-light/90 text-lg max-w-2xl mx-auto font-inter"
          >
            Выберите подходящий тип бани для вашего участка и бюджета
          </motion.p>
        </motion.div>{" "}
        {/* Оригинальная креативная сетка */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {siteData.bathTypes.map((bathType, index) => (
            <motion.div
              key={bathType.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onClick={() => openModal(bathType)}
              className={`group cursor-pointer ${
                index === 0 || index === 3
                  ? "lg:col-span-2 lg:row-span-2"
                  : index === 5
                  ? "lg:col-span-3 lg:row-span-1"
                  : "lg:col-span-1 lg:row-span-1"
              }`}
            >
              <div
                className={`
                relative overflow-hidden rounded-2xl transition-all duration-500 group-hover:scale-105
                ${index === 0 ? "h-96 lg:h-full" : "h-64"}
                bg-wood-light/10 backdrop-blur-sm border border-wood-light/20
              `}
              >
                {/* Фоновое изображение */}
                <img
                  src={bathImages[index]}
                  alt={bathType.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-wood-darkest/60 to-wood-darkest/80"></div>

                {/* Иконка типа бани */}
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-accent-amber/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-accent-amber font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Контент */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-wood-darkest/90 to-transparent">
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-2">
                    {bathType.name}
                  </h3>
                  <p className="text-wood-light/80 text-sm md:text-base mb-4 font-inter">
                    {bathType.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-oswald text-accent-amber text-lg font-bold">
                      {bathType.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(bathType);
                      }}
                      className="px-4 py-2 bg-accent-amber/20 text-accent-amber rounded-lg text-sm font-medium hover:bg-accent-amber/30 transition-colors backdrop-blur-sm"
                    >
                      Подробнее
                    </button>
                  </div>
                </div>

                {/* Декоративные элементы при наведении */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent-amber"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent-amber"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Модальное окно */}
      <BathModal
        isOpen={isModalOpen}
        onClose={closeModal}
        bathType={selectedBath}
      />
    </section>
  );
}
