import {Box, Stack, Typography} from '@mui/material';
import Typer from './Typewriter';

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
      <Stack maxWidth="80vw" direction="column" alignItems="center">
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
          I am a Third Year Undergrad at UC Santa Cruz, studying Computer
          Science with a focus on Machine Learning and Full-Stack Web
          Development. I am a Full-Stack Developer with experience in React,
          NextJs, NodeJs, ExpressJs, Flask, and PostGreSQL. I also have
          experience in Applied Machine Learning through personal projects and
          Kaggle Competitions.
        </Typography>
      </Stack>
    </Box>
  );
}
