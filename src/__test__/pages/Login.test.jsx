import React from 'react';
import {render, screen} from '@testing-library/react';
import LoginPage from '../../pages/Login/Login.page';

import {GlobalContext} from 'store/global.provider'

const stateTest = { state: {showModalLogin: true, errorAuth: '' }}

describe('login page', () => {
  
  test('login component for elements' , () => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    
    render(
      <GlobalContext.Provider value={stateTest}>
        <LoginPage />
      </GlobalContext.Provider>, {container: document.body.appendChild(modalRoot)})
    
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()

    const username = screen.getByPlaceholderText('wizeline')
    expect(username).toBeInTheDocument()

    const pass = screen.getByPlaceholderText('Password')
    expect(pass).toBeInTheDocument()
    
  });

})