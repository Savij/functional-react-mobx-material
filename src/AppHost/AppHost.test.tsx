import '@testing-library/jest-dom/extend-expect';
import { getByTestId, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '../Stores/StoreProvider';
import AppHost from './AppHost';

test('renders', () => {
  const { getByText } = render(
    <BrowserRouter>
      <StoreProvider>
        <AppHost />
      </StoreProvider>
    </BrowserRouter>
  );
  const appBarElement = getByTestId(document.body, 'appBarTest');
  expect(appBarElement).toHaveTextContent(
    'React-Functional-Mobx-Router-Material-Sample'
  );
});
