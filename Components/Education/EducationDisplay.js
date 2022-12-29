import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

export default function EducationDisplay() {
  return (
    <Box
      height="100%"
      width="100%"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',

        position: 'absolute',
        top: 0,
        left: 0,

        overflow: 'hidden',
        paddingTop: '10vh',
      }}
    >
      <Typography
        color="white"
        variant="h3"
        sx={{
          mb: 2,
        }}
      >
        Education
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
            sx={{
              transition: 'transform 0.3s ease',
              perspective: '1000px',
              '&:hover': {
                animation: 'flip 5s ease-in-out infinite',
              },

              '@keyframes flip': {
                '0%': {
                  transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
                },
                '50%': {
                  transform:
                    'rotateX(-180deg) rotateY(-180deg) rotateZ(-180deg)',
                },
                '100%': {
                  transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
                },
              },
            }}
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
            sx={{
              transition: 'transform 0.3s ease',
              perspective: '1000px',
              '&:hover': {
                animation: 'flip 5s ease-in-out infinite',
              },

              '@keyframes flip': {
                '0%': {
                  transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
                },
                '50%': {
                  transform: 'rotateX(180deg) rotateY(-180deg) rotateZ(180deg)',
                },
                '100%': {
                  transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
                },
              },
            }}
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
