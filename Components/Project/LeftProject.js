import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
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
    width: `${windowWidth * 0.4}`,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Stack
      direction="row"
      spacing={5}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        paddingLeft: '5vw',
        paddingRight: '5vw',
      }}
    >
      {windowHeight && <YouTube videoId={props.code} opts={opt} />}

      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h3" align="center">
          {props.name}
        </Typography>
        <Typography variant="h6">{props.description}</Typography>
        <Typography variant="h6" align="center">
          Demo Link: <a href={props.link}>{props.link}</a>
        </Typography>
        <Typography variant="h6" align="center">
          Github: <a href={props.link}>{props.github}</a>
        </Typography>
      </Stack>
    </Stack>
  );
}
