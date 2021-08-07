import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginBtn from '../../components/LoginBtn/index';

describe('LoginBtn component', () => {
  test('show Icon SVG', () => {
    render(<LoginBtn />);

    const iconEl = screen.getByTestId('icon-svg');
    expect(iconEl).toBeInTheDocument();
  });
});
