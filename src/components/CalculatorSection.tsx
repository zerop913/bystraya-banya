"use client";

import { useIntersectionObserver } from "@/hooks/useScrollAnimation";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { calculateBathPrice, formatPrice } from "@/lib/utils";
import { Calculator, Ruler, Home, Settings } from "lucide-react";

export default function CalculatorSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useIntersectionObserver(
    sectionRef,
    undefined,
    "calculator-section"
  );

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(6);
  const [selectedMaterial, setSelectedMaterial] = useState("brus");
  const [selectedFoundation, setSelectedFoundation] = useState("pile");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const newPrice = calculateBathPrice(
      width,
      height,
      selectedMaterial,
      selectedFoundation,
      selectedOptions
    );
    setPrice(newPrice);
  }, [width, height, selectedMaterial, selectedFoundation, selectedOptions]);

  const toggleOption = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  return (
    <section
      id="calculator"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-wood-light to-wood-medium relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent-amber rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-copper rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-wood-darkest rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-7xl md:text-9xl lg:text-[12rem] font-black text-accent-amber/15 select-none leading-none mb-8"
            >
              РАСЧЕТ
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-4 -right-8 bg-gradient-to-r from-accent-copper to-accent-amber text-white px-6 py-3 rounded-2xl font-oswald font-bold text-xl shadow-2xl transform rotate-3"
            >
              СТОИМОСТИ
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-wood-darkest text-xl max-w-2xl mx-auto font-manrope mt-12"
          >
            Узнайте точную стоимость вашей бани за 2 минуты
          </motion.p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid lg:grid-cols-3 gap-6 items-start"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-wood-light/20 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-accent-amber to-accent-copper p-3 rounded-xl shadow-lg">
                    <Ruler className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-oswald text-lg font-bold text-wood-darkest">
                      РАЗМЕРЫ БАНИ
                    </h3>
                    <p className="text-wood-dark text-sm">Выберите габариты</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-wood-darkest mb-3 uppercase tracking-wide">
                      Ширина
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min={siteData.calculator.sizes.min}
                        max={siteData.calculator.sizes.max}
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        className="w-full h-2 bg-gradient-to-r from-wood-light to-accent-amber/20 rounded-full appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-wood-dark mt-2">
                        <span>{siteData.calculator.sizes.min}м</span>
                        <span className="font-bold text-accent-amber text-base">
                          {width}м
                        </span>
                        <span>{siteData.calculator.sizes.max}м</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-wood-darkest mb-3 uppercase tracking-wide">
                      Длина
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min={siteData.calculator.sizes.min}
                        max={siteData.calculator.sizes.max}
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full h-2 bg-gradient-to-r from-wood-light to-accent-copper/20 rounded-full appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-wood-dark mt-2">
                        <span>{siteData.calculator.sizes.min}м</span>
                        <span className="font-bold text-accent-copper text-base">
                          {height}м
                        </span>
                        <span>{siteData.calculator.sizes.max}м</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="bg-gradient-to-br from-accent-amber/10 to-accent-copper/5 rounded-xl p-4 text-center border border-accent-amber/20"
                    key={width * height}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-xs text-wood-dark mb-1 font-semibold uppercase tracking-wide">
                      Площадь бани
                    </div>
                    <div className="text-3xl font-playfair font-bold text-wood-darkest mb-1">
                      {width * height}
                    </div>
                    <div className="text-accent-amber font-semibold text-sm">
                      кв. метров
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-wood-light/20 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Home className="w-5 h-5 text-accent-amber mr-3" />
                  <h4 className="font-oswald font-bold text-wood-darkest">
                    МАТЕРИАЛ СТЕН
                  </h4>
                </div>

                <div className="space-y-3">
                  {siteData.calculator.materials.map((material, index) => (
                    <motion.label
                      key={material.id}
                      className={`flex items-start cursor-pointer p-3 rounded-xl transition-all duration-300 ${
                        selectedMaterial === material.id
                          ? "bg-gradient-to-r from-accent-amber/15 to-accent-copper/10 border border-accent-amber/40 shadow-sm"
                          : "bg-wood-light/5 border border-wood-light/20 hover:bg-accent-amber/5 hover:border-accent-amber/30"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <input
                        type="radio"
                        name="material"
                        value={material.id}
                        checked={selectedMaterial === material.id}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-3 mt-0.5 ${
                          selectedMaterial === material.id
                            ? "border-accent-amber bg-accent-amber"
                            : "border-wood-medium"
                        }`}
                      >
                        {selectedMaterial === material.id && (
                          <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-wood-darkest text-sm">
                          {material.name}
                        </div>
                        <div className="text-xs text-wood-dark">
                          {material.description}
                        </div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-wood-light/20 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Settings className="w-5 h-5 text-accent-copper mr-3" />
                  <h4 className="font-oswald font-bold text-wood-darkest">
                    ТИП ФУНДАМЕНТА
                  </h4>
                </div>

                <div className="space-y-3">
                  {siteData.calculator.foundations.map((foundation, index) => (
                    <motion.label
                      key={foundation.id}
                      className={`flex items-center justify-between cursor-pointer p-3 rounded-xl transition-all duration-300 ${
                        selectedFoundation === foundation.id
                          ? "bg-gradient-to-r from-accent-copper/15 to-accent-amber/10 border border-accent-copper/40 shadow-sm"
                          : "bg-wood-light/5 border border-wood-light/20 hover:bg-accent-copper/5 hover:border-accent-copper/30"
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="foundation"
                          value={foundation.id}
                          checked={selectedFoundation === foundation.id}
                          onChange={(e) =>
                            setSelectedFoundation(e.target.value)
                          }
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded border-2 flex items-center justify-center mr-3 ${
                            selectedFoundation === foundation.id
                              ? "border-accent-copper bg-accent-copper"
                              : "border-wood-medium"
                          }`}
                        >
                          {selectedFoundation === foundation.id && (
                            <motion.div
                              className="w-1.5 h-1.5 bg-white rounded"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            />
                          )}
                        </div>
                        <span className="font-semibold text-wood-darkest text-sm">
                          {foundation.name}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-accent-copper">
                        {formatPrice(foundation.price)}
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-wood-light/20 hover:shadow-2xl transition-all duration-300">
                <h4 className="font-oswald font-bold text-wood-darkest mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-accent-amber to-accent-copper rounded-full mr-3"></span>
                  ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ
                </h4>

                <div className="space-y-2">
                  {siteData.calculator.options.map((option, index) => (
                    <motion.label
                      key={option.id}
                      className={`flex items-center justify-between cursor-pointer p-3 rounded-xl transition-all duration-300 ${
                        selectedOptions.includes(option.id)
                          ? "bg-gradient-to-r from-accent-amber/15 to-accent-copper/5 border border-accent-amber/30 shadow-sm"
                          : "bg-wood-light/5 border border-wood-light/20 hover:bg-accent-amber/5"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedOptions.includes(option.id)}
                          onChange={() => toggleOption(option.id)}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded border-2 flex items-center justify-center mr-3 ${
                            selectedOptions.includes(option.id)
                              ? "border-accent-amber bg-accent-amber"
                              : "border-wood-medium"
                          }`}
                        >
                          {selectedOptions.includes(option.id) && (
                            <motion.svg
                              className="w-2.5 h-2.5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </motion.svg>
                          )}
                        </div>
                        <span className="text-sm font-medium text-wood-darkest">
                          {option.name}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-accent-amber">
                        +{formatPrice(option.price)}
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-wood-darkest to-wood-dark rounded-2xl p-6 shadow-xl text-white hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <Calculator className="w-10 h-10 text-accent-amber mx-auto mb-3" />
                  <h3 className="font-oswald text-xl font-bold mb-2">
                    СТОИМОСТЬ ПРОЕКТА
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-accent-amber to-accent-copper mx-auto rounded-full"></div>
                </div>

                <motion.div
                  key={price}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center mb-6"
                >
                  <div className="text-4xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-amber via-accent-copper to-accent-amber mb-2">
                    {formatPrice(price)}
                  </div>
                  <div className="text-wood-light/80 text-sm">
                    за баню {width}×{height}м ({width * height}м²)
                  </div>
                </motion.div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-wood-light/70">Материал:</span>
                    <span className="text-accent-amber font-semibold">
                      {
                        siteData.calculator.materials.find(
                          (m) => m.id === selectedMaterial
                        )?.name
                      }
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-wood-light/70">Фундамент:</span>
                    <span className="text-accent-copper font-semibold">
                      {
                        siteData.calculator.foundations.find(
                          (f) => f.id === selectedFoundation
                        )?.name
                      }
                    </span>
                  </div>
                  {selectedOptions.length > 0 && (
                    <div className="flex justify-between items-center py-1">
                      <span className="text-wood-light/70">Опции:</span>
                      <span className="text-accent-amber font-semibold">
                        {selectedOptions.length} шт.
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <motion.button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-accent-amber to-accent-copper text-white py-3 px-6 rounded-xl font-oswald font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">ЗАКАЗАТЬ РАСЧЕТ</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-copper to-accent-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-accent-amber/20 max-w-2xl mx-auto">
            <p className="text-wood-dark text-sm leading-relaxed">
              * Расчет является предварительным. Точная стоимость определяется
              после выезда специалиста на объект и может отличаться в
              зависимости от особенностей участка и дополнительных требований.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d4af37, #b8860b);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);
          transition: all 0.2s ease;
        }
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d4af37, #b8860b);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);
        }
      `}</style>
    </section>
  );
}
