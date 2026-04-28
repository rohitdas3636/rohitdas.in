import { Navbar } from "@/components/navbar";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { InactivityPopup } from "@/components/inactivity-popup";
import { Agency } from "@/sections/agency";
import { Benefits } from "@/sections/benefits";
import { CaseStudies } from "@/sections/case-studies";
import { FinalCta } from "@/sections/final-cta";
import { Footer } from "@/sections/footer";
import { Faq } from "@/sections/faq";
import { Hero } from "@/sections/hero";
import { Problem } from "@/sections/problem";
import { Process } from "@/sections/process";
import { Services } from "@/sections/services";
import { SocialProof } from "@/sections/social-proof";
import { SocialMedia } from "@/sections/social-media";
import { Solution } from "@/sections/solution";
import { Testimonials } from "@/sections/testimonials";
import { TrustFactors } from "@/sections/trust-factors";
import { NoBrainerOffer } from "@/sections/no-brainer-offer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Agency />
        <Services />
        <SocialMedia />
        <SocialProof />
        <TrustFactors />
        <CaseStudies />
        <Testimonials />
        <Process />
        <NoBrainerOffer />
        <Benefits />
        <Faq />
        <FinalCta />
      </main>
      <InactivityPopup />
      <FloatingWhatsapp />
      <Footer />
    </>
  );
}
