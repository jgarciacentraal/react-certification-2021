import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useGlobalProvider } from 'store/global.provider';
import { logOut, showModal } from 'store/globalActions';

const TRANSFORM_ORIGIN = {
  vertical: 'top',
  horizontal: 'right',
};

const ANCHOR_ORIGIN = {
  vertical: 'top',
  horizontal: 'right',
};

export default function LoginBtn() {
  const history = useHistory();
  const {
    state: { user },
    dispatch,
  } = useGlobalProvider();

  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);

  function handleMenu(event) {
    setAnchorElement(event.currentTarget);
  }

  function handleMenuItemClose() {
    setAnchorElement(null);
  }

  function doLogin() {
    showModal(dispatch, true);
    history.push('/login');
  }

  function doLogout() {
    // mandar logout
    logOut(dispatch);
    handleMenuItemClose();
    history.push('/');
  }

  return (
    <>
      <IconButton
        data-testid="btn-test"
        edge="end"
        aria-label="User profile dropdown"
        aria-haspopup="true"
        color="inherit"
        onClick={handleMenu}
        style={{ marginRight: '20px' }}
      >
        <Avatar src={user?.avatarUrl || null} alt="Avatar" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElement}
        anchorOrigin={ANCHOR_ORIGIN}
        keepMounted
        transformOrigin={TRANSFORM_ORIGIN}
        open={open}
        onClose={handleMenuItemClose}
      >
        {user ? (
          <MenuItem onClick={doLogout}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={doLogin}>Login</MenuItem>
        )}
      </Menu>
    </>
  );
}
