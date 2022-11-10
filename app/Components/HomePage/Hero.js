import {Box, Stack, Typography} from '@mui/material';
import Topbar from '../Topbar';
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

        backgroundColor: 'black',
      }}
    >
      <Topbar />
      <Stack maxWidth="60vw" direction="column" alignItems="center">
        <Typography
          variant="h5"
          sx={{
            color: 'pink',
            mb: 2,
          }}
        >
          Hello There! I&apos;m Bill Zhang
        </Typography>
        <Typography
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
          I am currently a third-year majoring in Computer Science at UC Santa
          Cruz. I am a motivated Computer Programmer experienced in leadership
          and problem solving with a strong foundation in math and physics.
          Comfortable with multiple programming languages with an emphasis on
          machine learning and full-stack web development. Am able to work
          efficiently collaboratively or autonomously.
        </Typography>
      </Stack>
    </Box>
  );
}
