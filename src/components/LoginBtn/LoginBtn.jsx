import React from 'react';
import { User } from 'react-feather';

import { ButtonLgn } from './Styles';

export default function LoginBtn() {
  const clickLogin = () => {
    console.log('cliking');
  };
  return (
    <ButtonLgn onClick={clickLogin}>
      <User data-testid="icon-svg" width={24} />
    </ButtonLgn>
  );
}
