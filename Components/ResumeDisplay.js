import {
  Box,
  Stack,
  Typography,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  useTheme,
} from '@mui/material';
import React, {useContext, useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import workerSrc from '../pdf-worker';
import {WidthContext} from './page';
import {animated, useSpring} from 'react-spring';
import {useRouter} from 'next/router';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
export default function ResumeDisplay() {
  const theme = useTheme();
  const router = useRouter();
  const width = structuredClone(useContext(WidthContext));
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(router.query.mode || 'web');

  const fadeIn = useSpring({
    from: {y: -100, opacity: 0},
    to: {y: 0, opacity: 1},
  });

  const fade = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    delay: 500,
  });

  // Downloads the pdf
  const onClick = () => {
    const fileName = 'resume.pdf';
    const a = document.createElement('a');
    a.href = '/resume.pdf';
    a.download = fileName;
    a.click();
  };

  // Changes the mode of the pdf
  const handleChange = (event, newMode) => {
    if (newMode === null) {
      return;
    }
    setLoading(true);
    setMode(newMode);
  };

  return (
    <Stack
      width="100%"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={5}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: '10vh',
        paddingBottom: '20vh',
      }}
    >
      <animated.div style={{...fadeIn}}>
        <Typography variant="h3" color="white">
          Resume
        </Typography>
      </animated.div>
      <animated.div style={{...fade}}>
        <ToggleButtonGroup
          value={mode}
          exclusive
          aria-label="text alignment"
          onChange={handleChange}
          sx={{
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`,
            '& .MuiToggleButton-root.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: '#fff',
              '&:hover': {
                backgroundColor: theme.palette.primary.main, // set the background color to transparent on hover
              },
            },
            '& .MuiToggleButton-root': {
              color: theme.palette.primary.main,
              padding: '6px 12px', // reduce the padding to make it smaller
              fontSize: '0.7rem', // reduce the font size to make it smaller
              fontSize: '0.7rem',
            },
          }}
        >
          <ToggleButton value="web" aria-label="left aligned" size="small">
            Web Development
          </ToggleButton>
          <ToggleButton value="ml" aria-label="centered" size="small">
            Machine Learning
          </ToggleButton>
        </ToggleButtonGroup>
      </animated.div>
      {!loading && (
        <animated.div style={{...fade}}>
          <Button
            variant="contained"
            onClick={() => {
              onClick();
            }}
          >
            Download
          </Button>
        </animated.div>
      )}
      <Document
        file={mode === 'web' ? '/resume.pdf' : '/resume_ml.pdf'}
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
      {!loading && (
        <animated.div style={{...fade}}>
          <Button
            variant="contained"
            onClick={() => {
              onClick();
            }}
          >
            Download
          </Button>
        </animated.div>
      )}
    </Stack>
  );
}
