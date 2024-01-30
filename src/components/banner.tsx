import { Button } from "@radix-ui/themes";
import bannerBg from "../assets/images/banner_bg_2.png";

const Banner = () => {
  return (
    <div className="w-full mb-28">
      <div className="max-w-[1440px] mx-auto">
        <div
          className="mx-4 border bg-[#ffafcf]/10"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center right",
          }}
        >
          <div className="flex flex-col py-8 px-16 text-white gap-5 bg-[#ffafcf] max-w-[460px] rounded-r-full">
            <span
              style={{ textShadow: "2px 2px 2px #000000" }}
              className="md:text-xl font-bold"
            >
              OUR EXCLUSIVE
            </span>
            <div className="flex gap-4">
              <span
                style={{ textShadow: "5px 5px 6px #000000" }}
                className="text-5xl md:text-7xl font-bold"
              >
                15%
              </span>
              <span
                style={{ textShadow: "5px 5px 6px #000000" }}
                className="text-5xl md:text-7xl font-bold"
              >
                OFF
              </span>
            </div>
            <span
              style={{ textShadow: "2px 2px 1px #000000" }}
              className="md:text-2xl"
            >
              Apple, Dell and HP Laptops
            </span>
            <Button className="self-start">Shop Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
