import React from 'react';
import {Box, Paper, Stack, Typography} from '@mui/material';

export default function DisplayPaper(props) {
  const height = props.height;
  // Get characters in height, ignoring numbers
  const heightString = height.replace(/\d+/g, '');
  // Get all the numbers from the height, convert to int and multiply by 1.1, then append new int to string
  const newHeight = parseInt(height) * 1.3 + heightString;
  return (
    <Paper
      sx={{
        display: 'flex',
        height: {height},
        width: '11vw',

        justifyContent: 'center',

        animationName: 'floating',
        animationDuration: '3s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',

        //Add Keyframes
        '@keyframes floating': {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-30px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },

        '&:hover': {
          height: newHeight,
          width: '11vw',
          transition: 'all 0.5s ease',
        },
      }}
    >
      <Stack
        direction="column"
        alignContent="center"
        justifyContent="space-evenly"
      >
        <Typography
          align="center"
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',

            mt: 2,
          }}
        >
          {props.name}
        </Typography>
        {props.children}
      </Stack>
    </Paper>
  );
}
