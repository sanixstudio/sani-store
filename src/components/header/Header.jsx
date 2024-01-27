import React, { useState } from "react";
import {
  RiShoppingCartLine,
  RiHeartLine,
  RiUser3Line,
  RiSearchLine,
  RiMenuFill,
  RiCloseLine,
} from "react-icons/ri";
import { Button, DropdownMenu } from "@radix-ui/themes";

import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

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
              <div className="mx-4 flex w-full border-[#E93D83] rounded-l-md rounded-r-md justify-between items-center">
                <RiSearchLine color="gray" size={24} className="mx-4" />
                <input
                  type="text"
                  className="flex-1 p-2 focus:outline-none focus:bg-slate-100 mr-2"
                />
                <button className="px-6 py-3 bg-[#E93D83] text-white rounded-r-md">
                  Search
                </button>
              </div>
            </div>
          ) : null}
          <div className="w-fit">
            <a href="/" className="flex gap-2">
              <span className="text-2xl md:text-4xl font-bold text-[#E93D83]">
                SANI{" "}
              </span>
              <span className="text-2xl md:text-4xl font-bold text-[#1F2937]">
                STORE
              </span>
            </a>
          </div>
          <div className="hidden md:flex w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] mx-4 lg:max-w-[600px] border border-[#E93D83] rounded-l-md rounded-r-md justify-between items-center">
            <RiSearchLine size={24} className="mx-4" />
            <input
              type="text"
              className="flex-1 p-2 focus:outline-none focus:bg-slate-100 mr-2"
            />
            <button className="px-6 py-3 bg-[#E93D83] text-white rounded-r-md">
              Search
            </button>
          </div>
          <div className="md:hidden mx-4">
            <Button variant="ghost" onClick={toggleSearchMenu}>
              {isOpen ? <RiCloseLine size={24} /> : <RiSearchLine size={24} />}
            </Button>
          </div>
          <div className="flex justify-between gap-6">
            <Link className="relative text-white" to="wishlist">
              <RiHeartLine size={28} color="gray" />
              <div className="absolute w-[20px] h-[20px] -top-[.5em] -right-[8px] flex items-center justify-center rounded-full bg-[#E93D83]">
                3
              </div>
            </Link>
            <Link className="relative text-white" to="cart">
              <RiShoppingCartLine size={28} color="gray" />
              <div className="absolute w-[20px] h-[20px] -top-[.5em] -right-[8px] flex items-center justify-center rounded-full bg-[#E93D83]">
                2
              </div>
            </Link>
            <Link className="relative text-white" to="/">
              <RiUser3Line size={28} color="gray" />
            </Link>
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
                <Link to="/" className="w-full">
                  All
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="hover:bg-[#E93D83] min-w-[150px]">
                <Link to="/" className="w-full">
                  Men
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="hover:bg-[#E93D83] min-w-[150px]">
                <Link to="/" className="w-full">
                  Women
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="hover:bg-[#E93D83] min-w-[150px]">
                <Link to="/" className="w-full">
                  Children
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item className="hover:bg-[#E93D83] min-w-[150px]">
                <Link to="/" className="w-full">
                  Jewelry
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="hover:bg-[#E93D83] min-w-[150px]">
                <Link to="/" className="w-full">
                  Electronics
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
                <Link to="/">Shop</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Contact Us</Link>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {navMenuIsOpen ? (
            <div className="absolute md:block right-0 top-[47px] bg-slate-800 w-full md:w-fit">
              <div className="flex flex-col md:flex-row gap-6 p-4 md:p-0 justify-center items-center">
                <Link to="/">Home</Link>
                <Link to="/">Shop</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Contact Us</Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
