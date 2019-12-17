import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './Theme';
import { StoreProviderMock } from './__mocks__/StoreProviderMock';

const AllProviders: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <StoreProviderMock>{children}</StoreProviderMock>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
