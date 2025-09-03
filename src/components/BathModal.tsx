"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Star, Thermometer, Droplets, Settings } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

interface BathType {
  id: number;
  name: string;
  description: string;
  detailedDescription?: string;
  features: string[];
  benefits?: string[];
  materials?: string[];
  included?: string[];
  image: string;
  price: string;
  buildTime: string;
}

interface BathModalProps {
  isOpen: boolean;
  onClose: () => void;
  bathType: BathType | null;
}

export default function BathModal({
  isOpen,
  onClose,
  bathType,
}: BathModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!bathType) return null;

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const scrollToCalculator = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById("calculator");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 50 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="relative bg-wood-darkest rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-wood-light/20"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-10 h-10 bg-wood-light/10 hover:bg-wood-light/20 rounded-full flex items-center justify-center text-wood-light hover:text-white transition-all duration-200 z-20"
              >
                <X size={18} />
              </motion.button>

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={bathType.image}
                  alt={bathType.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-darkest via-wood-darkest/50 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-16">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-playfair text-3xl font-bold text-white mb-2"
                  >
                    {bathType.name}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center space-x-4 text-wood-light/90"
                  >
                    <div className="flex items-center">
                      <span className="font-oswald text-xl font-bold text-accent-amber">
                        {bathType.price}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span className="font-medium text-sm">
                        {bathType.buildTime}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div
                className="p-6 overflow-y-auto"
                style={{ maxHeight: "calc(90vh - 264px - 100px)" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <p className="text-wood-light/90 text-base leading-relaxed font-inter">
                    {bathType.detailedDescription || bathType.description}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-wood-light/5 rounded-xl p-5 border border-wood-light/10"
                    >
                      <h3 className="font-oswald text-lg font-bold text-white mb-4">
                        Характеристики
                      </h3>
                      <div className="space-y-3">
                        {bathType.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-accent-amber rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-wood-light font-inter text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {bathType.benefits && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-wood-light/5 rounded-xl p-5 border border-wood-light/10"
                      >
                        <h3 className="font-oswald text-lg font-bold text-white mb-4">
                          Преимущества
                        </h3>
                        <div className="space-y-2">
                          {bathType.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-accent-copper rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                              <span className="text-wood-light text-sm font-inter leading-relaxed">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {bathType.materials && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-wood-light/5 rounded-xl p-5 border border-wood-light/10"
                      >
                        <h3 className="font-oswald text-lg font-bold text-white mb-4">
                          Материалы
                        </h3>
                        <div className="space-y-2">
                          {bathType.materials.map((material, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-wood-light/60 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-wood-light text-sm font-inter">
                                {material}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {bathType.included && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-wood-light/5 rounded-xl p-5 border border-wood-light/10"
                      >
                        <h3 className="font-oswald text-lg font-bold text-white mb-4">
                          В комплекте
                        </h3>
                        <div className="space-y-2">
                          {bathType.included.map((item, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                              <span className="text-wood-light text-sm font-inter leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="sticky bottom-0 p-6 bg-wood-darkest border-t border-wood-light/20"
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  <motion.button
                    onClick={scrollToCalculator}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-accent-amber to-accent-copper text-white py-3 px-6 rounded-xl font-oswald font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Рассчитать стоимость
                  </motion.button>

                  <motion.button
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-wood-light/10 text-wood-light py-3 px-6 rounded-xl font-oswald font-semibold border border-wood-light/20 hover:border-wood-light/40 hover:bg-wood-light/20 transition-all duration-300"
                  >
                    Консультация
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
