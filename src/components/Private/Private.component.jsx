import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useGlobalProvider } from '../../store/global.provider';

function Private({ children, ...rest }) {
  const {
    state: { user },
  } = useGlobalProvider();

  return <Route {...rest} render={() => (user ? children : <Redirect to="/" />)} />;
}

export default Private;
