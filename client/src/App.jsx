import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from './components/Testimonials';
import TestimonialForm from './components/TestimonialForm';
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import { Route } from "lucide-react";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="services"><Services /></section>

        {/* 🔽 Combined Testimonials and Form in one section */}
        <section id="testimonials" className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <Testimonials />
            <div className="mt-12">
              <TestimonialForm />
            </div>
          </div>
        </section>

        <section id="faq"><FAQ /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <Route path="/gallery" element={<Gallery />} />


    </div>
  );
}

export default App;
