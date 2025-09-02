"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useScrollAnimation";
import { useRef } from "react";
import { siteData } from "@/data/siteData";
import {
  Clipboard,
  Building,
  PenTool,
  Hammer,
  PartyPopper,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const iconComponents = {
  Clipboard,
  Building,
  PenTool,
  Hammer,
  PartyPopper,
};

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useIntersectionObserver(
    sectionRef,
    undefined,
    "process-section"
  );

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-wood-medium to-wood-dark relative overflow-hidden"
    >
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-amber rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-copper rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-wood-darkest rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-0">
        {/* Улучшенный заголовок в едином стиле */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="relative inline-block mb-4 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-accent-amber/50 sm:text-accent-amber/35 select-none leading-tight"
            >
              ЭТАПЫ
            </motion.div>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: "80px" } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-accent-amber to-accent-copper mx-auto mb-4 sm:mb-6 sm:w-[120px]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-wood-light/90 text-base sm:text-lg max-w-2xl mx-auto font-inter px-4"
          >
            {siteData.process.subtitle}
          </motion.p>
        </motion.div>

        {/* Улучшенные этапы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
          {siteData.process.steps.map((step, index) => {
            const IconComponent =
              iconComponents[step.iconName as keyof typeof iconComponents];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`flex items-center gap-3 sm:gap-6 ${
                  isEven
                    ? "flex-row lg:flex-row"
                    : "flex-row lg:flex-row-reverse"
                } max-w-6xl mx-auto`}
              >
                {/* Контент */}
                <div className={`flex-1`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-xl">
                    <div
                      className={`flex items-start gap-3 sm:gap-4 ${
                        isEven
                          ? "flex-row lg:flex-row"
                          : "flex-row lg:flex-row-reverse"
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-accent-amber to-accent-copper rounded-xl flex items-center justify-center shadow-lg">
                          <IconComponent
                            size={20}
                            className="text-white sm:w-6 sm:h-6"
                          />
                        </div>
                      </div>

                      <div
                        className={`flex-1 ${
                          isEven
                            ? "text-left lg:text-left"
                            : "text-left lg:text-right"
                        }`}
                      >
                        <div
                          className={`flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 ${
                            isEven
                              ? "justify-start lg:justify-start"
                              : "justify-start lg:justify-end"
                          }`}
                        >
                          <h3 className="font-playfair text-lg sm:text-xl font-bold text-white">
                            {step.title}
                          </h3>
                          <span className="bg-accent-amber/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-accent-amber text-xs font-semibold border border-accent-amber/30">
                            {step.duration}
                          </span>
                        </div>

                        <p className="font-inter text-wood-light/80 leading-relaxed text-sm sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Номер этапа */}
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-wood-darkest to-wood-dark border-2 border-accent-amber rounded-full flex items-center justify-center shadow-xl">
                    <span className="font-playfair text-lg sm:text-xl font-bold text-accent-amber">
                      {step.number}
                    </span>
                  </div>

                  {/* Улучшенная соединительная линия */}
                  {index < siteData.process.steps.length - 1 && (
                    <div className="absolute top-12 sm:top-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-accent-amber to-accent-amber/30 mx-auto"></div>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-accent-amber/80 transform rotate-90 mx-auto" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
