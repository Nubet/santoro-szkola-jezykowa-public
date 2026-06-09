import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Offer } from "@/components/sections/Offer";
import { Pricing } from "@/components/sections/Pricing";
import { LocationMapSection } from "@/components/sections/LocationMapSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offer />
        <Pricing />
        <LocationMapSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
