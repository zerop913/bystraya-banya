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
        <AdvantagesSection />
        <BathTypesSection />
        <CalculatorSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
