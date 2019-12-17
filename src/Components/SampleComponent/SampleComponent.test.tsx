import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '../../test-utils';
import SampleComponent from './SampleComponent';

describe('SampleComponent Tests', () => {
  it('renders email', () => {
    const { getByText } = render(<SampleComponent />);

    const emailElement = getByText('Store email: test@test.test');
    expect(emailElement.innerHTML).toBe('Store email: test@test.test');
  });

  it('renders name', () => {
    const { getByText } = render(<SampleComponent />);

    const emailElement = getByText('Other Store Name: test user');
    expect(emailElement.innerHTML).toBe('Other Store Name: test user');
  });
});
