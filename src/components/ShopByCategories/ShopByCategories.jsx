import electronicsImage from "../../assets/images/electronics.jpg";
import clothesImage from "../../assets/images/clothes.png";
import decor from "../../assets/images/decor.png";

const ShopByCategories = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 py-16 ">
        <h2 className="text-2xl font-bold -mt-8 mb-6">SHOP BY CATEGORY</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="min-h-[250px] relative bg-gray-100 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${clothesImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 text-[#fff] flex justify-center items-center">
              <span className="font-bold text-2xl">Clothes</span>
            </div>
          </div>
          <div
            className="min-h-[250px] relative bg-gray-100 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${electronicsImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 text-[#fff] flex justify-center items-center">
              <span className="font-bold text-2xl">Electronics</span>
            </div>
          </div>
          <div
            className="min-h-[250px] relative bg-gray-100 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${decor})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 text-[#fff] flex justify-center items-center">
              <span className="font-bold text-2xl">Decoration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategories;
