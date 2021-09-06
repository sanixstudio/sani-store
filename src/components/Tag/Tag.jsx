import React from 'react'
import { Container, TagButton, TagsButtonContainer } from './styles'

const Tag = () => {
  const handleclick = (e)=> {
    console.log(e.target.value)
  }

  return (
    <Container>
      <TagsButtonContainer>
        <TagButton onClick={handleclick} value="Men's Clothing">Men's Clothing</TagButton>
        <TagButton onClick={handleclick} value="Women's Clothing">Women's Clothing</TagButton>
        <TagButton onClick={handleclick} value="Jewelry">Jewelry</TagButton>
        <TagButton onClick={handleclick} value="Electronics">Electronics</TagButton>
      </TagsButtonContainer>
    </Container>
  )
}

export default Tag
