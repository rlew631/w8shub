// import {Navbar, Hero, Section, Testimonial, ContactUs, Footer, AboutUs} from '@/components'
import Navbar from "@/components/navbar"
import Hero from "@/components/landing/Hero"
import Section from "@/components/landing/Section"
import Testimonial from "@/components/landing/Testimonial"
import ContactUs from "@/components/landing/Contact"
import Footer from "@/components/Footer"
import AboutUs from "@/components/landing/AboutUs"
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar page='HOME'/>
      <Hero />
      <Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </ThemeProvider>
    </>

  );
}

export default App;
