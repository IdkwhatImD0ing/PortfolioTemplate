import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Stack, Typography} from '@mui/material';
import YouTube from 'react-youtube';

export default function LeftProject(props) {
  // Window height and width tracker
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

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
    <Grid container direction="row" alignItems="center" justifyContent="center">
      {windowHeight && (
        <Grid item xs={6}>
          <Box alignItems="center" padding="5%">
            <YouTube videoId={props.code} opts={opt} />
          </Box>
        </Grid>
      )}
      <Grid item xs={6}>
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
              <Typography variant="h6" sx={{mb: 2}}>
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
      </Grid>
    </Grid>
  );
}
