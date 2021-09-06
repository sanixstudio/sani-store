import React from 'react'
import Card from '../components/Card/Card'
import CardsContainer from '../components/CardsContainer/CardsContainer'

// testing data
import { SampleCards } from '../assets/samples/allCard'

const Home = () => {
  return (
    <CardsContainer>
      {SampleCards.map(card => <Card key={card.id} product={card} />)}
    </CardsContainer>
  )
}

export default Home
