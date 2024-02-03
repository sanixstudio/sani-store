import useGetDataFromSanity from "../hooks/getDataFromSanity";
import { LaptopProduct } from "../types";
import Card from "./card";

export type ProductsGalleryProps = {
  title: string;
  limit?: number;
};

const ProductsGallery = ({ title, limit }: ProductsGalleryProps) => {
  const { products, isLoading, error } = useGetDataFromSanity();
  const productsToShow = products?.slice(0, limit);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-10 w-full mb-20">
      <div className="px-4 max-w-[1440px] mx-auto">
        <h2 className="text-2xl font-bold -mt-8 mb-6">{title}</h2>
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productsToShow?.map((laptop: LaptopProduct) => (
            <Card key={laptop._id} laptop={laptop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsGallery;
