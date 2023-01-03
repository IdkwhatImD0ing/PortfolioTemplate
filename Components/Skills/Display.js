import React from 'react';
import {Box, Grid, Stack, Typography} from '@mui/material';
import {SkillBars} from 'react-skills';

const programmingLanguages = [
  {name: 'JavaScript', level: 100, color: '#8B8000'},
  {name: 'Python', level: 95, color: 'blue'},
  {name: 'C/C++', level: 90, color: 'red'},
  {name: 'Haskell', level: 80, color: 'green'},
  {name: 'Java', level: 70, color: 'orange'},
  {name: 'Dart', level: 60, color: 'darkblue'},
];

const frameworks = [
  {name: 'React', level: 100, color: 'lightblue'},
  {name: 'NextJs', level: 90, color: 'gray'},
  {name: 'Flask', level: 85, color: 'blue'},
  {name: 'Express.js', level: 80, color: '#8B8000'},
  {name: 'Node.js', level: 70, color: 'green'},
];

const databases = [
  {name: 'Firebase', level: 95, color: 'orange'},
  {name: 'PostgreSQL', level: 80, color: 'darkblue'},
];

const libraries = [
  {name: 'Material-UI', level: 100, color: 'lightblue'},
  {name: 'Tensorflow', level: 90, color: 'orange'},
  {name: 'Keras', level: 80, color: 'red'},
  {name: 'Pandas', level: 70, color: 'darkblue'},
  {name: 'NumPy', level: 70, color: '#8B8000'},
  {name: 'Matplotlib', level: 60, color: 'green'},
];

export default function Display() {
  return (
    <Box
      height="90vh"
      width="100%"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',

        position: 'absolute',
        top: 0,
        left: 0,

        paddingTop: '10vh',
      }}
    >
      <Stack direction="column" width="80%" spacing={5}>
        <Typography variant="h3" color="white" align="center">
          Skills
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Typography variant="h6" color="white" align="center">
              Languages
            </Typography>
            <SkillBars skills={programmingLanguages} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h6" color="white" align="center">
              Frameworks
            </Typography>
            <SkillBars skills={frameworks} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h6" color="white" align="center">
              Databases
            </Typography>
            <SkillBars skills={databases} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h6" color="white" align="center">
              Libraries
            </Typography>
            <SkillBars skills={libraries} />
          </Grid>
        </Grid>
        <Box height="10vh" />
      </Stack>
    </Box>
  );
}
