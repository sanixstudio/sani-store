import { HomeContainer } from '../components/'
import { Card, CardsContainer, PageTitle } from '../components'

// API data to display as Store Products
import useGetProducts from '../hooks/useGetProducts'

const Home = () => {
  const { products } = useGetProducts()

  return (
    <HomeContainer>
    <PageTitle>All Products</PageTitle>
      <CardsContainer>
        {products.map(card => <Card key={card.id} product={card} />)}
      </CardsContainer>
    </HomeContainer>
  )
}

export default Home
