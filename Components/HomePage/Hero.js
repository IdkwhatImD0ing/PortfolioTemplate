import {Box, Stack, Typography} from '@mui/material';
import Typer from './Typewriter';
import {animated, useSpring} from '@react-spring/web';

export default function Hero() {
  const top = useSpring({
    from: {y: -100, opacity: 0},
    to: {y: 0, opacity: 1},
  });
  const bot = useSpring({
    from: {y: 100, opacity: 0},
    to: {y: 0, opacity: 1},
  });
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
        <animated.div
          style={{
            ...top,
          }}
        >
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
        </animated.div>
        <animated.div
          style={{
            ...top,
          }}
        >
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
        </animated.div>
        <animated.div
          style={{
            ...top,
          }}
        >
          <Typer />
        </animated.div>
        <animated.div
          style={{
            ...bot,
          }}
        >
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
        </animated.div>
      </Stack>
    </Box>
  );
}
