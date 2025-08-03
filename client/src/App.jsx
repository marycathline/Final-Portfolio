import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans scroll-smooth ">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="services"><Services /></section>
        <section id="faq"><FAQ /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
