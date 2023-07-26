import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://webwines-389de0eff6d3.herokuapp.com/api/products-list")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(4);

  // get current products
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const setPage = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <div className="w-full  flex flex-col">
        <div className='w-[80%] container max-w-6xl mx-auto p-2 flex justify-between'>
          <span className='font-bold text-2xl my-auto'>Best sellers</span>
          <button className='rounded-full w-[120px] p-2 bg-red-500 text-base text-white hover:bg-red-700'>View more</button>
        </div>

      <div className="flex w-full h-[75%]">
        <Product
          products={currentProducts}
          name={currentProducts.name}
          price={currentProducts.price}
          abv={currentProducts.abv}
          image={currentProducts.image}
        />
      </div>
    </div>
  );
};

export default ProductsGrid;
