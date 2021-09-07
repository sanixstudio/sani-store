import React, { useState } from 'react'

import {
  CartItemContainer,
  CartImg,
  CartInfo,
  CartImgContainer,
  CartQuantity,
  InputButton,
  InputValue,
  CartTotal,
  DeleteBtn
} from './styles'

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0)

  const Increment = () => {
    (quantity === 10) ? setQuantity(10) :
      setQuantity(prevCount => prevCount + 1)
  }

  const Decrement = () => {
    if (quantity === 0) setQuantity(0)
    else setQuantity(prevCount => prevCount - 1)
  }

  return (
    <CartItemContainer>
      <CartImgContainer>
        <CartImg src={product.image} alt="" />
      </CartImgContainer>
      <CartInfo>{product.description}</CartInfo>
      <CartQuantity>
        <InputButton onClick={Decrement}>-</InputButton>
        <InputValue>{quantity}</InputValue>
        <InputButton onClick={Increment}>+</InputButton>
      </CartQuantity>
      <CartTotal>340.40</CartTotal>
      <DeleteBtn />
    </CartItemContainer>
  )
}

export default CartItem
