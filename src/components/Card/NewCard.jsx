import React from "react";
import { RiHeartLine, RiSearchLine } from "react-icons/ri";

const GrayStar = () => {
  return <span className="text-gray-300 text-xl">☆</span>;
};

const GoldenStar = () => {
  return <span className="text-yellow-500 text-xl">★</span>;
};

const NewCard = ({ product }) => {
  const calculateGoldenStars = (ratings) => {
    const ratingsValue = Math.floor(ratings);
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<GrayStar />);
    }

    for (let i = 0; i < ratingsValue; i++) {
      stars[i] = <GoldenStar />;
    }

    return stars;
  };

  return (
    <div className="w-full border mx-0 my-4 flex flex-col justify-between items-center gap-4 relative group rounded-md">
      <div className="w-full h-full p-4 flex flex-col justify-between items-center gap-4 text-sm relative">
        <div className="absolute flex gap-4 justify-center items-center w-full h-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <div>
            <RiHeartLine size={32} />
          </div>
          <div>
            <RiSearchLine size={32} />
          </div>
        </div>
        <div className="bg-gray-50">
          <img className="w-full" src={product.image} alt="product" />
        </div>
        <div className="flex flex-col w-full gap-2 mt-2">
          <span className="text-[1.1rem] uppercase font-semibold w-full">
            {product.name}
          </span>
          <span className="text-[1.1rem] w-full font-semibold text-[#E93D83]">
            $ {product.price}
          </span>
          <div className="flex text-yellow-500 items-center">
            {calculateGoldenStars(product.ratings)}{" "}
            <span className="ml-2">({product.total_ratings})</span>
          </div>
        </div>
      </div>
      <div className="w-full -mt-4">
        <button className="bg-[#E93D83] p-2 w-full text-white rounded-b-md">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default NewCard;
