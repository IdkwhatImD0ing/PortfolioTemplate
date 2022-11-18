import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

export default function EducationDisplay() {
  return (
    <Box
      height="100vh"
      width="100vw"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Typography
        color="white"
        variant="h2"
        sx={{
          mb: 2,
        }}
      >
        Education:
      </Typography>
      <Typography
        color="white"
        sx={{
          mb: 1,
        }}
      >
        Major: Computer Science BS
      </Typography>
      <Typography
        color="white"
        sx={{
          mb: 10,
        }}
      >
        Areas of Focus: Full-Stack Web Dev, Machine Learning
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        spacing={20}
      >
        <Stack
          width="30%"
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={5}
        >
          <Box
            component="img"
            src="/lynbrook.png"
            width="300px"
            height="300px"
            alt="lynbrook logo"
          />
          <Typography color="white" variant="h3" align="center">
            Lynbrook High School
          </Typography>
          <Typography color="white" align="center">
            Dates: 2016-2020
          </Typography>
        </Stack>
        <Stack
          width="30%"
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={5}
        >
          <Box
            component="img"
            src="/ucsc.png"
            width="300px"
            height="300px"
            alt="ucsc logo"
          />
          <Typography color="white" variant="h3" align="center">
            University of California: Santa Cruz
          </Typography>
          <Typography color="white" align="center">
            Dates: 2020-2023
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
