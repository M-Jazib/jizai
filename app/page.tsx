import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import TechStack from "./sections/TechStack"
import Services from "./sections/Services"
import Packages from "./sections/Packages" 
import Projects from "./sections/Projects"
import Process from "./sections/Process"
import About from "./sections/About"
import WhyJizAI from "./sections/WhyJizAI"
import CTA from "./sections/CTA"
import Contact from "./sections/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Packages /> 
      <Projects />
      <Process />
      <About />
      <WhyJizAI />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
