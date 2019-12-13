import { useLocalStore } from 'mobx-react';
import React from 'react';
import { StoreType } from '../Types/StoreType';
import { StoreContext } from './StoreContext';

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    loginStore: { email: ['neil.peart@rush.yyz'] },
    applicationStore: { firstName: 'neil', lastName: 'peart' }
  })) as StoreType;
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
