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
  HeartIcon,
  CartIcon
} from './styles'

// Sample data
import { sampleCard } from '../../assets/samples/sampleCard'
console.log(sampleCard)

const Card = ({product}) => {
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
        <CardButton><HeartIcon/>Add to List</CardButton>
        <CardButton><CartIcon/>Add to Cart</CardButton>
      </CardButtons>
    </Container>
  )
}

export default Card
