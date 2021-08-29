import React, { useState } from 'react';
import { useHistory } from 'react-router';
import ReactDom from 'react-dom';
// Materialui core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { LoginPromptTextField, Background, ErrorBox } from './Styles';

import { useGlobalProvider } from '../../store/global.provider';
import { loginUser, showModal } from '../../store/globalActions';

export default function LoginPage() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    state: { showModalLogin, errorAuth },
    dispatch,
  } = useGlobalProvider();

  const close = () => {
    showModal(dispatch, false);
    history.push('/');
  };

  // TODO usuario correcto mostrar avatar y seccion de agregar favoritos
  const handleLogin = async () => {
    const user = await loginUser(dispatch, username, password);

    if (user) {
      close();
    }
  };

  return ReactDom.createPortal(
    <Background>
      <Dialog
        open={showModalLogin}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Login</DialogTitle>
        <DialogContent>
          <LoginPromptTextField
            label="Username"
            id="username"
            placeholder="wizeline@wizeline.com"
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <LoginPromptTextField
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary" autoFocus>
            Login
          </Button>
        </DialogActions>
        {errorAuth && (
          <ErrorBox>
            {' '}
            <h3>{errorAuth}</h3>{' '}
          </ErrorBox>
        )}
      </Dialog>
    </Background>,
    document.getElementById('modal')
  );
}
