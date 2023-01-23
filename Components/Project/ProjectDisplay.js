import React from 'react';

import {Box, Stack, Typography} from '@mui/material';
import RightProject from './RightProject';
import LeftProject from './LeftProject';
import {animated, useSpring} from '@react-spring/web';
import Projects from './projects';

export default function ProjectDisplay() {
  const fadeIn = useSpring({
    from: {y: -100, opacity: 0},
    to: {y: 0, opacity: 1},
  });
  return (
    <Box
      width="100%"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',

        position: 'absolute',
        top: 0,
        left: 0,

        paddingTop: '10vh',
        paddingBottom: '20vh',
        overflow: 'hidden',
      }}
    >
      <Stack direction="column" width="100%" spacing={10} sx={{}}>
        <animated.div style={{...fadeIn}}>
          <Typography variant="h3" align="center" color="white">
            Personal Projects
          </Typography>
        </animated.div>
        {Projects.map((project, index) => {
          if (index % 2 == 0) {
            return (
              <LeftProject
                key={index}
                name={project.name}
                description={project.description}
                techStack={project.techStack}
                code={project.code}
                link={project.link}
                github={project.github}
              />
            );
          } else {
            return (
              <RightProject
                key={index}
                name={project.name}
                description={project.description}
                techStack={project.techStack}
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
