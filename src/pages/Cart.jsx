import React, {useContext} from 'react'
import {RiCreativeCommonsSaLine, RiShoppingBasketLine} from 'react-icons/ri'
import { Button, CardsContainer, ButtonsContainer, CartItem } from '../components'

import { Context } from '../context/Context'

const Carts = () => {
  const { cart } = useContext(Context)

  return (
    <CardsContainer>
      {cart.map(card => (<CartItem key={card.id} product={card} />))}
      <ButtonsContainer>
        <Button><RiCreativeCommonsSaLine size="20" />Reset Cart</Button>
        <Button><RiShoppingBasketLine size="20"/>Checkout</Button>
      </ButtonsContainer>
    </CardsContainer>
  )
}

export default Carts
