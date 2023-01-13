import {Box, Typography, Button} from '@mui/material';
import React, {useContext, useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import workerSrc from '../pdf-worker';
import {WidthContext} from './page';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
export default function ResumeDisplay() {
  const width = useContext(WidthContext);
  const [loading, setLoading] = useState(true);

  const onClick = () => {
    // Downloads the pdf
    const fileName = 'resume.pdf';
    const a = document.createElement('a');
    a.href = '/resume.pdf';
    a.download = fileName;
    a.click();
  };

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
          mb: '5vh',
        }}
      >
        Resume
      </Typography>
      {!loading && (
        <Button
          variant="contained"
          onClick={() => {
            onClick();
          }}
          sx={{
            mb: '5vh',
          }}
        >
          Download
        </Button>
      )}
      <Document
        file={'./resume.pdf'}
        renderMode="canvas"
        loading={
          <Box>
            <div className="Loader" />
          </Box>
        }
      >
        <Page
          key="page1"
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          width={width < 1000 ? width * 0.8 : 900}
          onRenderSuccess={() => {
            setLoading(false);
          }}
        />
      </Document>
      <Box height="5vh"></Box>
      {!loading && (
        <Button
          variant="contained"
          onClick={() => {
            onClick();
          }}
          sx={{
            mb: '20vh',
          }}
        >
          Download
        </Button>
      )}
    </Box>
  );
}
