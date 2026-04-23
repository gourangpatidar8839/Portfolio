import { PillNav } from "@/components/nav/PillNav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Stats } from "@/components/sections/Stats";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <PillNav />
      <main className="flex-1">
        <Hero />
        <Products />
        <About />
        <Skills />
        <FeaturedProjects />
        <Stats />
        <BlogTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
