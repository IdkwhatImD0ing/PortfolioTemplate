import {Box, Stack, Button} from '@mui/material';

export default function Topbar() {
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
        <Button>Projects</Button>
        <Button>Education</Button>
        <Button>Skills</Button>
        <Button>Awards</Button>
      </Stack>
    </Box>
  );
}
