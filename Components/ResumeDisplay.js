import {Box, Typography} from '@mui/material';
import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import workerSrc from '../pdf-worker';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
export default function ResumeDisplay() {
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
      }}
    >
      <Typography
        variant="h3"
        color="white"
        sx={{
          mb: '10vh',
        }}
      >
        Resume
      </Typography>
      <Document file={'./resume.pdf'} renderMode="canvas">
        <Page
          key="page1"
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          scale={1.5}
        />
      </Document>
      <Box height="20vh"></Box>
    </Box>
  );
}
