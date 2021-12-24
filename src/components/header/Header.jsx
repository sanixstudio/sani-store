import React, { useContext } from 'react'
import { Container, Inner, LinkWrapper, NavLink, LogoText, HeartIcon, CartIcon, PillNumber } from './styles'

import { Context } from '../../context/Context'

const Header = () => {
  const {wishList, cart} = useContext(Context)

  return (
    <Container>
      <Inner>
        <LogoText to="/">Sani Store</LogoText>
        <LinkWrapper>
          <NavLink to="wishlist"><HeartIcon />
            <PillNumber>{wishList.length}</PillNumber>
          </NavLink>
          <NavLink to="cart"><CartIcon />
          <PillNumber>{cart.length}</PillNumber>
          </NavLink>
        </LinkWrapper>
      </Inner>
    </Container>
  )
}

export default Header
