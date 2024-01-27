/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import {
  HomeContainer,
  NewCard,
  CardsContainer,
  Filter,
  LoadingSpinner,
} from "../components";
import { products } from "../sample_data/data";

const { useQuery } = require("react-query");

const API_URL = "https://fakestoreapi.com/products";

async function getStudentResults() {
  const response = await (await fetch(API_URL)).json();
  return response;
}

const NewHome = () => {
  const { isLoading, isError, error, data } = useQuery(
    "studentResults",
    getStudentResults
  );
  const [category, setCategory] = useState("");

  function filterByCategory(categoryName) {
    if (categoryName)
      return products.filter((product) => product.category === categoryName);
    else return products.slice(0, 8);
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <HomeContainer>{error}</HomeContainer>;
  }

  return (
    <HomeContainer>
      <Filter setCategory={setCategory} />
      <CardsContainer>
        {filterByCategory(category).map((card) => (
          <NewCard key={card.id} product={card} />
        ))}
      </CardsContainer>
    </HomeContainer>
  );
};

export default NewHome;
