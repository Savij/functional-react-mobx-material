import { useLocalStore } from 'mobx-react';
import React from 'react';
import { StoreContext } from '../Stores/StoreContext';
import { StoreProviderProp } from '../Types/StoreProviderProp';
import { StoreType } from '../Types/StoreType';

export const StoreProviderMock = ({ children }: StoreProviderProp): React.ReactElement => {
  const store = useLocalStore(() => ({
    loginStore: { email: ['test@test.test'] },
    applicationStore: { firstName: 'test', lastName: 'user' }
  })) as StoreType;
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
