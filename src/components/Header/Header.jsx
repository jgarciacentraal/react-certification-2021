import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, ToggleMenu } from './Styles';
import Search from '../Search/index';
import ThemeBtn from '../ThemeBtn/index';
import LoginBtn from '../LoginBtn/index';
import { Menu } from 'react-feather';


export default function Header({ toggleSideBar }) {

  return (
    <>
    <HeaderContainer data-testid="header-container">
      <Link to='/' className='menu-bars'>
        <ToggleMenu onClick={() => toggleSideBar(true)}>
          <Menu/>
        </ToggleMenu>
      </Link>
      <Search  />
      <div className="nav">
        <ThemeBtn />
        <LoginBtn />
      </div>
    </HeaderContainer>
    {/* <SideBar setSidebar={setSidebar} sidebar={sidebar} /> */}
    </>
  );
}
