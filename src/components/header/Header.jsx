import React from 'react'
import { Container, Inner, LinkWrapper, NavLink, LogoText, HeartIcon, CartIcon, PillNumber } from './styles'

const Header = () => {
  const wishNumber = 4
  const inCart = 12

  return (
    <Container>
      <Inner>
        <LogoText to="/">Sani Store</LogoText>
        <LinkWrapper>
          <NavLink to="wishlist"><HeartIcon />
            <PillNumber>{wishNumber}</PillNumber>
          </NavLink>
          <NavLink to="cart"><CartIcon />
          <PillNumber>{inCart}</PillNumber>
          </NavLink>
        </LinkWrapper>
      </Inner>
    </Container>
  )
}

export default Header
