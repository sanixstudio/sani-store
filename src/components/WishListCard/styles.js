import styled from 'styled-components'
import { colors } from '../../assets/styles/color'
import { RiShoppingCartLine, RiHeartFill } from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
  max-width: 250px;
  margin: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`
export const CardDetails = styled.div`
  background: ${colors.secondaryTextColor};
  box-shadow: 0 0.813em 2.5em rgba(0 0 0 / .1);
  border-radius: .625em;
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  font-size: .8rem;
`

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderIcon = styled(RiHeartFill)`
  font-size: 2em;
  color: ${colors.customRed}
`

export const CardPrice = styled.span`
  font-size: 0.875rem;
`

export const CardImg = styled.img`
  max-width: 100%;
  width: 180px;
  max-height: 200px;
  object-fit: contain;
`

export const CardInfo = styled.div`
  padding: 0 1em;
  margin-bottom: 1em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`

export const CardButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CardButton = styled.button`
  background: ${colors.primaryBgColor};
  color: ${colors.secondaryTextColor};
  transition: background ease .2s;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: .5em;
  padding: .5em 1em;
  cursor: pointer;
  &:hover {
    background-color: ${colors.buttonHoverColor};
  }
  &:active {
    box-shadow: inset .1em .3em .5em #116A55;
    transform: scale(.96);
  }
`

export const HeartIcon = styled(RiHeartFill)`
  font-size: 1.5em;
`

export const CartIcon = styled(RiShoppingCartLine)`
font-size: 1.5em;
`
