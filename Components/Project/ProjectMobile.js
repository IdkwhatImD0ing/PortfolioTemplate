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
    height: `${windowHeight * 0.3}`,
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
        spacing={2}
        sx={{
          padding: '10%',
          marginTop: 0,
          alignItems: 'center',
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 0px 10px #000000',
          backgroundColor: 'rgba(255, 255, 255, 0.375)',
          borderRadius: 10,
        }}
      >
        <Typography variant="h3" align="center">
          {props.name}
        </Typography>
        {windowHeight && (
          <Box alignItems="center" padding="5%">
            <YouTube videoId={props.code} opts={opt} />
          </Box>
        )}
        <Typography variant="h6">{props.description}</Typography>
        <Typography variant="h6" sx={{fontWeight: 'bold'}}>
          Technologies Used:
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {props.techStack.map((tech, index) => (
            <Grid item xs={6} key={'gitem' + index}>
              <Box
                sx={{
                  padding: '5px 10px',
                  borderRadius: 2,
                  margin: '5px 10px',

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',

                  backgroundColor: '#301934',
                  color: '#fff',
                }}
              >
                <Typography variant="h7" align="center">
                  {tech}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
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
