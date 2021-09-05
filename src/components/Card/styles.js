import styled from 'styled-components'
import { colors } from '../../assets/styles/color'
import { RiShoppingCartLine, RiHeartLine } from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
  max-width: 250px;
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
  justify-content: space-between;
`

export const HeaderIcon = styled(RiHeartLine)`
  font-size: 1.5em;
  color: ${colors.customRed}
`

export const CardPrice = styled.span`
  font-size: 0.875rem;
`

export const CardImg = styled.img`
  max-width: 100%;
  width: 180px;
`

export const CardInfo = styled.div`
  text-overflow: ellipsis;
  width: 100%; 
  white-space: nowrap;
  overflow:hidden;
  text-align: center;
`

export const CardButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CardButton = styled.button`
  background: ${colors.primaryBgColor};
  color: ${colors.secondaryTextColor};
  transition: background ease .2s;
  border: none;
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

export const HeartIcon = styled(RiHeartLine)`
  margin-right: .5em;
`

export const CartIcon = styled(RiShoppingCartLine)`
  margin-right: .5em;`
