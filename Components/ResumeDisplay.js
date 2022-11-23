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
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',
        top: '10vh',
        left: 0,
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
    </Box>
  );
}
