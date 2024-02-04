import { Link } from "react-router-dom";
import bg from "../assets/images/bg.jpg";

export default function Hero() {
  return (
    <div className="bg-gradient-to-t text-white from-transparent overflow-hidden to-pink-500/10 h-[600px] max-h-[400px] md:max-h-[600px] flex items-center justify-center">
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        className="w-full max-w-[1440px] h-full flex justify-center items-center"
      >
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Explore Laptops,
                <br />
                with best shopping experience
              </h1>
              <p className="mt-6 text-lg leading-8 ">
                Find best deals all around the year. Shop and save with new and
                recommended laptops. Let's start exploring...
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="#"
                  className="rounded-md bg-white px-6 py-3 font-semibold text-[#E93D83] shadow-sm hover:bg-white/80 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
