import React from 'react'
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

const WishCard = ({product}) => {
  return (
    <Container>
      <CardDetails>
        <CardHeader>
          <HeaderIcon />
          <CardPrice>$ {product.price}</CardPrice>
        </CardHeader>
        {<CardImg src={product.image}></CardImg>}
        <CardInfo>{product.description}</CardInfo>
      </CardDetails>
      <CardButtons>
        <CardButton><CartIcon/>Add to Cart</CardButton>
      </CardButtons>
    </Container>
  )
}

export default WishCard
