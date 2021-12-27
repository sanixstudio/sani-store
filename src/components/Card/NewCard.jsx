import React, { useContext, useState } from 'react'
// import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

import {
  Container,
  CardDetails,
  CardHeader,
  CardPrice,
  CardImg,
  CardInfo,
  CardButtons,
  CardButton,
  HeartIcon,
  CartIcon,
  HeaderIconFill,
  HeaderIconLine
} from './styles'

import { Context } from '../../context/Context'
// import { addProduct } from '../../hooks/useAddProduct';

const NewCard = ({ product }) => {
  const [alreadyInWishList, setAlreadyInWishList] = useState(false)
  const [alreadyInCart, setAlreadyInCart] = useState(false)

  return (
    <Container>
      <CardDetails>
        <CardHeader>
          <HeaderIconFill />
          <CardPrice>$ {product.price}</CardPrice>
        </CardHeader>
        {<CardImg src={product.image}></CardImg>}
        <CardInfo>{product.description}</CardInfo>
      </CardDetails>
      <CardButtons>
        <CardButton
          disabled={alreadyInCart}>
          <CartIcon />Add to Cart
        </CardButton>
      </CardButtons>
    </Container>
  )
}

export default NewCard
