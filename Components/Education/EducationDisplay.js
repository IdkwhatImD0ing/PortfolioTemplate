import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

export default function EducationDisplay() {
  return (
    <Box
      height="100%"
      width="100%"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        position: 'absolute',
        top: 0,
        left: 0,

        overflow: 'hidden',
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
        maxHeight="60%"
        direction="row"
        justifyContent="space-around"
        spacing="20%"
      >
        <Stack
          width="30%"
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
        >
          <Box
            component="img"
            src="/lynbrook.png"
            width="200px"
            height="200px"
            alt="lynbrook logo"
          />
          <Typography color="white" variant="h4" align="center">
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
          justifyContent="flex-start"
          spacing={2}
        >
          <Box
            component="img"
            src="/ucsc.png"
            width="200px"
            height="200px"
            alt="ucsc logo"
          />
          <Typography color="white" variant="h4" align="center">
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
