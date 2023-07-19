import React, { useEffect, useRef, useState } from 'react';
import {AiOutlineStar} from 'react-icons/ai'

const Carousel = () => {
  const images = ['best-whisky.webp','2.jpeg','3.jpeg'];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Normal delay for transitioning to the next image

    return () => {
      resetTimeout();
    };
  }, [index, images.length]);

  const Indicators = () => (
    <div className="absolute bottom-0 left-0 w-full flex justify-center mb-1">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`w-3 h-3 rounded-full mx-2 ${
            i === index ? 'bg-red-500' : 'bg-white'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="relative flex rounded-md overflow-hidden">
      <div className="flex m-auto w-full h-full justify-items-center transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((image, i) => (
          <div
            key={i}
            className="flex-none w-full bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="flex flex-col w-full h-full  bg-black bg-opacity-20 ">
            <div className="flex justify-between m-3">
            <span className='text-red-500 flex' ><AiOutlineStar className='' size={20}/><AiOutlineStar size={20}/><AiOutlineStar size={20}/></span>
            <span className=" bg-red-500 text-white text-sm p-2 text-center rounded-lg w-[100px] right-0 m-1">featured</span>
            </div>
            
            </div>
            
          </div>
        ))}
      </div>
      <Indicators />
    </div>
  );
};

export default Carousel;


