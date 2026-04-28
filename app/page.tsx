import { Navbar } from "@/components/navbar";
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
import { Solution } from "@/sections/solution";
import { Testimonials } from "@/sections/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <SocialProof />
        <CaseStudies />
        <Testimonials />
        <Process />
        <Benefits />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
