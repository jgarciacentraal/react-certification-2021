import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import SideBar from 'components/SideBar/SideBar';
import GlobalProvider from 'store/global.provider';

test('Test sidebar component', () => {
  const history = createMemoryHistory();

  const allProviders = ({ children }) => {
    return (
      <GlobalProvider>
        <Router history={history}>{children}</Router>
      </GlobalProvider>
    );
  };

  const openSideBar = true
  const setOpenSideBar = jest.fn()

  render(<SideBar open={openSideBar} toggleSideBar={setOpenSideBar} />, { wrapper: allProviders })

  const drawerElement = screen.getByTestId('sidebar-role')
  expect(drawerElement).toBeInTheDocument() 

  const homeSection = screen.getByTestId('btn-home');
  expect(homeSection).toBeInTheDocument();
  
})