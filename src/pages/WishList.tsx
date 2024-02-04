import Card from "../components/card";
import useGetWishlist from "../hooks/getWishList";
import Layout from "../layout/Layout";
import { LaptopProduct } from "../types";
import { BsHeartFill } from "react-icons/bs";

const WishList = () => {
  const { products: productList, productscount } = useGetWishlist();

  return (
    <Layout>
      <div className="w-full max-w-[1440px] mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-10">
          ({productscount}){" "}
          <BsHeartFill size={24} fill="red" className="inline-block mr-2" />
          Favorite Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productList?.map((product: LaptopProduct) => (
            <Card key={product._id} laptop={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WishList;
