import {createTheme} from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#59009e',
      light: '#7e00de',
    },
    secondary: {
      main: '#000080',
    },
    background: {
      default: '#000000',
    },
  },
});
