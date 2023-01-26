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
      alignItems="center"
      justifyContent="center"
    >
      <div ref={triggerRef} />
      {windowHeight && (
        <Grid item xs={6}>
          <animated.div style={{...fadeRight}}>
            <Box alignItems="center" padding="5%">
              <YouTube videoId={props.code} opts={opt} loading="lazy" />
            </Box>
          </animated.div>
        </Grid>
      )}
      <Grid item xs={6}>
        <animated.div style={{...fadeLeft}}>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            padding="5%"
          >
            <Box
              sx={{
                marginTop: 0,
                alignItems: 'center',
                backdropFilter: 'blur(10px)',
                boxShadow: '0px 0px 10px #000000',
                padding: '10%',
                backgroundColor: 'rgba(255, 255, 255, 0.375)',
                borderRadius: 10,
                transform: 'scale(1)',
                transition: 'transform 0.5s',

                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="h3" align="center" sx={{mb: 5}}>
                {props.name}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                }}
              >
                {props.description}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography variant="h6" sx={{mb: 2, fontWeight: 'bold'}}>
                  Technologies Used:
                </Typography>
                {props.techStack.map((tech) => (
                  <Typography variant="h6" sx={{mb: 2}}>
                    {tech}
                  </Typography>
                ))}
              </Stack>
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
                  }}
                >
                  <Typography
                    variant="h7"
                    align="center"
                    sx={{
                      textTransform: 'none',
                    }}
                  >
                    Demo
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  onClick={() => window.open(props.github)}
                  sx={{
                    borderRadius: 50,
                  }}
                >
                  <Typography
                    variant="h7"
                    align="center"
                    sx={{
                      textTransform: 'none',
                    }}
                  >
                    Github
                  </Typography>
                </Button>
              </Stack>
            </Box>
          </Stack>
        </animated.div>
      </Grid>
    </Grid>
  );
}
