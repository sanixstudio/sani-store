import { useState, useEffect } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { useLocation } from "react-router-dom";
import { CartItem, LaptopProduct } from "../types";
import Layout from "../layout/Layout";
import { getImage } from "../utils/getImages";
import { Button, Table } from "@radix-ui/themes";
import { BiCart } from "react-icons/bi";
import useGetDataFromSanity from "../hooks/getDataFromSanity";
import { useHandleCart } from "../hooks/useCart"; // Update the import to useHandleCart

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SpecsTable = ({ product }: { product: Pick<LaptopProduct, "specs"> }) => {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900">Specs</h3>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Key Specs</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Value</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.entries(product?.specs || {}).map(([key, value]) => (
            <Table.Row key={key}>
              <Table.Cell>
                <span className="capitalize">{key}</span>
              </Table.Cell>
              <Table.Cell>
                {value === false ? "No" : value === true ? "Yes" : value}
                {key === "refreshRate" ? " Hz" : ""}
                {key === "brightness" ? " Nits" : ""}
                {key === "screenSize" ? " Inches" : ""}
                {key === "systemMemoryRam" ? " GB" : ""}
                {key === "totalStorageCapacity" ? " GB" : ""}
                {key === "cpuBaseClockFrequency" ? " GHz" : ""}
                {key === "screenResolution" ? " Pixels" : ""}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default function ProductDetails() {
  const [displayImage, setDisplayImage] = useState<string>("");
  const pathName = useLocation().pathname;
  const productId = pathName.split("/")[2];
  const { products, isLoading, error } = useGetDataFromSanity();
  const addToCart = useHandleCart(); // Use the custom hook

  const product = products?.find(
    (product: LaptopProduct) => product?._id === productId
  );

  useEffect(() => {
    if (product) {
      const img = getImage(product?.mainImage?.asset?._ref);
      setDisplayImage(img);
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const cartItem: CartItem = {
    _id: product._id,
    mainImage: product.mainImage,
    title: product.title,
    quantity: 1,
    price: product.price,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Layout>
      <div className="bg-white">
        <div className="pt-6 max-w-2xl lg:max-w-7xl mx-auto">
          <div className="mx-auto max-w-2xl px-4 pb-10 pt-10 sm:px-6 lg:grid lg:max-w-7xl">
            <h2 className="text-2xl md:text-4xl font-bold">{product.title}</h2>
          </div>
          {/* Image gallery */}
          <div className="grid gap-4 px-6">
            <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <img
                className="h-auto max-h-[360px] md:max-h-[420px] max-w-full rounded-lg"
                src={displayImage}
                alt=""
              />
            </div>
            <div className="flex gap-4 mt-4 bg-slate-200 p-2 rounded-lg items-center overflow-x-scroll">
              {product.productImages.map(
                (image: { asset: { _ref: string } }, index: number) => (
                  <div key={`${image?.asset?._ref}-${index}`}>
                    <img
                      onClick={() =>
                        setDisplayImage(getImage(image?.asset?._ref))
                      }
                      className="max-w-[100px] cursor-pointer"
                      src={getImage(image?.asset?._ref)}
                      alt=""
                    />
                  </div>
                )
              )}
            </div>
          </div>
          {/* Product info */}
          <div className="mx-auto px-4 pb-16 pt-10 sm:px-6 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h2 className="text-lg md:text-2xl font-bold">
                {product.longTitle}
              </h2>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-2xl md:text-3xl tracking-tight font-bold text-[#E93D83]">
                ${product.price}
              </p>
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <TiStarFullOutline
                        key={index}
                        className={classNames(
                          product.rating > index
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-gray-900">
                    {product.rating.toFixed(1)} out of 5 stars
                  </p>
                </div>
              </div>
              <Button
                className="cursor-pointer mt-10"
                onClick={() =>
                  addToCart.addToCartWithToast(cartItem as CartItem)
                }
                size={"3"}
                variant="solid"
              >
                <BiCart size={24} />
                Add to Cart
              </Button>
            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlightFeatures.map(
                      (feature: string | undefined) => (
                        <li key={feature} className="text-gray-400">
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <SpecsTable product={product} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
