import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import BathTypesSection from "@/components/BathTypesSection";
import CalculatorSection from "@/components/CalculatorSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <section id="advantages" aria-label="Наши преимущества">
          <AdvantagesSection />
        </section>
        <section id="bath-types" aria-label="Типы бань и саун">
          <BathTypesSection />
        </section>
        <section id="calculator" aria-label="Калькулятор стоимости">
          <CalculatorSection />
        </section>
        <section id="projects" aria-label="Наши проекты">
          <ProjectsSection />
        </section>
        <section id="process" aria-label="Процесс строительства">
          <ProcessSection />
        </section>
        <section id="contact" aria-label="Контакты">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
