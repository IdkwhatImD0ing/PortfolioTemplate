import {Box, Stack, Typography} from '@mui/material'
import Typer from './Typewriter'

export default function HeroMobile() {
  return (
    <Box
      height="80vh"
      width="100%"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',

        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: '10vh',

        overflow: 'auto',
      }}
    >
      <Stack
        maxWidth="80vw"
        direction="column"
        alignItems="flex-start"
        sx={{
          paddingBottom: '10vh',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'pink',
            }}
          >
            Hello There!
          </Typography>
          <Typography
            variant="h3"
            align="center"
            sx={{
              animationName: 'wave',
              animationDuration: '2.1s',
              animationIterationCount: 'infinite',
              transformOrigin: '70% 70%',
              display: 'inline-block',

              '@keyframes wave': {
                '0%': {transform: 'rotate(0deg)'},
                '10%': {transform: 'rotate(14deg)'},
                '20%': {transform: 'rotate(-8deg)'},
                '30%': {transform: 'rotate(14deg)'},
                '40%': {transform: 'rotate(-4deg)'},
                '50%': {transform: 'rotate(10deg)'},
                '60%': {transform: 'rotate(0deg)'},
                '100%': {transform: 'rotate(0deg)'},
              },
            }}
          >
            👋🏻
          </Typography>
        </Stack>

        <Typography
          variant="h6"
          align="center"
          sx={{
            color: 'pink',
            mb: 2,
          }}
        >
          I&apos;m Bill Zhang
        </Typography>
        <Typer />
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            mt: 5,
          }}
        >
          As an MSCS student at USC, I combine Machine Learning and Full-Stack
          Web Development, orchestrating a symphony of code. The Developer in me
          crafts robust applications with tools like React, Vue, and Flask, each
          project a reflection of my skills. My journey in Machine Learning
          matures with each Kaggle Competition and innovative project I
          undertake. Feel free to explore further and connect with me below!
        </Typography>
      </Stack>
    </Box>
  )
}
