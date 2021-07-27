import React from 'react';
import { User } from 'react-feather';

import { ButtonLgn } from './Styles';


export default function LoginBtn() {
  return (
    <ButtonLgn>
      <User data-testid="icon-svg" width={24}/>
    </ButtonLgn>
  );
}
