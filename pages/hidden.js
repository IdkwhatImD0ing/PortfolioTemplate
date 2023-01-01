import React, {useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import Head from 'next/head';

export default function Hidden() {
  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>Hidden</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
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
        <Typography variant="h1" color="white">
          {':)'}
        </Typography>
      </Box>
    </>
  );
}
