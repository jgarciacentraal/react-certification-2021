import React from 'react'

import { ButtonLgn } from './Styles'

import { ReactComponent as UserIcn } from './img/user.svg'

export default function LoginBtn() {
  return (
    <ButtonLgn>
      <UserIcn/>
    </ButtonLgn>
  )
}
