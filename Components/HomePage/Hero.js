import {Box, Stack, Typography} from '@mui/material'
import Typer from './Typewriter'
import {animated, useSpring} from '@react-spring/web'

export default function Hero() {
  const topFirst = useSpring({
    from: {y: -100, opacity: 0},
    to: {y: 0, opacity: 1},
    delay: 0,
  })

  const top = useSpring({
    from: {y: -100, opacity: 0},
    to: {y: 0, opacity: 1},
    delay: 250,
  })
  const bot = useSpring({
    from: {y: -100, opacity: 0},
    to: {y: 0, opacity: 1},
    delay: 500,
  })
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
        <animated.div style={{...topFirst}}>
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
            I am an incoming Master of Science student in Computer Science at
            the University of Southern California, specializing in Artificial
            Intelligence. As a recent graduate from UC Santa Cruz, I have a
            strong foundation in Machine Learning and Full-Stack Web
            Development. My skills as a Full-Stack Developer encompass React,
            Vue, Flask, Express, and PostgreSQL. Additionally, I have applied my
            Machine Learning expertise through personal projects and Kaggle
            Competitions.
          </Typography>
        </animated.div>
      </Stack>
    </Box>
  )
}
