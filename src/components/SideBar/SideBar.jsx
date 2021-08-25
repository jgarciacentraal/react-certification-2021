import React from 'react';
import { useHistory } from 'react-router';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { SideBarContainer } from './Styles';

export default function SideBar({ toggleSideBar, open }) {
  const { push } = useHistory();
  const handleClose = () => {
    toggleSideBar(false);
  };

  return (
    <Drawer open={open} onClose={handleClose}>
      <SideBarContainer onClick={() => toggleSideBar(false)}>
        <List>
          <ListItem button onClick={() => push('/')}>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          {/* {isLoggedIn && (
            <>
              <ListItem button onClick={() => push('/favorites')}>
                <ListItemText primary="Favorites" />
              </ListItem>
              <Divider />
            </>
          )} */}
        </List>
      </SideBarContainer>
    </Drawer>
  );
}