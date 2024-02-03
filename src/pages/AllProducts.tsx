import ProductCard from "../components/card";
import Error from "../components/error";
import Loader from "../components/loader";
import useGetDataFromSanity from "../hooks/getDataFromSanity";
import Layout from "../layout/Layout";
import { LaptopProduct } from "../types";

const AllProducts = () => {
  const { products, isLoading, error } = useGetDataFromSanity();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Layout>
      <div className="w-full max-w-[1440px] mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-10">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products?.map((product: LaptopProduct) => (
            <ProductCard key={product._id} laptop={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
