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
  const [quantity, setQuantity] = useState(1)

  const Increment = () => {
    (quantity === 10) ? setQuantity(10) :
      setQuantity(prevCount => prevCount + 1)
  }

  const Decrement = () => {
    (quantity === 1) ? setQuantity(1) :
      setQuantity(prevCount => prevCount - 1)
  }

  let result = ((product.price).toFixed(2) * quantity)
  console.log(result)

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
      <CartTotal>{product.price}</CartTotal>
      <DeleteBtn />
    </CartItemContainer>
  )
}

export default CartItem
