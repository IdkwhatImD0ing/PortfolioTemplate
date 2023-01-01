import {Box, Stack, Button} from '@mui/material';
import {useRouter} from 'next/router';
import {useScrollY} from '../page';
import AnimatedButton from './AnimatedButton';

export default function TopbarDesktop() {
  const rounter = useRouter();
  const scrollY = useScrollY();
  return (
    <Box
      height="5vh"
      width="100vw"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: scrollY > 30 ? '#1b1a2ea9' : 'none',
        backdropFilter: scrollY > 30 ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow:
          scrollY > 30 ? '0px 0px 10px 0px rgba(9, 5, 29, 0.171)' : 'none',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        spacing={2}
      >
        <AnimatedButton
          onClick={() => {
            rounter.push('/');
          }}
        >
          Home
        </AnimatedButton>
        <AnimatedButton
          onClick={() => {
            rounter.push('/projects');
          }}
        >
          Projects
        </AnimatedButton>
        <AnimatedButton
          onClick={() => {
            rounter.push('/education');
          }}
        >
          Education
        </AnimatedButton>
        <AnimatedButton
          onClick={() => {
            rounter.push('/skills');
          }}
        >
          Skills
        </AnimatedButton>
        <AnimatedButton
          onClick={() => {
            rounter.push('/resume');
          }}
        >
          Resume
        </AnimatedButton>
        <AnimatedButton>Awards</AnimatedButton>
      </Stack>
    </Box>
  );
}
