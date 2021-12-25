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

const Card = ({ product }) => {
  const { addToWishList, addToCart, wishList } = useContext(Context)
  const [alreadyInWishList, setAlreadyInWishList] = useState(false)
  const [alreadyInCart, setAlreadyInCart] = useState(false)

  function checkProductInWishList(id) {
    if (wishList.find(p => p.id === id)) return true
  }

  return (
    <Container>
      <CardDetails>
        <CardHeader>
          {
            checkProductInWishList(product.id) ?
            <HeaderIconFill onClick={() => addToWishList(product, alreadyInWishList)} /> : 
            <HeaderIconLine onClick={() => addToWishList(product, alreadyInWishList)} />
          }
          <CardPrice>$ {product.price}</CardPrice>
        </CardHeader>
        {<CardImg src={product.image}></CardImg>}
        <CardInfo>{product.description}</CardInfo>
      </CardDetails>
      <CardButtons>
        <CardButton
          onClick={() => addToCart(product, alreadyInCart)}
          disabled={alreadyInCart}>
          <CartIcon />Add to Cart
        </CardButton>
      </CardButtons>
    </Container>
  )
}

export default Card
