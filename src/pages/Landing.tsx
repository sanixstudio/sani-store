import ProductsGallery from "../components/ProductGallery";
import ShopByCategories from "../components/ShopByCategories";
import Banner from "../components/banner";
import Hero from "../components/hero";
import LandingContent from "../containers/landing-content";
import { products } from "../sample_data/data";

const Landing = () => {
  return (
    <div>
      <Hero />
      <LandingContent />
      <ShopByCategories />
      <ProductsGallery data={products} title={"TOP NEW ARRIVALS"} />
      <Banner />
      <ProductsGallery data={products} title={"RECOMMENDED FOR YOU"} />
    </div>
  );
};

export default Landing;
