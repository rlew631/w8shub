import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import Image from 'next/image'

const AboutUs = () => {

  return (
    <Box className='aboutUsContainer'>
      <Grid container spacing={6} className='gridContainer'>
        <Grid item xs={12} md={5}>
          <Image
            // loader={myLoader}
            src='/vetruvian_pose.jpg'
            alt="vetruvian man pose estimation"
            width={400}
            height={400}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={600} className='title'>
            We see, We build, We learn
          </Typography>
          <Typography className='aboutUsSubtitle'>
            Your AI needs to suit the needs of your business. We ensure you
            are able to fully comprehend the differences between various SOTA models.
            We are developed by industry professionals who have first hand experience
            working with the tools you need for your inference applications.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
            href='#contact'
          >
            CONTACT
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;