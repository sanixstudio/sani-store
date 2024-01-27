import { Filter, HomeContainer, LoadingSpinner } from "../components/";
import { Card, CardsContainer } from "../components";

// API data to display as Store Products
import useGetProducts from "../hooks/useGetProducts";
import { useState } from "react";

const Home = () => {
  const { products, error, loading } = useGetProducts();
  const [category, setCategory] = useState("");

  function filterByCategory(categoryName) {
    return products.filter((product) => product.category === categoryName);
  }

  const Results = () => {
    return category ? (
      filterByCategory(category).map((card) => (
        <Card key={card.id} product={card} />
      ))
    ) : loading ? (
      <LoadingSpinner />
    ) : (
      products.map((card) => <Card key={card.id} product={card} />)
    );
  };

  return (
    <HomeContainer>
      <Filter setCategory={setCategory} />
      <CardsContainer>
        <Results />
      </CardsContainer>
    </HomeContainer>
  );
};

export default Home;
