import Header from "./components/componentes-principales/Header";
import Hero from "./components/componentes-principales/Hero";
import SimpleHuman from "./components/componentes-principales/SimpleHuman";
import Services from "./components/componentes-principales/Services";
import Consultation from "./components/componentes-principales/Consultation";
import Flexibility from "./components/componentes-principales/Flexibility";
import Testimonials from "./components/componentes-principales/Testimonials";
import Partners from "./components/componentes-principales/Partners";
import Blog from "./components/componentes-principales/Blog";
import CTA from "./components/componentes-principales/CTA";
import Footer from "./components/componentes-principales/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SimpleHuman />
      <Services />
      <Consultation />
      <Flexibility />
      <Testimonials />
      <Partners />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
