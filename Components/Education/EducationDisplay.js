import React from 'react';
import {Box, Grid, Stack, Typography} from '@mui/material';
import {animated, useSpring} from 'react-spring';

export default function EducationDisplay() {
  const fadeIn = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
  });

  const zoomLeft = useSpring({
    from: {x: -300, opacity: 0},
    to: {x: 0, opacity: 1},
  });

  const zoomRight = useSpring({
    from: {x: 300, opacity: 0},
    to: {x: 0, opacity: 1},
  });
  return (
    <Box
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
      <animated.div style={{...fadeIn}}>
        <Typography
          color="white"
          variant="h3"
          sx={{
            mb: 2,
          }}
        >
          Education
        </Typography>
      </animated.div>
      <animated.div style={{...zoomLeft}}>
        <Typography
          color="white"
          sx={{
            mb: 1,
          }}
        >
          Major: Computer Science BS
        </Typography>
      </animated.div>
      <animated.div style={{...zoomRight}}>
        <Typography
          color="white"
          sx={{
            mb: 10,
          }}
        >
          Areas of Focus: Full-Stack Web Dev, Machine Learning
        </Typography>
      </animated.div>
      <Grid container spacing={2} width="80%">
        <Grid item md={6} xs={12}>
          <animated.div style={{...fadeIn}}>
            <Stack
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
          </animated.div>
        </Grid>
        <Grid item md={6} xs={12}>
          <animated.div style={{...fadeIn}}>
            <Stack
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
                      transform:
                        'rotateX(180deg) rotateY(-180deg) rotateZ(180deg)',
                    },
                    '100%': {
                      transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
                    },
                  },
                }}
              />
              <Typography color="white" variant="h4" align="center">
                University of California
              </Typography>
              <Typography color="white" variant="h5" align="center">
                Santa Cruz
              </Typography>
              <Typography color="white" align="center">
                Dates: 2020-2023
              </Typography>
            </Stack>
          </animated.div>
        </Grid>
      </Grid>
      <Box height="10vh" />
    </Box>
  );
}
