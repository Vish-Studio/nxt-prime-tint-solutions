import { AboutSection } from "@/components/about-section/AboutSection";
import { BenefitsSection } from "@/components/benefits-section/BenefitsSection";
import { FilmOptionsSection } from "@/components/film-options-section/FilmOptionsSection";
import { FinalCtaSection } from "@/components/final-cta-section/FinalCtaSection";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { ProcessSection } from "@/components/process-section/ProcessSection";
import { SiteFooter } from "@/components/site-footer/SiteFooter";
import { SiteHeader } from "@/components/site-header/SiteHeader";
import { ScrollReveal } from "@/components/scroll-reveal/ScrollReveal";
import { TestimonialSection } from "@/components/testimonial-section/TestimonialSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ScrollReveal>
          <BenefitsSection />
        </ScrollReveal>
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <FilmOptionsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProcessSection />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialSection />
        </ScrollReveal>
        <ScrollReveal>
          <FinalCtaSection />
        </ScrollReveal>
      </main>
      <ScrollReveal>
        <SiteFooter />
      </ScrollReveal>
    </>
  );
}
