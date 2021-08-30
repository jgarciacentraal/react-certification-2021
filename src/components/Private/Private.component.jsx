import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGlobalProvider } from 'store/global.provider';

export default function Private(props) {
  
  const { state: { user } } = useGlobalProvider();

  return user ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: '/' }} />
  );
}


