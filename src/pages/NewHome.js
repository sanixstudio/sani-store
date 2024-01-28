/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import {
  HomeContainer,
  LoadingSpinner,
  Features,
  ShopByCategories,
  ProductsGallery,
  Banner,
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

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <HomeContainer>{error}</HomeContainer>;
  }

  return (
    <HomeContainer>
      {/* <Filter setCategory={setCategory} /> */}
      <Features />
      <ShopByCategories />
      <ProductsGallery data={products} title={"TOP NEW ARRIVALS"} />
      <Banner />
      <ProductsGallery data={products} title={"RECOMMENDED FOR YOU"} />
    </HomeContainer>
  );
};

export default NewHome;
