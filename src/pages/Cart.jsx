import React from 'react'
import { Button, CardsContainer, ButtonsContainer, CartItem } from '../components'

// testing data
import { SampleCards } from '../assets/samples/allCard'

const Carts = () => {

  return (
    <CardsContainer>
      {SampleCards.slice(0, 5).map(card => (<CartItem key={card.id} product={card} />))}
      <ButtonsContainer>
        <Button>Reset Cart</Button>
        <Button>Checkout</Button>
      </ButtonsContainer>
    </CardsContainer>
  )
}

export default Carts
