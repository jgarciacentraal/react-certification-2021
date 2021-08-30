import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from 'components/Search/Search';
import GlobalProvider from 'store/global.provider';

describe('Search component', () => {
  it('renders Search component', () => {
    render(
      <GlobalProvider>
        <Search />
      </GlobalProvider>
    );

    const inputEl = screen.getByTestId('search-input');
    expect(inputEl).toBeInTheDocument();
  });
});
