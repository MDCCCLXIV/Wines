import React, { Component, useContext, useState } from "react";
import { AppContext } from "../App";
import { BsCartPlus } from "react-icons/bs";
import Pagination from "./Pagination";
import { handleAddToBasket } from "../api/apis";

const ShopProducts = () => {
  const { shopProducts, products, setProducts } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = shopProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const setPage = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  // Maintain a separate state for each product item
  const [isButtonVisible, setButtonVisibility] = useState([]);

  const handleMouseEnter = (index) => {
    setButtonVisibility((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setButtonVisibility((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <div className="w-[78%] h-[80vh] flex flex-col ">
      <div className="grid grid-cols-4 w-full h-[90%] grid-rows-2 gap-1 p-2">
        {currentProducts.map(
          (
            {
              product_name,
              price,
              alcohol_content,
              image,
              Description,
              id,
              quantity,
            },
            index
          ) => {
            return (
              <div
                key={id}
                className="flex flex-col container  p-2 bg-white hover:cursor-pointer border rounded m-1 align-middle hover:border-red-500 text-sm"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  className="w-full h-[65%] flex bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <span className="ms-auto">abv {alcohol_content}%</span>
                </div>
                <div className="flex h-[35%] flex-col p-1">
                  <div className="flex w-full justify-between text-sm ">
                    <span>
                      {product_name} - {Description}
                    </span>
                  </div>
                  <div className="flex flex-col w-full justify-evenly text-sm">
                    <span className="text-sm">ratings</span>
                    <span className="mx-auto font-medium">KES {price}.00</span>
                  </div>
                  <button
                    className={`w-full ${
                      isButtonVisible[index] ? "block" : "hidden"
                    } bg-red-500 p-2 m-auto hover:text-white rounded-md text-sm`}
                    onClick={() => {
                      const productExists = products.find((p) => p.id === id);
                      if (productExists) {
                        alert("Product is already in the cart.");
                        return;
                      }
                      handleAddToBasket(
                        {
                          product_name,
                          price,
                          alcohol_content,
                          image,
                          Description,
                          id,
                          quantity,
                        },
                        setProducts
                      );
                    }}
                  >
                    <BsCartPlus className="m-auto" size={22} />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>

      <div className="w-full flex mx-auto container p-1 m-1">
        <Pagination
          productPerPage={productPerPage}
          totalProducts={shopProducts.length}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default ShopProducts;
