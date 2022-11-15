import React, {useState, useEffect, useRef} from 'react';

import {Box, Stack, Typography} from '@mui/material';
import Confetti from 'react-confetti';
import Topbar from '../Components/Topbar';
import LeftProject from '../Components/Project/LeftProject';
import RightProject from '../Components/Project/RightProject';

import Projects from '../source/projects';

export default function Project() {
  // Window height and width tracker
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const ref = useRef(null);

  // Update window height and width
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWindowHeight(ref.current.clientHeight);
      }

      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // Light purple background
        backgroundColor: '#CBC3E3',
        overflowX: 'hidden',
      }}
    >
      <Topbar />
      <Confetti width={windowWidth} height={windowHeight} />
      <Stack
        direction="column"
        width="100%"
        spacing={10}
        sx={{
          mt: '5%',
          paddingLeft: '5%',
          paddingRight: '5%',
        }}
      >
        <Typography variant="h1" align="center">
          Personal Projects
        </Typography>
        {Projects.map((project, index) => {
          if (index % 2 == 0) {
            return (
              <LeftProject
                key={index}
                key2={index}
                name={project.name}
                description={project.description}
                code={project.code}
                link={project.link}
                github={project.github}
              />
            );
          } else {
            return (
              <RightProject
                key={index}
                key2={index}
                name={project.name}
                description={project.description}
                code={project.code}
                link={project.link}
                github={project.github}
              />
            );
          }
        })}
      </Stack>
    </Box>
  );
}
