import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  // const date = new Date().getFullYear();

  return (
    <Box sx={{ flexGrow: 1 }} className='footerContainer'>
      <Typography className='footerText'>
        Developed by{' '}
        <Link href="https://ryanlewisengineering.com" target="_blank" underline="none">
          Ryan Lewis
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;