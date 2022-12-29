import {
  Box,
  Stack,
  Button,
  Typography,
  IconButton,
  Drawer,
  Divider,
} from '@mui/material';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {useScrollY} from '../page';
import MenuIcon from '@mui/icons-material/Menu';

export default function TopbarMobile() {
  const rounter = useRouter();
  const scrollY = useScrollY();

  // Drawer state
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      height="10vh"
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
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#1b1a2e',
            color: 'white',
            width: '40%',
          },
        }}
      >
        <Stack
          direction="column"
          height="100vh"
          align="center"
          justifyContent="flex-start"
          spacing={2}
          sx={{
            paddingTop: '5vh',
          }}
        >
          <Typography variant="h4">Menu</Typography>
          <Divider />
          <Button
            onClick={() => {
              handleClose();
              rounter.push('/');
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => {
              handleClose();
              rounter.push('/projects');
            }}
          >
            Projects
          </Button>
          <Button
            onClick={() => {
              handleClose();
              rounter.push('/education');
            }}
          >
            Education
          </Button>
          <Button
            onClick={() => {
              handleClose();
              rounter.push('/skills');
            }}
          >
            Skills
          </Button>
          <Button
            onClick={() => {
              handleClose();
              rounter.push('/resume');
            }}
          >
            Resume
          </Button>
        </Stack>
      </Drawer>
      <Stack
        width="80%"
        direction="row-reverse"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography
          variant="h5"
          color="white"
          sx={{
            fontVariant: 'small-caps',
          }}
        >
          Portfolio
        </Typography>
        <IconButton
          onClick={handleOpen}
          sx={{
            color: 'white',
          }}
        >
          <MenuIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
