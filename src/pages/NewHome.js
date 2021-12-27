import React, { useState } from 'react'
import { HomeContainer, NewCard, CardsContainer, Filter, LoadingSpinner } from '../components'

const { useQuery } = require("react-query");

const API_URL = "https://fakestoreapi.com/products";

async function getStudentResults() {
  const response = await (await fetch(API_URL)).json()
  return response
}

const NewHome = () => {
  const { isLoading, isError, error, data } = useQuery('studentResults', getStudentResults)
  const [category, setCategory] = useState("")

  function filterByCategory(categoryName) {
    if (categoryName) return data.filter(product => product.category === categoryName)
    else return data
  }

  if (isLoading) {
    return (<LoadingSpinner />)
  }

  if (isError) {
    return (<HomeContainer>{error}</HomeContainer>)
  }

  return (
    <HomeContainer>
      <Filter setCategory={setCategory} />
      <CardsContainer>
        {filterByCategory(category).map(card => <NewCard key={card.id} product={card} />)}
      </CardsContainer>
    </HomeContainer>
  )
}

export default NewHome
