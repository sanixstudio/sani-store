import { Filter, HomeContainer } from '../components/'
import { Card, CardsContainer } from '../components'

// API data to display as Store Products
import useGetProducts from '../hooks/useGetProducts'
import { useState } from 'react'

const Home = () => {
  const { products } = useGetProducts()
  const [category, setCategory] = useState("")

  function filterByCategory(categoryName) {
    return products.filter(product => product.category === categoryName)
  }

  return (
    <HomeContainer>
      <Filter setCategory={setCategory} />
      <CardsContainer>
        {
          category ?
            filterByCategory(category).map(card => <Card key={card.id} product={card} />) :
            products.map(card => <Card key={card.id} product={card} />)
        }

      </CardsContainer>
    </HomeContainer>
  )
}

export default Home
