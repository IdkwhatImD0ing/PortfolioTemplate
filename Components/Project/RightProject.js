import React, {useEffect, useState, useRef} from 'react';
import {Box, Button, Grid, Stack, Typography} from '@mui/material';
import YouTube from 'react-youtube';
import {animated, useSpring} from 'react-spring';
import {useIntersectionObserver} from '../page';

export default function LeftProject(props) {
  // Window height and width tracker
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const fadeLeft = useSpring({
    from: {x: -100, opacity: 0},
    to: {
      x: dataRef?.isIntersecting ? 0 : -100,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
  });

  const fadeRight = useSpring({
    from: {x: 100, opacity: 0},
    to: {
      x: dataRef?.isIntersecting ? 0 : 100,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
  });

  // Update window height and width
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const opt = {
    height: `${windowHeight * 0.5}`,
    width: `${windowWidth * 0.45}`,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Grid
      container
      direction="row-reverse"
      alignItems="stretch"
      justifyContent="center"
    >
      {windowHeight && (
        <Grid item xs={6}>
          <animated.div style={{...fadeRight}}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingY: '20px',
                  paddingX: '30px',
                  borderRadius: 10,

                  backgroundColor: '#301934',
                  color: 'white',

                  mb: 1,
                }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Arial, sans-serif',
                  }}
                >
                  {props.name}
                </Typography>
              </Box>

              <Stack
                direction="row"
                alignitems="center"
                justifyContent="center"
                spacing={2}
              >
                {props.techStack.map((tech) => (
                  <Box
                    sx={{
                      padding: '5px 10px',
                      borderRadius: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',

                      backgroundColor: '#301934',
                      color: '#fff',
                    }}
                  >
                    <Typography variant="h7">{tech}</Typography>
                  </Box>
                ))}
              </Stack>

              <YouTube videoId={props.code} opts={opt} loading="lazy" />
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{
                  mb: 2,
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => window.open(props.link)}
                  sx={{
                    borderRadius: 50,
                    textTransform: 'none',
                  }}
                >
                  <Typography variant="h7" align="center">
                    Demo
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  onClick={() => window.open(props.github)}
                  sx={{
                    borderRadius: 50,
                    textTransform: 'none',
                  }}
                >
                  <Typography variant="h7" align="center">
                    Github
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </animated.div>
        </Grid>
      )}
      <Grid item xs={6}>
        <Box
          ref={triggerRef}
          sx={{
            position: 'relative',
            top: '50vh',
          }}
        />
        <animated.div style={{...fadeLeft, height: '100%'}}>
          <Stack
            height="100%"
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Box
              height="100%"
              maxWidth="35vw"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',

                marginTop: 0,
                alignItems: 'center',
                backdropFilter: 'blur(10px)',
                boxShadow: '0px 0px 10px #000000',
                padding: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.375)',
                borderRadius: 10,
                transform: 'scale(1)',
                transition: 'transform 0.5s',

                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontFamily: 'Montserrat',
                }}
              >
                {props.description}
              </Typography>
            </Box>
          </Stack>
        </animated.div>
      </Grid>
    </Grid>
  );
}
