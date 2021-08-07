import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from '../../pages/Home/Home.page';


describe('Home page', () => {
  test('renders a title', () => {
    render(<HomePage />);

    const titleElement = screen.getByTestId('text-loading-home');
    expect(titleElement).toBeInTheDocument();
  });
});

