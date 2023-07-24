import React from 'react';

const Brands = () => {
  const products = [
    { product_name: "whisky", image: "best-whisky.webp" },
    { product_name: "whisky", image: "2.jpeg" },
    { product_name: "whisky", image: "best-whisky.webp" },
    { product_name: "whisky", image: "best-whisky.webp" }
  ];

  return (
    <div className='w-full container flex mx-auto h-[27vh] p-2 max-w-6xl  flex-col mt-4'>
      <span className='font-medium text-xl mx-auto w-full justify-center text-center m-1 flex flex-col '>Designed to supply all Brands</span>
      <div className="grid grid-cols-4 grid-rows-1 w-[80%] mx-auto h-[85%]">
        {products.map(({ product_name, image }) => {
          return (
            <div className='relative flex flex-col bg-white hover:cursor-pointer border rounded-xl align-middle mx-3 my-1 hover:border-red-500 text-sm bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${image})` }}>
              <div className='flex w-full rounded-xl items-end justify-center  h-full m-auto'>
               <span className=" bg-white bg-opacity-70  text-xl text-black rounded-b-xl font-semibold p-2  text-center  w-full right-0  ">{product_name}</span>
                
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Brands;
