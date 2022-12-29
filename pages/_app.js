import {ThemeProvider} from '@mui/material';
import {themeOptions} from '../Components/theme';
import './App.scss';
import Matrix from '../Components/HomePage/Matrix';
import Topbar from '../Components/Topbar/Topbar';
import Botbar from '../Components/Botbar';
import {WidthContextProvider} from '../Components/page';

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={themeOptions}>
      <WidthContextProvider>
        <Matrix fullscreen={true} speed={1} color="#9D00FF" />
        <Component {...pageProps} />
        <Topbar />
        <Botbar />
      </WidthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
