"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useScrollAnimation";
import { useRef } from "react";
import { MapPin, Ruler, Hammer, Award, Star, Heart } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useIntersectionObserver(
    sectionRef,
    undefined,
    "projects-section"
  );

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="section-padding bg-gradient-to-b from-wood-light to-wood-medium relative overflow-hidden"
      >
        {/* Декоративный фон */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent-amber rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent-copper rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-wood-darkest rounded-full blur-2xl"></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Креативный заголовок в едином стиле */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black text-accent-amber/25 select-none leading-tight"
              >
                ПРОЕКТЫ
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
              className="text-wood-darkest/90 text-lg max-w-2xl mx-auto font-inter"
            >
              Каждая баня — это уникальный проект с душой и характером
            </motion.p>
          </motion.div>

          {/* Сетка проектов */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {siteData.projects.gallery.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`group ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`
                  relative overflow-hidden rounded-2xl transition-all duration-500 group-hover:scale-105
                  ${index === 0 ? "h-96 lg:h-full" : "h-64"}
                  bg-wood-light/10 backdrop-blur-sm border border-wood-light/20
                `}
                >
                  {/* Изображение */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Градиент оверлей */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-darkest/80 via-wood-darkest/30 to-transparent"></div>

                  {/* Флагманский badge для первого проекта */}
                  {index === 0 && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-accent-amber text-white px-3 py-1 rounded-full font-oswald font-bold text-sm shadow-lg">
                        ФЛАГМАНСКИЙ
                      </div>
                    </div>
                  )}

                  {/* Контент */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className={`font-playfair font-bold text-white mb-2 ${
                        index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-wood-light/80 text-sm">
                      <div className="flex items-center gap-1">
                        <Ruler className="w-4 h-4" />
                        <span className="font-inter">{project.size}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Hammer className="w-4 h-4" />
                        <span className="font-inter">{project.material}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-inter">{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Статистика */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-amber to-accent-copper rounded-full mx-auto flex items-center justify-center mb-4 shadow-2xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-wood-darkest mb-2">
                50+
              </div>
              <div className="text-wood-darkest/70 font-inter">
                Завершенных проектов
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-accent-amber fill-current"
                  />
                ))}
              </div>
              <div className="text-4xl font-black text-wood-darkest mb-2">
                5.0
              </div>
              <div className="text-wood-darkest/70 font-inter">
                Средний рейтинг
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-copper to-accent-amber rounded-full mx-auto flex items-center justify-center mb-4 shadow-2xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-wood-darkest mb-2">
                100%
              </div>
              <div className="text-wood-darkest/70 font-inter">
                Довольных клиентов
              </div>
            </div>
          </motion.div>

          {/* Призыв к действию */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-wood-light/10 backdrop-blur-sm rounded-2xl p-8 border border-wood-light/20">
              <h3 className="font-playfair text-2xl font-bold text-wood-darkest mb-4">
                Хотите увидеть больше наших работ?
              </h3>

              <p className="text-wood-darkest/70 font-inter text-lg mb-6 max-w-md mx-auto">
                Обсудим ваш проект и покажем еще больше примеров наших бань
              </p>

              <motion.button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-accent-amber to-accent-copper text-white px-8 py-3 rounded-full font-oswald font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ОБСУДИТЬ ПРОЕКТ
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
