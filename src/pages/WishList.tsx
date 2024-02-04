import Error from "../components/error";
import FavoriteCard from "../components/favorite-card";
import Loader from "../components/loader";
import useGetDataFromSanity from "../hooks/getDataFromSanity";
import Layout from "../layout/Layout";
import { LaptopProduct } from "../types";
import { BsHeartFill } from "react-icons/bs";

const WishList = () => {
  const { products, isLoading, error } = useGetDataFromSanity();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  const favoriteProducts = products.filter(
    (product: LaptopProduct) => product.isFavorite
  );

  return (
    <Layout>
      <div className="w-full max-w-[1440px] mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-10">
          <BsHeartFill size={24} fill="red" className="inline-block mr-2" />
          Favorite Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {favoriteProducts?.map((product: LaptopProduct) => (
            <FavoriteCard key={product._id} laptop={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WishList;
