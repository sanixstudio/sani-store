import React, { useContext } from 'react'
import {CardsContainer, WishCard} from '../components'

// testing data
import { SampleCards } from '../assets/samples/allCard'
import {Context} from '../context/Context'

const WishList = () => {
  const {initialState} = useContext(Context)

  return (
    <CardsContainer>
      {SampleCards.slice(0, 6).map(card => <WishCard key={card.id} product={card}></WishCard>)}
    </CardsContainer>
  )
}

export default WishList
