import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from '../../components/navbar'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar page='ACCOUNT'/>
        THIS IS THE LOGIN PAGE
      </ThemeProvider>
    </>
  )
}