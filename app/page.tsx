import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "@/components/Education";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Patent from "../components/Patent";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certifications />
      <Patent />
      <Contact />
      <Footer />

    </main>
  );
}