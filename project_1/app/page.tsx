import Hero from "@/components/hero/hero";
import AboutSection from "@/components/about/about-section";
import ExperienceSection from "@/components/experience/experience-section";
import FacilitiesSection from "@/components/facilities/facilities-section";
import TestimonialsSection from "@/components/testimonials/testimonials-section";
import CTASection from "@/components/cta/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans antialiased">
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
