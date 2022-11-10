import {ThemeProvider} from '@mui/material';
import {themeOptions} from '../Components/theme';
import './App.css';

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={themeOptions}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
