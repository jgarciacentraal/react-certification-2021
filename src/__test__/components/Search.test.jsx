import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../../components/Search/Search';

describe('Search component', () => {
  test('renders Search component', () => {
    render(<Search />);

    const inputEl = screen.getByTestId('search-input');
    expect(inputEl).toBeInTheDocument();
  });
});
