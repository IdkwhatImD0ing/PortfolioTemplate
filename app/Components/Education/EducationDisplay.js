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
        width="80%"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={5}
        >
          <Image src="/lynbrook.png" width={200} height={200} />
          <Typography color="white" variant="h3">
            Lynbrook High School
          </Typography>
          <Typography color="white">Dates: 2016-2020</Typography>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={5}
        >
          <Image src="/ucsc.png" width={300} height={300} />
          <Typography color="white" variant="h3">
            University of California: Santa Cruz
          </Typography>
          <Typography color="white">Dates: 2020-2023</Typography>
          <Typography color="white">Major: Computer Science BS</Typography>
          <Typography color="white">
            Areas of Focus: Full-Stack Web Dev, Machine Learning
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
