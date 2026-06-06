import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[var(--background)] transition-colors duration-300">
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
