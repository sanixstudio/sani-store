import { BiTrash } from "react-icons/bi";
import Layout from "../layout/Layout";
import { useCartStore } from "../store/appStore";
import { getImage } from "../utils/getImages";
import { TbMoodEmpty } from "react-icons/tb";
import { useHandleCart } from "../hooks/useCart";
import { Button } from "@radix-ui/themes";
import useScreenSize from "../hooks/useScreenSize";
import { BsArrowRight, BsCart2 } from "react-icons/bs";
import { handleClearCart } from "../utils/cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart: cartItems, removeFromCart } = useCartStore();
  const { increaseItemQuantity, decreaseItemQuantity } = useHandleCart();

  const cartTotal = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const screenSize = useScreenSize();

  return (
    <Layout>
      <div className="max-w-[1440px] mx-auto py-10 min-h-[calc(100vh-500px)]">
        <div className="mx-4">
          <div className="mx-auto max-w-7xl px-2 lg:px-0">
            <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Shopping Cart
              </h1>
              {cartItems.length > 0 ? (
                <form
                  className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <section
                    aria-labelledby="cart-heading"
                    className="rounded-lg bg-white lg:col-span-8"
                  >
                    <h2 id="cart-heading" className="sr-only">
                      Items in your shopping cart
                    </h2>
                    <ul role="list" className="divide-y divide-gray-200">
                      {cartItems.map((product) => (
                        <div key={product._id} className="">
                          <li className="flex py-6 sm:py-6">
                            <div className="flex-shrink-0">
                              <img
                                src={getImage(product.mainImage.asset._ref)}
                                alt={product.title}
                                className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                <div>
                                  <div className="flex justify-between">
                                    <h3 className="text-sm">
                                      <a
                                        href={`product-details/${product._id}`}
                                        className="font-semibold text-black"
                                      >
                                        {product.title}
                                      </a>
                                    </h3>
                                  </div>
                                  <div className="mt-1 flex items-end">
                                    <p className="text-xs font-medium text-gray-500 line-through">
                                      {product.price}
                                    </p>
                                    <p className="text-sm font-medium text-gray-900">
                                      &nbsp;&nbsp;{product.price}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <div className="mb-2 flex">
                            <div className="min-w-24 flex">
                              <button
                                onClick={() =>
                                  decreaseItemQuantity(product._id)
                                }
                                type="button"
                                className="h-7 w-7"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                className="mx-1 h-7 w-9 rounded-md border text-center"
                                value={product.quantity}
                                readOnly
                              />
                              <button
                                onClick={() =>
                                  increaseItemQuantity(product._id)
                                }
                                type="button"
                                className="flex h-7 w-7 items-center justify-center"
                              >
                                +
                              </button>
                            </div>
                            <div className="ml-6 flex text-sm">
                              <button
                                onClick={() => removeFromCart(product._id)}
                                type="button"
                                className="flex items-center space-x-1 px-2 py-1 pl-0"
                              >
                                <BiTrash size={12} className="text-red-500" />
                                <span className="text-xs font-medium text-red-500">
                                  Remove
                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between py-4 bg-gray-50 px-4">
                            <dt className="md:max-w-[200px] flex text-sm text-gray-800">
                              <span>{product.title}</span>
                            </dt>
                            <dd className="flex-1text-sm font-medium text-gray-500">
                              {product.quantity} qty
                            </dd>
                            <dd className="text-sm font-medium text-gray-500">
                              $ {product.price}
                            </dd>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </section>
                  {/* Order summary */}
                  <section
                    aria-labelledby="summary-heading"
                    className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                  >
                    <h2
                      id="summary-heading"
                      className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                    >
                      Price Details
                    </h2>
                    <div>
                      <dl className=" space-y-1 px-2 py-4">
                        <div className="flex items-center justify-between py-4 border-b">
                          <dt className="flex-1 font-bold flex text-sm text-gray-500">
                            <span>Product</span>
                          </dt>
                          <dd className="flex-1 text-sm font-bold text-gray-500">
                            Quantity
                          </dd>
                          <dd className="text-sm font-bold text-gray-500">
                            Price
                          </dd>
                        </div>
                        {cartItems.map((product) => (
                          <div
                            key={product._id}
                            className="flex items-center py-4"
                          >
                            <dt className="flex-1  text-sm text-gray-500">
                              <span>{product.title}</span>
                            </dt>
                            <dd className="flex-1 max-w-[200px] text-center text-sm font-medium text-gray-500">
                              {product.quantity}
                            </dd>
                            <dd className="text-sm font-medium text-gray-500">
                              $ {(product.price * product.quantity).toFixed(2)}
                            </dd>
                          </div>
                        ))}
                        <div className="flex items-center justify-between py-4 border-t border-gray-200">
                          <dt className="flex text-sm text-gray-800">
                            <span>Delivery Charges</span>
                          </dt>
                          <dd className="text-sm font-medium text-gray-500">
                            Free
                          </dd>
                        </div>
                        <div className="flex items-center justify-between border-y border-dashed py-4 ">
                          <dt className="text-base font-medium text-gray-900">
                            Total Amount
                          </dt>
                          <dd className="text-base font-medium text-gray-900">
                            $ {cartTotal.toFixed(2)}
                          </dd>
                        </div>
                      </dl>
                      <div className="px-2 py-4 flex justify-center">
                        {/* TODO: Add checkout button and logic with stripe */}
                        <Button
                          onClick={() => {
                            handleClearCart();
                          }}
                          size={screenSize === "sm" ? "2" : "3"}
                          className="cursor-pointer"
                        >
                          Place Order <BsArrowRight />
                        </Button>
                      </div>
                    </div>
                  </section>
                </form>
              ) : (
                <div className="my-20 flex flex-col items-center justify-center gap-4">
                  <h3 className="text-center border-b pb-4 flex gap-4 items-center justify-center text-xl text-gray-500">
                    <TbMoodEmpty size={32} /> Cart is empty
                  </h3>
                  <Link to={"/all-products"} className="flex items-center gap-2 px-4 py-3 rounded-md bg-[#f2f2f2] text-gray-600 hover:bg-[#e6e6e6] ">
                    <BsCart2 size={18} />Continue Shopping
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
