import React from 'react';
import { render, screen } from '@testing-library/react';
// components
import Header from 'components/Header/Header';
import GlobalProvider from 'store/global.provider';


describe('Show header', () => {
  it( 'render a search' , () => {
    render(
      <GlobalProvider value={{ theme: 'light' }}>
        <Header/>
      </GlobalProvider>
    );

    const headerElement = screen.getByTestId('header-container');
    expect(headerElement).toBeInTheDocument();
  })
  

  
});
