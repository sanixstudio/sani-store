import { useState } from "react";
import ProductCard from "../components/card";
import Error from "../components/error";
import Loader from "../components/loader";
import useGetDataFromSanity from "../hooks/getDataFromSanity";
import Layout from "../layout/Layout";
import { LaptopProduct } from "../types";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const pageNumbers = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <div className="flex items-center justify-center bg-[#E93D83]/10 text-white w-full border py-4 my-20">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="mx-2 text-sm font-semibold text-gray-900"
        >
          &larr; Previous
        </button>
      )}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-1 flex items-center rounded-md border border-[#E93D83]/50 bg-white px-3 py-1 text-gray-900 hover:scale-105 ${
            currentPage === page
              ? "bg-[#E93D83] text-black font-bold"
              : "text-[#7a7a7a] bg-transparent hover:bg-[#E93D83] hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <a
          href="#"
          onClick={() => onPageChange(currentPage + 1)}
          className="mx-2 text-sm font-semibold text-gray-900"
        >
          Next &rarr;
        </a>
      )}
    </div>
  );
};

const AllProducts = () => {
  const { products, isLoading, error } = useGetDataFromSanity();
  const itemsPerPage = 8; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Slice the products array to display items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <div className="w-full max-w-[1440px] mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-10">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedProducts.map((product: LaptopProduct) => (
            <ProductCard key={product._id} laptop={product} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default AllProducts;
