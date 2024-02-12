import { useLocation } from "react-router-dom";
import ProductCard from "../components/card";
import useGetDataFromSanity from "../hooks/getDataFromSanity";
import Layout from "../layout/Layout";
import { LaptopProduct } from "../types";
import Loader from "../components/loader";
import Error from "../components/error";

const Search = () => {
  const { products, isLoading, error } = useGetDataFromSanity();
  const pathName = useLocation().pathname;
  const queryString = decodeURI(pathName.split("/").pop() as string);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  console.log(queryString);
  console.log(products);

  const searchedResults = products.filter(
    (product: LaptopProduct) =>
      product.title
        .toLocaleLowerCase()
        .includes(queryString.toLocaleLowerCase()) ||
      product.longTitle.toLowerCase().includes(queryString.toLowerCase())
  );

  console.log(searchedResults);

  return (
    <Layout>
      <div className="w-full max-w-[1440px] mx-auto min-h-[calc(100vh-550px)] px-4 py-10">
        <h1 className="text-2xl font-bold mb-10">Search Results</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {searchedResults.map((product: LaptopProduct) => (
            <ProductCard key={product._id} laptop={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
