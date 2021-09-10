import React, { useState } from 'react'
import { HomeContainer } from '../components/'
import { Card, Tag, CardsContainer } from '../components'

// API data to display as Store Products
import useGetProducts from '../hooks/useGetProducts'

const Home = () => {
  const { products } = useGetProducts()
  const [category, setCategory] = useState(null)

  let newProducts

  newProducts = products.filter(el => el.category === category)

  return (
    <HomeContainer>
      <Tag setCategory={setCategory} />
      <CardsContainer>
        {category && newProducts.map(card => <Card key={card.id} product={card} />)}
        {!category && products.map(card => <Card key={card.id} product={card} />)}
      </CardsContainer>
    </HomeContainer>
  )
}

export default Home
