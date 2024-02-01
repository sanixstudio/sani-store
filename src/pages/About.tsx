import { BiShoppingBag } from "react-icons/bi";
import Layout from "../layout/Layout";
import { Button } from "@radix-ui/themes";
import appleImg from "../assets/images/apple_bg.jpg";
import dellImg from "../assets/images/dell_bg.png";
import hpImg from "../assets/images/hp_bg.png";
import { MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import useScreenSize from "../hooks/useScreenSize";

export default function About() {
  const screenSize = useScreenSize();
  let iconSize = 64;

  switch (screenSize) {
    case "sm":
      iconSize = 48;
      break;
    default:
      break;
  }

  return (
    <Layout>
      <div className="w-full mb-20">
        {/* Hero Section */}
        <div className="relative w-full bg-white">
          <div className="mx-auto max-w-[1440px] lg:px-8">
            <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
              <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                Welcome to Our Online Store
              </h1>
              <p className="mt-8 max-w-3xl text-lg text-gray-700">
                Discover a wide range of high-quality products and enjoy the
                best shopping experience.
              </p>
              <div className="mt-8">
                <Button size={"3"}>
                  <BiShoppingBag size={24} /> Shop Now
                </Button>
              </div>
            </div>
            <div className="rounded-lg bg-gray-200 p-4 flex">
              <div
                className="bg-teal-400 w-full max-h-[500px] h-[100vh]"
                style={{
                  backgroundImage: `url(${appleImg})`,
                  backgroundSize: "contain",
                }}
              ></div>
              <div
                className="bg-teal-400 w-full max-h-[500px] h-[100vh]"
                style={{
                  backgroundImage: `url(${dellImg})`,
                  backgroundSize: "contain",
                }}
              ></div>
              <div
                className="bg-teal-400 w-full max-h-[500px] h-[100vh]"
                style={{
                  backgroundImage: `url(${hpImg})`,
                  backgroundSize: "contain",
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="mx-auto my-12 max-w-[1440px] px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We offer a range of benefits to enhance your shopping experience.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E93D83]/10">
                <MdOutlineLocalShipping color="#E93D83" size={iconSize} />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Free Shipping
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Enjoy free shipping on all orders, no matter the size.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E93D83]/10">
                <LiaHandHoldingUsdSolid color="#E93D83" size={iconSize} />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Return Policy
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                We offer a hassle-free return policy to ensure your
                satisfaction.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E93D83]/10">
                <MdOutlineSupportAgent color="#E93D83" size={iconSize} />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                24/7 Support
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Our dedicated support team is available around the clock to
                assist you.
              </p>
            </div>
          </div>
        </div>
        {/* FAQs */}
        <section className="mx-auto max-w-[1440px] bg-gray-50 px-2 py-10 md:px-0">
          <div>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                Explore some common questions and answers.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <h2 className="text-xl font-semibold text-black">
                    How do I get started?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat aliquam adipisci iusto aperiam? Sint asperiores
                    sequi nobis inventore ratione deleniti?
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-gray-600">
              Can't find what you're looking for?{" "}
              <a
                href="/contact" // Replace with your contact page URL
                className="text-[#E93D83] font-semibold"
              >
                Contact us
              </a>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
