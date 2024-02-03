import ProductsGallery from "../components/ProductGallery";
import ShopByCategories from "../components/ShopByCategories";
import Banner from "../components/banner";
import Features from "../components/features";
import Hero from "../components/hero";

const LandingContent = () => {
  return (
    <>
      <Hero />
      <Features />
      <ShopByCategories />
      <ProductsGallery title={"TOP NEW ARRIVALS"} limit={8} />
      <Banner />
      <ProductsGallery title={"RECOMMENDED FOR YOU"} limit={6} />
    </>
  );
};

export default LandingContent;
