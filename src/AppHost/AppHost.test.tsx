import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '../test-utils';
import AppHost from './AppHost';

describe('AppHost Tests', () => {
  it('renders', () => {
    const { getByTestId } = render(<AppHost />);
    const appBarElement = getByTestId('appBarTest');
    expect(appBarElement).toHaveTextContent('React-Functional-Mobx-Router-Material-Sample');
  });
});
