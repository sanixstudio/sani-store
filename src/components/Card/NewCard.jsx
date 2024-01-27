import React, { useState } from "react";
// import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

import {
  Container,
  CardDetails,
  CardHeader,
  CardPrice,
  CardImg,
  CardInfo,
  CardButtons,
  CardButton,
  CartIcon,
  HeaderIconFill,
} from "./styles";

const NewCard = ({ product }) => {
  const [alreadyInCart, setAlreadyInCart] = useState(false);

  return (
    <Container>
      <CardDetails>
        <CardHeader>
          <HeaderIconFill />
          <CardPrice>$ {product.price}</CardPrice>
        </CardHeader>
        {<CardImg src={product.image}></CardImg>}
        <CardInfo className="font-semibold">{product.name}</CardInfo>
      </CardDetails>
      <CardButtons>
        <CardButton disabled={alreadyInCart}>
          <CartIcon />
          Add to Cart
        </CardButton>
      </CardButtons>
    </Container>
  );
};

export default NewCard;
