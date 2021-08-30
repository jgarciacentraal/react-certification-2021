import React from 'react'
import {render, screen } from '@testing-library/react';


import ThemeBtn from 'components/ThemeBtn';
import GlobalProvider from 'store/global.provider';

test('theme button', () => {
  
    render(
      <GlobalProvider >
        <ThemeBtn />
      </GlobalProvider>
    )

    const themeButton = screen.getByRole('button');
    expect(themeButton).toBeInTheDocument();

    const iconTheme = screen.getByTitle('MoonButton');
    expect(iconTheme).toBeInTheDocument();
  
})