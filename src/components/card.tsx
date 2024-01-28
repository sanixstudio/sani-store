import { RiHeartLine, RiSearchLine } from "react-icons/ri";

const GrayStar = () => {
  return <span className="text-gray-300 text-xl">☆</span>;
};

const GoldenStar = () => {
  return <span className="text-yellow-500 text-xl">★</span>;
};

type CardProps = {
  product: {
    name: string;
    ratings: number;
    image: string;
    price: number;
    total_ratings: number;
  };
};

const Card = ({ product }: CardProps) => {
  const calculateGoldenStars = (ratings: number) => {
    const ratingsValue = Math.floor(ratings);
    const stars = [];

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
      <div className="w-[320px] h-full p-4 flex flex-col justify-between items-center gap-4 text-sm relative">
        <div className="absolute flex gap-4 justify-center items-center w-full h-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="rounded-full bg-[#e93d83] text-white p-2 cursor-pointer">
            <RiHeartLine size={32} />
          </div>
          <div className="rounded-full bg-[#e93d83] text-white p-2 cursor-pointer">
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
          <div className="flex text-yellow-500 items-center -mb-4">
            {calculateGoldenStars(product.ratings)}{" "}
            <span className="ml-2">({product.total_ratings})</span>
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

export default Card;
