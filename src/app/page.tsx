import { AboutSection } from "@/components/about-section/about-section";
import { BenefitsSection } from "@/components/benefits-section/benefits-section";
import { FilmOptionsSection } from "@/components/film-options-section/film-options-section";
import { FinalCtaSection } from "@/components/final-cta-section/final-cta-section";
import { GallerySection } from "@/components/gallery-section/gallery-section";
import { HeroSection } from "@/components/hero-section/hero-section";
import { ProcessSection } from "@/components/process-section/process-section";
import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { SiteFooter } from "@/components/site-footer/site-footer";
import { SiteHeader } from "@/components/site-header/site-header";
import { SolutionDetailSection } from "@/components/solution-detail-section/solution-detail-section";
import { StudioCreditSection } from "@/components/studio-credit-section/studio-credit-section";
import { TestimonialSection } from "@/components/testimonial-section/testimonial-section";

const Home = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ScrollReveal>
          <BenefitsSection />
        </ScrollReveal>
        <ScrollReveal>
          <SolutionDetailSection />
        </ScrollReveal>
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <StudioCreditSection variant="craft" />
        </ScrollReveal>
        <ScrollReveal>
          <GallerySection />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProcessSection />
        </ScrollReveal>
        <ScrollReveal>
          <StudioCreditSection variant="growth" />
        </ScrollReveal>
        <ScrollReveal>
          <FilmOptionsSection />
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
};

export default Home;
