import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Stack, Typography} from '@mui/material';
import YouTube from 'react-youtube';

export default function ProjectMobile(props) {
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
    height: `${windowHeight * 0.4}`,
    width: `${windowWidth * 0.75}`,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Box
      width="100%"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        width="70%"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{
          padding: '10%',
          marginTop: 0,
          alignItems: 'center',
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 0px 10px #000000',
          backgroundColor: 'rgba(255, 255, 255, 0.375)',
        }}
      >
        <Typography variant="h3" align="center" sx={{mb: 5}}>
          {props.name}
        </Typography>
        {windowHeight && (
          <Box alignItems="center" padding="5%">
            <YouTube videoId={props.code} opts={opt} />
          </Box>
        )}
        <Typography
          variant="h6"
          sx={{
            mb: 2,
          }}
        >
          {props.description}
        </Typography>

        <Typography variant="h6" sx={{mb: 2, fontWeight: 'bold'}}>
          Technologies Used:
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {props.techStack.map((tech) => (
            <Grid item xs={6}>
              <Typography variant="h6" align="center" sx={{mb: 2}}>
                {tech}
              </Typography>
            </Grid>
          ))}
        </Grid>
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
      </Stack>
    </Box>
  );
}
