import React from 'react';

import { Menu } from 'react-feather';
import { HeaderContainer, ToggleMenu } from './Styles';
import Search from '../Search/index';
import ThemeBtn from '../ThemeBtn/index';
import LoginBtn from '../LoginBtn/index';

export default function Header({ toggleSideBar }) {
  return (
    <>
      <HeaderContainer data-testid="header-container">
          <ToggleMenu onClick={() => toggleSideBar(true)}>
            <Menu />
          </ToggleMenu>
        <Search />
        <div className="nav">
          <ThemeBtn />
          <LoginBtn />
        </div>
      </HeaderContainer>
      {/* <SideBar setSidebar={setSidebar} sidebar={sidebar} /> */}
    </>
  );
}
