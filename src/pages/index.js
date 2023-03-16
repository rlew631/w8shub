// import {Navbar, Hero, Section, Testimonial, ContactUs, Footer, AboutUs} from '@/components'
import Footer from "@/components/Footer"

import Hero from "@/components/landing/Hero"
import Section from "@/components/landing/Section"
import Testimonial from "@/components/landing/Testimonial"
import ContactUs from "@/components/landing/Contact"
import AboutUs from "@/components/landing/AboutUs"

// import ColorPalette from '@/components/ColorPalette';

function App() {

  return (
    <>
      <Hero />
      <Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      {/* <ColorPalette /> */}
    </>

  );
}

export default App;
