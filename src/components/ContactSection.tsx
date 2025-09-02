"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useScrollAnimation";
import { useRef, useState } from "react";
import { siteData } from "@/data/siteData";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useIntersectionObserver(
    sectionRef,
    undefined,
    "contact-section"
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    // Ограничиваем длину
    if (value.length > 11) value = value.slice(0, 11);

    // Форматируем номер
    if (value.length > 0) {
      if (value.startsWith("8")) value = "7" + value.slice(1);
      if (!value.startsWith("7")) value = "7" + value;
    }

    let formattedValue = value;
    if (value.length > 1) {
      formattedValue = `+${value[0]} (${value.slice(1, 4)}`;
      if (value.length > 4) formattedValue += `) ${value.slice(4, 7)}`;
      if (value.length > 7) formattedValue += `-${value.slice(7, 9)}`;
      if (value.length > 9) formattedValue += `-${value.slice(9, 11)}`;
    }

    setFormData((prev) => ({
      ...prev,
      phone: formattedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Здесь будет отправка формы
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Сброс формы после отправки
    setFormData({ name: "", phone: "", comment: "" });
    setIsSubmitting(false);

    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-wood-dark to-wood-darkest relative overflow-hidden"
    >
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-amber rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-copper rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-wood-medium rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Заголовок в едином стиле */}
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
              className="text-6xl md:text-8xl lg:text-9xl font-black text-accent-amber/30 select-none leading-tight"
            >
              КОНТАКТЫ
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
            {siteData.contact.subtitle}
          </motion.p>
        </motion.div>

        {/* Форма обратной связи */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-wood-light/10 backdrop-blur-sm rounded-2xl p-8 border border-wood-light/20 shadow-2xl hover:bg-wood-light/15 transition-all duration-300">
            <h3 className="font-playfair text-2xl font-bold text-white mb-6 text-center">
              Оставьте заявку на консультацию
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-wood-light font-inter mb-2"
                  >
                    {siteData.contact.form.nameLabel} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={siteData.contact.form.namePlaceholder}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-wood-light/60 focus:border-accent-amber focus:outline-none focus:ring-2 focus:ring-accent-amber/20 transition-all duration-300 font-inter"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-wood-light font-inter mb-2"
                  >
                    {siteData.contact.form.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder={siteData.contact.form.phonePlaceholder}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-wood-light/60 focus:border-accent-amber focus:outline-none focus:ring-2 focus:ring-accent-amber/20 transition-all duration-300 font-inter"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-wood-light font-inter mb-2"
                >
                  {siteData.contact.form.commentLabel}
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder={siteData.contact.form.commentPlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-wood-light/60 focus:border-accent-amber focus:outline-none focus:ring-2 focus:ring-accent-amber/20 transition-all duration-300 resize-none font-inter"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-accent-amber to-accent-copper text-white px-8 py-4 rounded-xl font-oswald font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Отправляем...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send size={20} className="mr-3" />
                    {siteData.contact.form.submitButton}
                  </div>
                )}
              </motion.button>

              <p className="text-wood-light/60 text-sm font-inter text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
