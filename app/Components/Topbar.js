import {Box, Stack, Button} from '@mui/material';
import {useRouter} from 'next/router';

export default function Topbar() {
  const rounter = useRouter();
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
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        spacing={2}
      >
        <Button
          onClick={() => {
            rounter.push('/');
          }}
        >
          Home
        </Button>
        <Button>Projects</Button>
        <Button>Education</Button>
        <Button
          onClick={() => {
            rounter.push('/skills');
          }}
        >
          Skills
        </Button>
        <Button>Awards</Button>
      </Stack>
    </Box>
  );
}
