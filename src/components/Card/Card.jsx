import React, { useContext, useState } from 'react'
import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

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
  CartIcon
} from './styles'

import { Context } from '../../context/Context'
import { addProduct } from '../../hooks/useAddProduct';

const Card = ({ product }) => {
  const { wishList, setWishList, cart, setCart } = useContext(Context)
  const [alreadyInWishList, setAlreadyInWishList] = useState(false)
  const [alreadyInCart, setAlreadyInCart] = useState(false)

  return (
    <Container>
      <CardDetails>
        <CardHeader>
          {(alreadyInWishList) ? <RiHeartFill color="red" size="25" /> : <RiHeartLine color="rgba(255, 20, 2, .3)" size="25" />}
          <CardPrice>$ {product.price}</CardPrice>
        </CardHeader>
        {<CardImg src={product.image}></CardImg>}
        <CardInfo>{product.description}</CardInfo>
      </CardDetails>
      <CardButtons>
        <CardButton 
          onClick={() => addProduct(wishList, setWishList, setAlreadyInWishList, product)}
          disabled={alreadyInWishList}>
          <HeartIcon />Add to List
        </CardButton>
        <CardButton 
          onClick={() => addProduct(cart, setCart, setAlreadyInCart, product)} 
          disabled={alreadyInCart}>
          <CartIcon />Add to Cart
        </CardButton>
      </CardButtons>
    </Container>
  )
}

export default Card
