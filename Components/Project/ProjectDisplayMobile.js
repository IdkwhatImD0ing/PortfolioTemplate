import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import ProjectMobile from './ProjectMobile';
import Projects from './projects';

export default function ProjectDisplayMobile() {
  return (
    <Box
      width="100%"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,

        paddingTop: '10vh',
        paddingBottom: '20vh',
      }}
    >
      <Stack
        direction="column"
        width="100%"
        spacing={10}
        justifyContent="center"
        alignItems="center"
      >
        <Typography maxWidth="80%" variant="h3" align="center" color="white">
          Personal Projects
        </Typography>
        {Projects.map((project, index) => {
          return (
            <ProjectMobile
              key={index}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              code={project.code}
              link={project.link}
              github={project.github}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
