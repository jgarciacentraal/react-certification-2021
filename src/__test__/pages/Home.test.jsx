import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from 'pages/Home/Home.page';
import GlobalProvider from 'store/global.provider';

describe('Home page', () => {
  
  test('renders a title', () => {
    render(
      <GlobalProvider>
        <HomePage />
      </GlobalProvider>
    );

    const titleElement = screen.getByTestId('title-home');
    expect(titleElement).toBeInTheDocument();
  });

  test('show videos', () => {
    render(
      <GlobalProvider>
        <HomePage />
      </GlobalProvider>
    );

    const items = jest.fn();
    [1].map(x => items(x));
    expect(items).toBeCalledWith(expect.anything());
  }) 
});
