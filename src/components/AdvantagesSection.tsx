"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useScrollAnimation";
import { useRef } from "react";
import { siteData } from "@/data/siteData";
import { Zap, Hammer, Shield } from "lucide-react";

const iconComponents = {
  Zap,
  Hammer,
  Shield,
};

export default function AdvantagesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(
    sectionRef,
    undefined,
    "advantages-section"
  );

  return (
    <section
      id="advantages"
      ref={sectionRef}
      className="section-padding bg-wood-light relative"
    >
      <div className="container-custom">
        <div className="space-y-16">
          {siteData.advantages.map((advantage, index) => {
            const IconComponent =
              iconComponents[advantage.iconName as keyof typeof iconComponents];

            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 60,
                }}
                className={`flex items-center gap-8 ${
                  isEven ? "flex-row" : "flex-row-reverse"
                } max-w-6xl ${isEven ? "ml-0" : "ml-auto"}`}
              >
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="relative"
                  >
                    <div className="text-[120px] md:text-[180px] font-black text-accent-amber/10 leading-none select-none">
                      {index === 0 ? "30" : index === 1 ? "∞" : "3"}
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-wood-darkest rounded-full flex items-center justify-center">
                        <IconComponent
                          size={32}
                          className="text-accent-amber"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div
                  className={`flex-1 ${isEven ? "text-left" : "text-right"}`}
                >
                  <motion.h3
                    className="font-playfair text-4xl md:text-6xl font-bold text-wood-darkest mb-4 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.3 + 0.2 }}
                  >
                    {advantage.title}
                  </motion.h3>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: "100px" } : {}}
                    transition={{ delay: index * 0.3 + 0.4, duration: 0.6 }}
                    className={`h-1 bg-gradient-to-r from-accent-amber to-accent-copper mb-6 ${
                      isEven ? "mr-auto" : "ml-auto"
                    }`}
                  />

                  <motion.p
                    className={`font-manrope text-xl text-wood-medium leading-relaxed max-w-md ${
                      index === 1
                        ? "text-right ml-auto"
                        : isEven
                        ? "text-left"
                        : "text-right"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.3 + 0.6 }}
                  >
                    {advantage.description}
                  </motion.p>

                  <motion.div
                    className={`flex gap-2 mt-6 ${
                      isEven ? "justify-start" : "justify-end"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.3 + 0.8 }}
                  >
                    {[...Array(3)].map((_, dotIndex) => (
                      <motion.div
                        key={dotIndex}
                        className="w-2 h-2 rounded-full bg-accent-amber"
                        initial={{ scale: 0 }}
                        animate={isVisible ? { scale: 1 } : {}}
                        transition={{
                          delay: index * 0.3 + 0.8 + dotIndex * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 bg-wood-darkest/5 rounded-full px-8 py-4 backdrop-blur-sm">
            <div className="w-3 h-3 bg-accent-amber rounded-full animate-pulse"></div>
            <span className="font-oswald text-wood-darkest font-medium tracking-wider">
              ГОТОВЫ НАЧАТЬ СТРОИТЕЛЬСТВО?
            </span>
            <div className="w-3 h-3 bg-accent-copper rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
