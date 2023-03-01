import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';

const AboutUs = () => {

  return (
    <Box className='aboutUsContainer'>
      <Grid container spacing={6} className='gridContainer'>
        <Grid item xs={12} md={5}>
          <img src='/bestTeams.jpg' alt="My Team" className='largeImage' />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className='title'>
            We build, We revive
          </Typography>
          <Typography className='aboutUsSubtitle'>
            Your business needs to be in safe hands at all times. We ensure you
            never run out of customers and not run at loss. We are trusted by
            over 500+ companies to deliver quality marketing campaigns using
            Digital marketing & Offline marketing channels.
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