import { SiDell } from "react-icons/si";
import ProductCard from "../components/card";
import Error from "../components/error";
import Loader from "../components/loader";
import useGetDataFromSanity from "../hooks/getDataFromSanity";
import Layout from "../layout/Layout";
import { LaptopProduct } from "../types";

const Dell = () => {
  const { products, isLoading, error } = useGetDataFromSanity();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  const dellLaptops = products.filter(
    (product: LaptopProduct) => product.category === "Dell"
  );

  return (
    <Layout>
      <div className="w-full max-w-[1440px] min-h-[calc(100vh-500px)] mx-auto px-4 py-10">
        <h1 className="flex items-center gap-2 text-2xl font-bold mb-10">
          <SiDell size={32} />
          Dell Laptops
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {dellLaptops?.map((product: LaptopProduct) => (
            <ProductCard key={product._id} laptop={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dell;
