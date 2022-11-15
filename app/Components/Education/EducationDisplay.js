import React from 'react';
import Image from 'next/image';
import {Box, Stack, Typography} from '@mui/material';

export default function EducationDisplay() {
  return (
    <Box
      height="100vh"
      width="100vw"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={5}
      >
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography>Lynbrook High School</Typography>
          <Typography>Dates: 2016-2020</Typography>
        </Stack>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography>University of California: Santa Cruz</Typography>
          <Typography>Dates: 2020-2023</Typography>
          <Typography>Major: Computer Science BS</Typography>
          <Typography>
            Areas of Focus: Full-Stack Web Dev, Machine Learning
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
