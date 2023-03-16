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
      <Button variant="contained" href="https://ryanlewisengineering.com">
        Developed by Ryan Lewis
        {/* <Typography>
          Developed by{' '}
          <Link href="https://ryanlewisengineering.com" target="_blank" underline="none">
            Ryan Lewis
          </Link>
        </Typography> */}
      </Button>
      </Box>
    </AppBar>
  );
};

export default Footer;