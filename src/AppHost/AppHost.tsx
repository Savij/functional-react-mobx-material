import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SampleComponent from '../Components/SampleComponent/SampleComponent';
import { useStyles } from './AppHost.Styles';

const AppHost: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar position='static'>
        <Toolbar>
          <Typography data-testid='appBarTest' variant='h6' color='inherit' noWrap>
            React-Functional-Mobx-Router-Material-Sample
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact={true} path='/' component={SampleComponent} />
      </Switch>
    </div>
  );
};
export default withTheme(AppHost);
