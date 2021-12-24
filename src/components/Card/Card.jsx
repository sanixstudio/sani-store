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

const Card = ({ product }) => {
  const { addToWishList, addToCart, wishList } = useContext(Context)
  const [alreadyInWishList, setAlreadyInWishList] = useState(false)
  const [alreadyInCart, setAlreadyInCart] = useState(false)

  function checkProductInWishList(id) {
    if (wishList.find(p => p.id === id)) return <HeaderIconFill />
    else return <HeaderIconLine />
  }

  return (
    <Container>
      <CardDetails>
        <CardHeader>
          {checkProductInWishList(product.id)}
          <CardPrice>$ {product.price}</CardPrice>
        </CardHeader>
        {<CardImg src={product.image}></CardImg>}
        <CardInfo>{product.description}</CardInfo>
      </CardDetails>
      <CardButtons>
        <CardButton
          onClick={() => addToWishList(product, alreadyInWishList)}
          disabled={alreadyInWishList}>
          <HeartIcon />Add to List
        </CardButton>
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
