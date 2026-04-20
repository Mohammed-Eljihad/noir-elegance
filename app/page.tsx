import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { EditorialShowcase } from "@/components/sections/EditorialShowcase";
import { FeaturedFragrances } from "@/components/sections/FeaturedFragrances";
import { BrandStory } from "@/components/sections/BrandStory";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <Hero />
        <EditorialShowcase />
        <FeaturedFragrances />
        <BrandStory />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
