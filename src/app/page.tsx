import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Teaching from "@/components/Teaching";
import Projects from "@/components/Projects";
import Demos from "@/components/Demos";
import Research from "@/components/Research";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Teaching />
        <Projects />
        <Demos />
        <Research />
        <Blog />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
