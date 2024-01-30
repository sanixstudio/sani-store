import { RiHeartLine, RiSearchLine } from "react-icons/ri";
import { getImage } from "../utils/getImages";
import { LaptopProduct } from "../types";
import { Link } from "react-router-dom";

const GrayStar = () => {
  return <span className="text-gray-300 text-xl">☆</span>;
};

const GoldenStar = () => {
  return <span className="text-yellow-500 text-xl">★</span>;
};

const ProductCard = ({ laptop }: { laptop: LaptopProduct }) => {
  const calculateGoldenStars = (ratings: number) => {
    const ratingsValue = Math.floor(ratings);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(<GrayStar key={i} />);
    }

    for (let i = 0; i < ratingsValue; i++) {
      stars[i] = <GoldenStar key={i} />;
    }

    return stars;
  };

  return (
    <div className="w-full border mx-0 my-4 flex flex-col justify-between items-center gap-4 relative group rounded-md">
      <div className="w-[320px] h-full p-4 flex flex-col justify-between items-center gap-4 text-sm relative">
        <div className="absolute flex gap-4 justify-center items-center w-full h-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="rounded-full bg-[#e93d83] text-white p-2 cursor-pointer">
            <RiHeartLine size={32} />
          </div>
          <Link
            to={`/product-details/${laptop._id}`}
            className="rounded-full bg-[#e93d83] text-white p-2 cursor-pointer"
          >
            <RiSearchLine size={32} />
          </Link>
        </div>
        <div>
          <img
            className="w-full p-4"
            src={getImage(laptop.mainImage.asset._ref)}
            alt="laptop"
          />
        </div>
        <div className="flex flex-col w-full gap-2 mt-2 px-4">
          <span className="text-[1.1rem] uppercase font-semibold w-full">
            {laptop.title}
          </span>
          <span className="text-[1.1rem] w-full font-semibold text-[#E93D83]">
            $ {laptop.price}
          </span>
          <div className="flex text-yellow-500 items-center -mb-4">
            {calculateGoldenStars(laptop.rating)}{" "}
            <span className="ml-2">({laptop.totalReviews})</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="bg-[#E93D83] p-2 w-full text-white rounded-b-md">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
