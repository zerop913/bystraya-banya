"use client";

import { siteData } from "@/data/siteData";
import { scrollToElement } from "@/lib/utils";
import { ArrowDown, Star, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const AnimatedCounter = ({
    end,
    duration = 2,
  }: {
    end: number;
    duration?: number;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!mounted) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      const timer = setTimeout(() => {
        requestAnimationFrame(animate);
      }, 1000);

      return () => clearTimeout(timer);
    }, [end, duration, mounted]);

    return <span>{count}</span>;
  };
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Интерьер русской бани"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-wood-darkest/70"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-amber/20 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              scale: 0,
            }}
            animate={{
              y: [null, -15, 15, -8, 0],
              scale: [0, 0.8, 0.3, 0.8, 0.5],
              opacity: [0, 0.6, 0.2, 0.7, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="flex items-center justify-start">
            <motion.div
              className="max-w-4xl w-full pr-0 sm:pr-4 lg:pr-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="h-px bg-accent-amber mr-4"
                  initial={{ width: 0 }}
                  animate={{ width: "3rem" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <span className="font-oswald text-accent-amber tracking-widest text-sm">
                  СТРОИТЕЛЬСТВО БАНЬ
                </span>
              </motion.div>

              <motion.h1
                className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-wood-light mb-6 leading-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  БЫСТРАЯ
                </motion.span>
                <motion.span
                  className="block text-accent-amber ml-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 32 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  БАНЯ
                </motion.span>
              </motion.h1>

              <motion.div
                className="relative mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <h2 className="font-oswald text-xl md:text-2xl text-wood-light/90 mb-2">
                  {siteData.hero.subtitle}
                </h2>
                <motion.div
                  className="h-1 bg-accent-amber mb-6"
                  initial={{ width: 0 }}
                  animate={{ width: "6rem" }}
                  transition={{ duration: 1, delay: 1.1 }}
                />

                <div className="flex flex-wrap gap-8 text-wood-light/80 mb-8">
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  >
                    <Clock className="w-5 h-5 mr-2 text-accent-amber" />
                    <span className="font-manrope">
                      Строим за{" "}
                      <span className="text-accent-amber font-semibold">
                        <AnimatedCounter end={30} duration={2} /> дней
                      </span>
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                  >
                    <Award className="w-5 h-5 mr-2 text-accent-amber" />
                    <span className="font-manrope">
                      Гарантия{" "}
                      <span className="text-accent-amber font-semibold">
                        <AnimatedCounter end={3} duration={1.5} /> года
                      </span>
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.p
                className="font-manrope text-xl text-wood-light/80 mb-12 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                {siteData.hero.description}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.9 }}
              >
                <motion.button
                  onClick={() => scrollToElement("calculator")}
                  className="btn-primary text-lg px-8 py-4 group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">
                    {siteData.hero.buttons.primary}
                  </span>
                  <div className="absolute inset-0 bg-accent-copper transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>

                <motion.button
                  onClick={() => scrollToElement("projects")}
                  className="btn-secondary text-lg px-8 py-4 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="group-hover:mr-2 transition-all duration-300">
                    {siteData.hero.buttons.secondary}
                  </span>
                  <ArrowDown className="inline-block w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="hidden sm:flex absolute bottom-8 z-20 w-full justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.button
          onClick={() => scrollToElement("advantages")}
          className="flex flex-col items-center text-wood-light/60 hover:text-accent-amber transition-colors duration-300 group"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="font-manrope text-xs mb-2 tracking-widest">
            ЛИСТАЙТЕ ВНИЗ
          </span>
          <motion.div
            className="w-px bg-wood-light/40 mb-2"
            initial={{ height: 0 }}
            animate={{ height: "2rem" }}
            transition={{ duration: 1, delay: 2.7 }}
          />
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </motion.button>
      </motion.div>
    </section>
  );
}
