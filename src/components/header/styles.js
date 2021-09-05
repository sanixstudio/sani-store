import styled from "styled-components"
import {colors} from '../../assets/styles/color'
import {Link} from 'react-router-dom'
import { RiShoppingCartLine, RiHeartLine } from 'react-icons/ri';

export const Container = styled.div`
  background: ${colors.primaryBgColor};
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Inner = styled.div`
  width: 1440px;
  margin: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`
export const LogoText = styled(Link)`
  font-size: 2.25rem;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.secondaryTextColor};
`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
`

export const NavLink = styled(Link)`
  display: block;
  color: #fff;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  &:hover {
    color: #ddd;
  }
`
export const HeartIcon = styled(RiHeartLine)`
  font-size: 1.75rem;
`
export const CartIcon = styled(RiShoppingCartLine)`
  font-size: 1.75rem;
`
export const PillNumber = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: -.5em;
  left: -1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: crimson;
  background: ${colors.secondaryBgColor};
  font-weight: bold;
  border-radius: 50%;
`