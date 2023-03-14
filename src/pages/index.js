import { useState } from 'react';

// import {Navbar, Hero, Section, Testimonial, ContactUs, Footer, AboutUs} from '@/components'
import Navbar from "@/components/Navbar"
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

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {

  // dark mode toggle stuff
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar page='HOME' darkMode={darkMode} toggleDarkMode={setDarkMode}/>
      <Hero />
      <Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </ThemeProvider>

  );
}

export default App;
