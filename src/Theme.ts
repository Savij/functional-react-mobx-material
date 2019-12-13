import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#039be5',
      light: '#63ccff',
      dark: '#006db3'
    },
    secondary: {
      main: '#bdbdbd',
      light: '#efefef',
      dark: '#8d8d8d'
    }
  },
  typography: {
    fontFamily: ['Ubuntu', 'Arial', 'sans-serif'].join(',')
  }
});
