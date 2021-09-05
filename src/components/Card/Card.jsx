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

const Card = () => {
  return (
    
    <Container>
      <CardDetails>
        <CardHeader>
          <HeaderIcon />
          <CardPrice>$ {sampleCard.price}</CardPrice>
        </CardHeader>
        {<CardImg src={sampleCard.image}></CardImg>}
        <CardInfo>{sampleCard.description}</CardInfo>
      </CardDetails>
      <CardButtons>
        <CardButton><HeartIcon/>Add to List</CardButton>
        <CardButton><CartIcon/>Add to Cart</CardButton>
      </CardButtons>
    </Container>
  )
}

export default Card
