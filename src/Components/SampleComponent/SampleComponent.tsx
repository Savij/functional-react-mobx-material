import { Typography } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import React, { Fragment, useContext } from 'react';
import { StoreContext } from '../../Stores/StoreContext';
import { StoreType } from '../../Types/StoreType';

const SampleComponent: React.FC = () => {
  const { loginStore, applicationStore } = useContext(StoreContext) as StoreType;
  return (
    <Fragment>
      <Typography variant='h5' color='primary'>
        Store email: {loginStore.email[0]}
      </Typography>
      <Typography variant='h5' color='secondary'>
        Other Store Name: {applicationStore.firstName} {applicationStore.lastName}
      </Typography>
    </Fragment>
  );
};
export default withTheme(SampleComponent);
