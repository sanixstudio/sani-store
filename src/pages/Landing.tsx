import ProductsGallery from "../components/ProductGallery";
import ShopByCategories from "../components/ShopByCategories";
import Banner from "../components/banner";
import Hero from "../components/hero";
import LandingContent from "../containers/landing-content";

const Landing = () => {
  return (
    <div>
      <Hero />
      <LandingContent />
      <ShopByCategories />
      <ProductsGallery title={"TOP NEW ARRIVALS"} />
      <Banner />
      <ProductsGallery title={"RECOMMENDED FOR YOU"} />
    </div>
  );
};

export default Landing;
