import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from '../../pages/Home/Home.page';

beforeEach(() => {
  render(<HomePage />);
});

describe('Home', () => {
  it('contains a title', () => {
    const titleElement = screen.queryByText('Welcome to Wizeline');

    expect(titleElement).toBeInTheDocument();
  });
});
