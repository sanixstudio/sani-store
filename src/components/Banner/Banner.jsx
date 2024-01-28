import { Button } from "@radix-ui/themes";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full mb-40">
      <div className="max-w-[1440px] mx-auto">
        <div className="mx-4 border bg-slate-500">
          <div className="flex flex-col py-8 px-16 gap-5 bg-teal-300 max-w-[460px] rounded-r-full">
            <span className="md:text-xl">OUR EXCLUSIVE</span>
            <div className="flex gap-4">
              <span className="text-5xl md:text-7xl font-bold">15%</span>
              <span className="text-5xl md:text-7xl font-bold">OFF</span>
            </div>
            <span className="md:text-2xl">
              Men Shirts, Laptops, Speakers and Fry pans
            </span>
            <Button className="self-start">Shopt Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
