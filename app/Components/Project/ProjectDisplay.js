import React from 'react';

import {Box, Stack, Typography} from '@mui/material';
import RightProject from './RightProject';
import LeftProject from './LeftProject';

import Projects from './projects';

export default function ProjectDisplay() {
  return (
    <Box
      width="100%"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#CBC3E3',
        position: 'absolute',
        top: 0,
        left: 0,

        paddingTop: '10vh',
        paddingBottom: '20vh',
      }}
    >
      <Stack direction="column" width="100%" spacing={10} sx={{}}>
        <Typography variant="h1" align="center">
          Personal Projects
        </Typography>
        {Projects.map((project, index) => {
          if (index % 2 == 0) {
            return (
              <LeftProject
                key={index}
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
