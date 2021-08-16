import React from 'react';

import { HeaderContainer } from './Styles';
import Search from '../Search/index';
import ThemeBtn from '../ThemeBtn/index';
import LoginBtn from '../LoginBtn/index';

export default function Header() {
  return (
    <HeaderContainer>
      <Search />
      <ThemeBtn />
      <LoginBtn />
    </HeaderContainer>
  );
}
