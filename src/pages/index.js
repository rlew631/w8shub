// import {Navbar, Hero, Section, Testimonial, ContactUs, Footer, AboutUs} from '@/components'
import Navbar from "@/components/navbar"
import Hero from "@/components/Hero"
import Section from "@/components/Section"
import Testimonial from "@/components/Testimonial"
import ContactUs from "@/components/Contact"
import Footer from "@/components/Footer"
import AboutUs from "@/components/AboutUs"
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
      <Navbar />
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
