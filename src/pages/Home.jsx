import React from 'react'
import {Card, Tag, CardsContainer} from '../components'

// testing data
import { SampleCards } from '../assets/samples/allCard'

const Home = () => {
  return (
    <>
    <Tag/>
      <CardsContainer>
        {SampleCards.map(card => <Card key={card.id} product={card} />)}
      </CardsContainer>
    </>
  )
}

export default Home
