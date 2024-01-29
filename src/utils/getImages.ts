import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../lib/sanity";

const builder = imageUrlBuilder(sanityClient);

export const getImage = (source: string) => {
  const imageUrl = builder.image(source);

  return imageUrl.url();
};
