import React from 'react';

import { render, screen } from '@testing-library/react';

import Header from 'components/Header/Header';

describe('Show header', () => {
  render(<Header />);

  const headerElement = screen.getByTestId('header-container');
  expect(headerElement).toBeInTheDocument();
});
