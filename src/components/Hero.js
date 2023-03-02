import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';

import Image from 'next/image'

const Hero = () => {

  return (
    <Box className='heroBox'>
      <Grid container spacing={6} className='gridContainer'>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className='title'>
            Unlock the Power of AI
          </Typography>
          <Typography variant="h6" className='subtitle'>
            Discover, Compare and Interact with Confidence
          </Typography>
          {/* <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            HIRE US
          </Button> */}
        </Grid>
        <Grid item xs={12} md={5}>
          <Image src='/blue_brain.png' width="600" height="500" alt="knowledge"/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;