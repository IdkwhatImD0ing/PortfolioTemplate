import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import DisplayPaper from './DisplayPaper';
import TableDisplay from './TableDisplay';

const programmingLanguages = [
  'C/C++',
  'Java',
  'JavaScript',
  'Python',
  'Haskell',
  'Dart',
];

const frameworks = ['React', 'Node.js', 'Express.js', 'Django', 'Flask'];

const databases = ['MongoDB', 'Firebase'];

const libraries = [
  'Material-UI',
  'Tensorflow',
  'Keras',
  'Pandas',
  'NumPy',
  'Matplotlib',
];

export default function Display() {
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

        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h3"
        color="white"
        sx={{
          position: 'absolute',
          top: '10vh',
        }}
      >
        Skills
      </Typography>
      <Stack
        width="100%"
        spacing={5}
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{
          paddingLeft: '10vw',
          paddingRight: '10vw',
        }}
      >
        <DisplayPaper height="30vh" name="Programming Languages">
          <TableDisplay fields={programmingLanguages} />
        </DisplayPaper>
        <DisplayPaper height="50vh" name="Frameworks">
          <TableDisplay fields={frameworks} />
        </DisplayPaper>
        <DisplayPaper height="50vh" name="Libraries">
          <TableDisplay fields={libraries} />
        </DisplayPaper>
        <DisplayPaper height="30vh" name="Databases">
          <TableDisplay fields={databases} />
        </DisplayPaper>
      </Stack>
    </Box>
  );
}
