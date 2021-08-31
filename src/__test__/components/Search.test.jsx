import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from 'components/Search/Search';
import GlobalProvider from 'store/global.provider';

describe('Search component', () => {
  it('renders Input ', () => {
    render(
      <GlobalProvider>
        <Search />
      </GlobalProvider>
    );

    const inputEl = screen.getByTestId('search-input');
    expect(inputEl).toBeInTheDocument();
  });

  it('renders Search container', () => {
    render(
      <GlobalProvider>
        <Search />
      </GlobalProvider>
    );

    const searchContainer = screen.getByTestId('search-container');
    expect(searchContainer).toBeInTheDocument();
  });
});
