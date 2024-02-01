import { Button } from "@radix-ui/themes";
import { SiDell, SiApple, SiHp } from "react-icons/si";

import apple from "../assets/images/apple_bg.jpg";
import dell from "../assets/images/dell_bg.png";
import hp from "../assets/images/hp_bg.png";
import { useNavigate } from "react-router-dom";

const ShopByCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 py-16 ">
        <h2 className="text-2xl font-bold -mt-8 mb-6">SHOP BY CATEGORY</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="min-h-[250px] relative bg-gray-100 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${apple})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black/40 text-[#fff] flex justify-center items-center">
              <Button
                onClick={() => navigate("/apple")}
                size={"4"}
                className="font-bold rounded-full cursor-pointer"
              >
                <SiApple size={32} />
                APPLE
              </Button>
            </div>
          </div>
          <div
            className="min-h-[250px] relative bg-gray-100 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${dell})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black/40 text-[#fff] flex justify-center items-center">
              <Button
                onClick={() => navigate("/dell")}
                size={"4"}
                className="font-bold rounded-full cursor-pointer"
              >
                <SiDell size={32} />
                DELL
              </Button>
            </div>
          </div>
          <div
            className="min-h-[250px] relative bg-gray-100 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${hp})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black/40 text-[#fff] flex justify-center items-center">
              <Button
                onClick={() => navigate("/hp")}
                size={"4"}
                className="font-bold rounded-full cursor-pointer"
              >
                <SiHp size={32} />
                HP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategories;
