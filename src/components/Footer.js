import React from 'react';
import { AppBar, Typography, Link, Button, Box } from '@mui/material';

const Footer = () => {

  return (
    <AppBar sx={{flexGrow: 1}} 
      position="relative"
      className='footerContainer'
      display="flex"
    >
      <Box alignSelf="flex-end">
        <Typography>
          Developed by{' '}
          <Link href="https://ryanlewisengineering.com" target="_blank" underline="none">
            Ryan Lewis
          </Link>
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Footer;