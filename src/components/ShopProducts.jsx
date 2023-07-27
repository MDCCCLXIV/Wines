import React from 'react'
import { useContext, useState } from 'react'
import { AppContext } from '../App'
import { BsCartPlus } from 'react-icons/bs'
import Pagination from './Pagination'

const ShopProducts = () => {
  // const [products,setProducts] = useContext(AppContext)
  const {shopProducts,products,setProducts} = useContext(AppContext)
    const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);

  // get current products
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = shopProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const setPage = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };
   const pushToProducts = (product) => {
    // Check if the product already exists in the products array
    const productExists = products.some((p) => p.id === product.id);

    if (!productExists) {
      // If the product does not exist, add it to the products array
      setProducts((prevProducts) => [...prevProducts, product]);
    }
  };
  return (
    <div className='w-[78%] h-[80vh] flex flex-col '>
        <div className="grid grid-cols-4 w-full h-[90%] grid-rows-2 gap-1 p-2">
           {currentProducts.map(({name,price,alcohol_content,image,Description,id,quantity}) =>{
            return(
            
          <div key={id} className='flex flex-col container  p-2 bg-white hover:cursor-pointer border rounded m-1 align-middle hover:border-red-500 text-sm'>
            <div className='w-full h-[65%] flex bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${image})` }}>
                <span className='ms-auto'>abv {alcohol_content}%</span>
                
                </div>
            <div className="flex h-[35%] flex-col p-1">
                  <div className='flex w-full justify-between text-sm '>
                <span>{name} - {Description}</span>
            </div>
            <div className='flex flex-col w-full justify-evenly text-sm'>
               <span className='text-sm'>ratings</span>
            <span className='mx-auto font-medium'>KES {price}</span>
            </div>
                <button
                className='w-full bg-red-500 p-2 m-auto hover:text-white rounded-md text-sm'
                onClick={() =>
                  pushToProducts({ name, price, alcohol_content, image, Description, id,quantity })
                }
              >
                <BsCartPlus className='m-auto' size={22} />
              </button>
                </div>
            
            </div>

          
         )})}
        </div>
        <div className="w-full flex mx-auto container p-1 m-1">
        <Pagination
          productPerPage={productPerPage}
          totalProducts={shopProducts.length}
          setPage={setPage}
        />
      </div>

    </div>
  )
}

export default ShopProducts