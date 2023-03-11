import React from 'react';
import { Grid, Typography, Box, Card, CardContent} from '@mui/material';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';

const Section = () => {

  const sectionItems = [
    {
      id: 1,
      icon: <EngineeringOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Demystifying AI in plain English',
    },
    {
      id: 2,
      icon: <AllInclusiveIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Through interactive tools learn how models compare to eachother',
    },
    {
      id: 3,
      icon: <PermDataSettingIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Get useful figures to convey hard data in an intuitive manner',
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, height: '100%', minHeight: '400px'}}>
      <Grid container spacing={2} className='sectionGridContainer'>
        {sectionItems.map((item) => (
          <Grid item sm={6} md={4} key={item.id}>
            <Card className='sectionGridItem'>
              {item.icon}
              <Typography>{item.sentence}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;