import { ChangeEvent, FormEvent, useState } from "react";
import {
  RiShoppingCartLine,
  RiHeartLine,
  RiSearchLine,
  RiMenuFill,
  RiCloseLine,
} from "react-icons/ri";
import { Button, DropdownMenu } from "@radix-ui/themes";

import { Link, useNavigate } from "react-router-dom";
import { SiApple, SiAsus, SiDell, SiHp } from "react-icons/si";
import { SignInButton, UserButton, useAuth } from "@clerk/clerk-react";
import { useCartStore } from "../store/appStore";
import useGetWishlist from "../hooks/getWishList";

const Header = () => {
  const navigate = useNavigate();
  let [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { cart } = useCartStore();
  const { productsCount } = useGetWishlist();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setQuery(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  const toggleSearchMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeNavMenu = () => {
    setNavMenuIsOpen(false);
  };

  const openNavMenu = () => {
    setNavMenuIsOpen(true);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center px-4 py-3 relative">
          {isOpen ? (
            <div className="absolute top-14 z-10 flex justify-center items-center left-0 md:hidden w-full bg-slate-200">
              <form onSubmit={handleSubmit}>
                <div className="mx-4 flex w-full border-[#E93D83] rounded-l-md rounded-r-md justify-between items-center">
                  <RiSearchLine color="gray" size={24} className="mx-4" />
                  <input
                    type="text"
                    className="flex-1 p-2 focus:outline-none focus:bg-slate-100 mr-2"
                    value={query}
                    onChange={handleInputChange}
                  />
                  <button className="px-6 py-3 bg-[#E93D83] text-white rounded-r-md">
                    Search
                  </button>
                </div>
              </form>
            </div>
          ) : null}
          <div className="w-fit">
            <a href="/" className="flex gap-2">
              <div>
                <span className="inline-block text-xl md:text-2xl lg:text-3xl px-2 bg-[#E93D83] text-white rounded-md">
                  S
                </span>
                <span className="hidden lg:inline-block text-xl md:text-2xl lg:text-3xl font-bold text-[#E93D83]">
                  ANI
                </span>
              </div>
              <div>
                <span className="inline-block px-2 text-xl md:text-2xl lg:text-3xl bg-slate-700 text-white rounded-md">
                  S
                </span>
                <span className="hidden lg:inline-block text-xl md:text-2xl lg:text-3xl font-bold text-slate-700">
                  TORE
                </span>
              </div>
            </a>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="hidden md:flex w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] mx-4 lg:max-w-[600px] border border-[#E93D83] rounded-l-md rounded-r-md justify-between items-center">
              <RiSearchLine size={24} className="mx-4" />
              <input
                type="text"
                className="flex-1 p-2 focus:outline-none focus:bg-slate-100 mr-2"
                value={query}
                onChange={handleInputChange}
              />
              <button className="px-6 py-3 bg-[#E93D83] text-white rounded-r-md">
                Search
              </button>
            </div>
          </form>
          <div className="md:hidden mx-4">
            <Button variant="ghost" onClick={toggleSearchMenu}>
              {isOpen ? <RiCloseLine size={24} /> : <RiSearchLine size={24} />}
            </Button>
          </div>
          <div className="flex justify-between gap-6">
            <Link className="relative text-white" to="/wishlist">
              <RiHeartLine size={28} color="gray" />
              <div className="absolute w-[20px] h-[20px] -top-[.5em] -right-[8px] flex items-center justify-center rounded-full bg-[#E93D83]">
                {productsCount}
              </div>
            </Link>
            <Link className="relative text-white" to="/cart">
              <RiShoppingCartLine size={28} color="gray" />
              <div className="absolute w-[20px] h-[20px] -top-[.5em] -right-[8px] flex items-center justify-center rounded-full bg-[#E93D83]">
                {cart.length || 0}
              </div>
            </Link>
            {isSignedIn ? (
              <UserButton afterSignOutUrl={`/`} />
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </div>

      {/* Second Menu */}
      <div
        className="w-full bg-[#1F2937] text-white"
        style={{ marginTop: isOpen ? "3.3em" : 0 }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center gap-8 relative">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button
                color="crimson"
                size={"4"}
                radius="none"
                className="bg-secondary"
                style={{ fontSize: "1rem" }}
              >
                <RiMenuFill size={24} />
                All Categories
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-full">
              <DropdownMenu.Item className="hover:bg-[#E93D83] min-w-[150px]">
                <Link to="/all-products" className="w-full p-1">
                  All
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item className="hover:bg-[#E93D83] min-w-[150px]">
                <Link
                  to="/apple"
                  className="w-full flex p-1 items-center gap-2"
                >
                  <SiApple />
                  APPLE
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="hover:bg-[#E93D83] min-w-[150px]">
                <Link to="/dell" className="w-full flex p-1 items-center gap-2">
                  <SiDell />
                  DELL
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="hover:bg-[#E93D83] min-w-[150px]">
                <Link to="/hp" className="w-full flex p-1 items-center gap-2">
                  <SiHp />
                  HP
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="hover:bg-[#E93D83] min-w-[150px]">
                <Link to="/asus" className="w-full flex p-1 items-center gap-2">
                  <SiAsus size={32} />
                  ASUS
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <div className="md:hidden flex justify-center items-center">
            {navMenuIsOpen ? (
              <Button
                variant="ghost"
                className="md:hidden cursor-pointer absolute right-8"
              >
                <RiCloseLine size={24} color="white" onClick={closeNavMenu} />
              </Button>
            ) : (
              <Button
                variant="ghost"
                className="md:hidden cursor-pointer absolute right-8"
              >
                <RiMenuFill size={24} color="white" onClick={openNavMenu} />
              </Button>
            )}
          </div>
          {!navMenuIsOpen && (
            <div className="hidden md:block right-0 top-[47px] bg-slate-800 w-full md:w-fit">
              <div className="flex flex-col md:flex-row gap-8 p-4 md:p-0 justify-center items-center">
                <Link to="/">Home</Link>
                <Link to="/all-products">Shop</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {navMenuIsOpen ? (
            <div className="absolute z-10 md:block right-0 top-[47px] bg-slate-800 w-full md:w-fit">
              <div className="flex flex-col md:flex-row gap-6 p-4 md:p-0 justify-center items-center py-8">
                <Link
                  className="hover:border-b hover:border-[#E93D83] w-full text-center border-b border-transparent"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="hover:border-b hover:border-[#E93D83] w-full text-center border-b border-transparent"
                  to="/all-products"
                >
                  Shop
                </Link>
                <Link
                  className="hover:border-b hover:border-[#E93D83] w-full text-center border-b border-transparent"
                  to="/about"
                >
                  About Us
                </Link>
                <Link
                  className="hover:border-b hover:border-[#E93D83] w-full text-center border-b border-transparent"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
