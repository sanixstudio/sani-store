import React from 'react'
import { Container, TagButton, TagsButtonContainer } from './styles'

// API data to display as Store Products
import useGetProducts from '../../hooks/useGetProducts'

const Tag = ({setCategory}) => {

  return (
    <Container>
      <TagsButtonContainer>
        <TagButton onClick={(e)=> setCategory(e.target.value)} value="">All</TagButton>
        <TagButton onClick={(e)=> setCategory(e.target.value)} value="men's clothing">Men's Clothing</TagButton>
        <TagButton onClick={(e)=> setCategory(e.target.value)} value="women's clothing">Women's Clothing</TagButton>
        <TagButton onClick={(e)=> setCategory(e.target.value)} value="jewelery">Jewelry</TagButton>
        <TagButton onClick={(e)=> setCategory(e.target.value)} value="electronics">Electronics</TagButton>
      </TagsButtonContainer>
    </Container>
  )
}

export default Tag
