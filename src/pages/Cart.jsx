import React from 'react'
import {RiCreativeCommonsSaLine, RiShoppingBasketLine} from 'react-icons/ri'
import { Button, CardsContainer, ButtonsContainer, CartItem } from '../components'

// testing data
import { SampleCards } from '../assets/samples/allCard'

const Carts = () => {

  return (
    <CardsContainer>
      {SampleCards.slice(0, 5).map(card => (<CartItem key={card.id} product={card} />))}
      <ButtonsContainer>
        <Button><RiCreativeCommonsSaLine size="20" />Reset Cart</Button>
        <Button><RiShoppingBasketLine size="20"/>Checkout</Button>
      </ButtonsContainer>
    </CardsContainer>
  )
}

export default Carts
