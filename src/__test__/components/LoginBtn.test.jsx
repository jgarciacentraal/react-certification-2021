import React from 'react';
import { render, screen } from '@testing-library/react';

import GlobalProvider from 'store/global.provider';
import LoginBtn from '../../components/LoginBtn/index';

describe('LoginBtn component', () => {
  test('show Icon button', () => {
    render(
      <GlobalProvider>
        <LoginBtn />
      </GlobalProvider>
    );

    const iconEl = screen.getByTestId('btn-test');
    expect(iconEl).toBeInTheDocument();
  });
});
