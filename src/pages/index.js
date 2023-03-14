import { useState } from 'react';

// import {Navbar, Hero, Section, Testimonial, ContactUs, Footer, AboutUs} from '@/components'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import Hero from "@/components/landing/Hero"
import Section from "@/components/landing/Section"
import Testimonial from "@/components/landing/Testimonial"
import ContactUs from "@/components/landing/Contact"
import AboutUs from "@/components/landing/AboutUs"
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  return (
    <>
      <Hero />
      <Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>

  );
}

export default App;
