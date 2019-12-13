import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, withTheme } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useStyles } from './App.Styles';
import AppHost from './AppHost/AppHost';
import { StoreProvider } from './Stores/StoreProvider';
import { theme } from './Theme';

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <StoreProvider>
          <div className={classes.container}>
            <AppHost />
          </div>
        </StoreProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default withTheme(App);
