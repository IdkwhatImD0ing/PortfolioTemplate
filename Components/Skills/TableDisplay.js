import React, {useState} from 'react';
import {Stack, Typography, Box} from '@mui/material';
export default function TableDisplay(props) {
  const fields = props.fields;
  // Display the list in a stack of typographies
  return (
    <>
      {fields.map((field) => (
        <Typography align="center">{field}</Typography>
      ))}
    </>
  );
}
