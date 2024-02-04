import { SiAsus } from "react-icons/si";
import ProductCard from "../components/card";
import Error from "../components/error";
import Loader from "../components/loader";
import useGetDataFromSanity from "../hooks/getDataFromSanity";
import Layout from "../layout/Layout";
import { LaptopProduct } from "../types";

const Asus = () => {
  const { products, isLoading, error } = useGetDataFromSanity();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  const asusLaptops = products.filter(
    (product: LaptopProduct) => product.category === "Asus"
  );

  return (
    <Layout>
      <div className="w-full max-w-[1440px] mx-auto min-h-[calc(100vh-500px)] px-4 py-10">
        <h1 className="text-2xl font-bold mb-10 flex gap-4 items-center">
          {" "}
          <SiAsus size={96} /> Laptops
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {asusLaptops?.map((product: LaptopProduct) => (
            <ProductCard key={product._id} laptop={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Asus;
