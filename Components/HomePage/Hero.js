import {Box, Stack, Typography} from '@mui/material';
import Topbar from '../Topbar';
import Typer from './Typewriter';
import Matrix from './Matrix';

export default function Hero() {
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
      <Stack maxWidth="60vw" direction="column" alignItems="center">
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: 'pink',
            mb: 2,
          }}
        >
          Hello There! I&apos;m Bill Zhang
        </Typography>
        <Typography
          align="center"
          sx={{
            color: 'white',
            fontFamily: 'sans-serif',
            fontWeight: '800',
            fontSize: '60px',
          }}
        >
          I&apos;m a passionate
        </Typography>
        <Typer />
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: 'white',
            mt: 5,
          }}
        >
          About I am currently a Third Year Undergrad at the University of
          California - Santa Cruz. Currently majoring in Computer Science with a
          focus in Machine Learning and Full-Stack Web Development. I consider
          myself a Full-Stack Developer with experience in React, NextJs,
          NodeJs, ExpressJs, Flask, and PostGres. I have considerable experience
          in Applied Machine Learning through the use of personal projects and
          Kaggle Competitions.
        </Typography>
      </Stack>
    </Box>
  );
}
