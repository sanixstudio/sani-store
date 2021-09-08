import React, { useContext, useState } from 'react'
import { Container, Inner, LinkWrapper, NavLink, LogoText, HeartIcon, CartIcon, PillNumber } from './styles'

import { Context } from '../../context/Context'

const Header = () => {

  return (
    <Container>
      <Inner>
        <LogoText to="/">Sani Store</LogoText>
        <LinkWrapper>
          <NavLink to="wishlist"><HeartIcon />
            <PillNumber>{10}</PillNumber>
          </NavLink>
          <NavLink to="cart"><CartIcon />
          <PillNumber>{10}</PillNumber>
          </NavLink>
        </LinkWrapper>
      </Inner>
    </Container>
  )
}

export default Header
