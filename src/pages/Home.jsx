import React, {useContext} from 'react'
import { Card, Tag, CardsContainer } from '../components'

// testing data
import useGetProducts from '../hooks/useGetProducts'

const Home = () => {
  const {products} = useGetProducts()

  return (
    <>
      <Tag />
      <CardsContainer>
        {products.map(card => <Card key={card.id} product={card} />)}
      </CardsContainer>
    </>
  )
}

export default Home
