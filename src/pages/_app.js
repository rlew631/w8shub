import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "@/components/Navbar"

import './styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

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
  
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save the new theme to local storage
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    setTheme(storedTheme || (prefersDarkMode ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Navbar
        page={router.pathname === '/' ? "HOME" : router.pathname.substring(1).toUpperCase()}
        theme={theme}
        onThemeChange={handleThemeChange}
      />
      <Component {...pageProps} theme={theme}/>
    </ThemeProvider>
  );
}