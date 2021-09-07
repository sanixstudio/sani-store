import React from 'react'
import {CardsContainer, WishCard} from '../components'

// testing data
import { SampleCards } from '../assets/samples/allCard'

const WishList = () => {
  return (
    <CardsContainer>
      {SampleCards.slice(0, 6).map(card => <WishCard key={card.id} product={card}></WishCard>)}
    </CardsContainer>
  )
}

export default WishList
