import useGetDataFromSanity from "../hooks/getDataFromSanity";
import Card from "./card";

export type Product = {
  id: number; // Change the type of id from string to number
  name: string;
  ratings: number;
  image: string;
  price: number;
  total_ratings: number;
};

export type ProductsGalleryProps = {
  title: string;
};

const ProductsGallery = ({ title }: ProductsGalleryProps) => {
  // const products = data.slice(0, 8);
  const { products, isLoading, error } = useGetDataFromSanity();

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
          {products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsGallery;
