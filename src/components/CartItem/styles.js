import styled from 'styled-components'
import {colors} from '../../assets/styles/color'
import {RiCloseCircleFill} from 'react-icons/ri'

export const CartItemContainer = styled.div`
  width: 100%;
  padding: .5em 1em;
  max-width: 960px;
  display: flex;
  gap: 4em;
  align-items: center;
  background: ${colors.secondaryTextColor};
  box-shadow: 0 0.813em 2.5em rgba(0 0 0 / .1);
  margin-bottom: -3.5em;
  @media (max-width:640px) {
    flex-direction: column;
  }
`

export const CartImgContainer = styled.div`
`

export const CartImg = styled.img`
  padding: .4em;
  width: 4.375em;
  height: 4.375em;
  object-fit: contain;
  background: #fff;
`
export const CartInfo = styled.span`
 text-overflow: ellipsis;
  width: 100%; 
  white-space: nowrap;
  overflow:hidden;
`

export const CartQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

export const InputButton = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  cursor: pointer;
  opacity: .8;
`

export const InputValue = styled.span`
  border: solid 1px ${colors.lightGrey};
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
`

export const CartTotal = styled.span`
  min-width: 80px;
`

export const DeleteBtn = styled(RiCloseCircleFill)`
  font-size: 3rem;
  opacity: .5;
  cursor: pointer;
  color: ${colors.customRed};
  &:hover, &:focus {
    opacity: 1;
  }
`