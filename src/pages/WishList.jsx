import React, { useContext } from 'react'
import { CardsContainer, HomeContainer, WishCard } from '../components'

import { Context } from '../context/Context'

const WishList = () => {
  const { wishList } = useContext(Context)

  return (
    <HomeContainer>
      <CardsContainer>
        {wishList.map(card => <WishCard key={card.id} product={card}></WishCard>)}
      </CardsContainer>
    </HomeContainer>
  )
}

export default WishList
