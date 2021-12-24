import React, { useContext } from 'react'
import { 
  Container, 
  CardDetails, 
  CardHeader,
  HeaderIcon,
  CardPrice, 
  CardImg, 
  CardInfo, 
  CardButtons, 
  CardButton, 
  CartIcon
} from './styles'

import { Context } from '../../context/Context'

const WishCard = ({product}) => {
  const { addToCart } = useContext(Context)

  return (
    <Container>
      <CardDetails>
        <CardHeader>
          <HeaderIcon />
          <CardPrice>$ { product.price }</CardPrice>
        </CardHeader>
        {<CardImg src={ product.image }></CardImg>}
        <CardInfo>{ product.description }</CardInfo>
      </CardDetails>
      <CardButtons>
        <CardButton onClick={ () => addToCart(product) }><CartIcon/>Add to Cart</CardButton>
      </CardButtons>
    </Container>
  )
}

export default WishCard
