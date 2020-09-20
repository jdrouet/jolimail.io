import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    text: {
      primary: 'rgba(82,85,87,1)',
      disabled: 'rgba(174,175,176,1)',
    },
    primary: {
      main: '#4E84BF',
    },
    secondary: {
      main: '#BF574E',
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', '"Patua One"', 'sans-serif'].join(','),
    h1: {
      fontSize: '3.5em',
      fontWeight: 400,
      fontFamily: 'Patua One',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '3em',
      fontWeight: 400,
      fontFamily: 'Patua One',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2.7em',
      fontWeight: 400,
      fontFamily: 'Patua One',
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: '1.5em',
      fontWeight: 400,
    },
  },
});

export default theme;
