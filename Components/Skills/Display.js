import React, {useContext} from 'react'
import {Box, Grid, Stack, Typography} from '@mui/material'
import {SkillBars} from 'react-skills'
import {animated, useSpring} from 'react-spring'
import {WidthContext} from '../page'

const programmingLanguages = [
  {name: 'JavaScript', level: 100, color: '#8B8000'},
  {name: 'Python', level: 95, color: 'blue'},
  {name: 'C/C++', level: 90, color: 'red'},
  {name: 'Haskell', level: 80, color: 'green'},
  {name: 'Java', level: 70, color: 'orange'},
  {name: 'Dart', level: 60, color: 'darkblue'},
]

const frameworks = [
  {name: 'React', level: 100, color: 'lightblue'},
  {name: 'NextJs', level: 90, color: 'gray'},
  {name: 'Flask', level: 85, color: 'blue'},
  {name: 'Express.js', level: 80, color: '#8B8000'},
  {name: 'Node.js', level: 70, color: 'green'},
]

const databases = [
  {name: 'Firebase', level: 100, color: 'orange'},
  {name: 'Milvus', level: 80, color: 'darkred'},
  {name: 'PostgreSQL', level: 70, color: 'darkblue'},
  {name: 'Pinecone', level: 20, color: 'darkgreen'},
]

const libraries = [
  {name: 'Material-UI', level: 100, color: 'lightblue'},
  {name: 'Tensorflow', level: 90, color: 'orange'},
  {name: 'Keras', level: 80, color: 'red'},
  {name: 'Pandas', level: 70, color: 'darkblue'},
  {name: 'NumPy', level: 70, color: '#8B8000'},
  {name: 'Matplotlib', level: 60, color: 'green'},
]

export default function Display() {
  const width = useContext(WidthContext)
  const fadeIn = useSpring({
    from: {y: -100, opacity: 0},
    to: {y: 0, opacity: 1},
  })
  const fadeTop = useSpring({
    from: {opacity: 0, top: -100},
    to: {opacity: 1, top: 0},
  })
  const fadeBottom = useSpring({
    from: {opacity: 0, bottom: -100},
    to: {opacity: 1, bottom: 0},
  })

  const left = useSpring({
    from: {x: -300, opacity: 0},
    to: {x: 0, opacity: 1},
    delay: 250,
  })

  const top = useSpring({
    from: {y: -300, opacity: 0},
    to: {y: 0, opacity: 1},
    delay: 500,
  })

  const right = useSpring({
    from: {x: 300, opacity: 0},
    to: {x: 0, opacity: 1},
    delay: 750,
  })

  const bottom = useSpring({
    from: {y: 300, opacity: 0},
    to: {y: 0, opacity: 1},
    delay: 1000,
  })

  return (
    <Box
      width="100%"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',

        position: 'absolute',
        top: 0,
        left: 0,

        paddingTop: '10vh',
        overflowX: 'hidden',
        overflowY: width < 800 ? 'scroll' : 'auto',
      }}
    >
      <Stack
        direction="column"
        width="80%"
        spacing={5}
        justifyContent="flex-start"
        alignItems="center"
      >
        <animated.div style={{...fadeIn}}>
          <Typography variant="h3" color="white" align="center">
            Skills
          </Typography>
        </animated.div>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <animated.div style={{...left}}>
              <Typography variant="h6" color="white" align="center">
                Languages
              </Typography>
              <SkillBars skills={programmingLanguages} />
            </animated.div>
          </Grid>

          <Grid item md={6} xs={12}>
            <animated.div style={{...top}}>
              <Typography variant="h6" color="white" align="center">
                Frameworks
              </Typography>
              <SkillBars skills={frameworks} />
            </animated.div>
          </Grid>

          <Grid item md={6} xs={12}>
            <animated.div style={{...bottom}}>
              <Typography variant="h6" color="white" align="center">
                Databases
              </Typography>
              <SkillBars skills={databases} />
            </animated.div>
          </Grid>

          <Grid item md={6} xs={12}>
            <animated.div style={{...right}}>
              <Typography variant="h6" color="white" align="center">
                Libraries
              </Typography>
              <SkillBars skills={libraries} />
            </animated.div>
          </Grid>
        </Grid>
        <Box height="10vh" />
      </Stack>
    </Box>
  )
}
