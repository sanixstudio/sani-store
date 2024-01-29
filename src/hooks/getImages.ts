import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../lib/sanity";

const builder = imageUrlBuilder(sanityClient);

const useGetImages = (source: string) => {
  const imageUrl = builder.image(source);

  return { imageUrl };
};

export default useGetImages;
