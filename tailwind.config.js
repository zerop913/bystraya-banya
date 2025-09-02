/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        // Натуральные оттенки дерева
        wood: {
          light: "#F5E6D3", // Светлый березовый
          medium: "#D4A574", // Средний дуб
          dark: "#8B4513", // Темный орех
          darkest: "#3C2415", // Венге
        },
        // Хвойные зеленые тона
        pine: {
          light: "#A8C090", // Светлый хвойный
          medium: "#6B8E5A", // Средний хвойный
          dark: "#3E4A2F", // Темный хвойный
        },
        // Серо-каменные акценты
        stone: {
          light: "#E5E7EB", // Светлый камень
          medium: "#9CA3AF", // Средний камень
          dark: "#4B5563", // Темный камень
        },
        // Янтарные и медные акценты
        accent: {
          amber: "#F59E0B", // Янтарный
          copper: "#B45309", // Медный
          gold: "#F3B613", // Золотистый
        },
      },
      backgroundImage: {
        "wood-texture": "url('/wood-texture.jpg')",
        "hero-bg": "url('/hero-bg.jpg')",
        "contact-bg": "url('/contact-bg.jpg')",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
