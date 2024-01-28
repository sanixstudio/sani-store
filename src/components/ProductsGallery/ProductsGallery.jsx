import React from "react";
import NewCard from "../Card/NewCard";

const ProductsGallery = ({ data, title }) => {
  const products = data.slice(0, 8);

  return (
    <div className="mt-10 w-full mb-20">
      <div className="px-4 max-w-[1440px] mx-auto">
        <h2 className="text-2xl font-bold -mt-8 mb-6">{title}</h2>
        <div class="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((card) => (
            <NewCard key={card.id} product={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsGallery;
