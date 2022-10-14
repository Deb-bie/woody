import React from "react"
import data from '../../data/sliderData';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';

function Slider() {
  const myData = data;
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (id) => {
    if (id === 1) {
      setActiveSlide(myData.length);
    } else if (id > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  const nextSliderHandler = (id) => {
    if (id === myData.length) {
      setActiveSlide(1);
    } else if (id < myData.length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  return (
    <div className=" flex flex-row items-center h-[85vh] 4xs:w-full first-letter: bg-teal-50 ">
      {myData.map((item) => {
        const { id, image, blob, title, heading, random } = item;
        return (
            <div key={id} className={ activeSlide === id ? 'flex justify-between md:px-12 4xs:px-0' : 'hidden'}>
                <button className='border-black' onClick={() => prevSliderHandler(id)}>
                    <FiChevronLeft />
                </button>

                <div className='flex md:flex-row 4xs:flex-col-reverse items-center justify-between'>
                    <div className='flex flex-col items-center text-center justify-center pl-8'>
                        <h3 className=' flex md:text-2xl text-pink-500 4xs:text-xl'>{title}</h3>
                        <br />
                        <h2 className=' flex md:text-5xl font-bold 4xs:text-xl'>{heading}</h2>
                        <br />
                        <p className="flex 3xs:text-base">{random}</p>
                        <br />
                        <button className="flex bg-rose-600 md:p-4 text-white text-center items-center justify-center 4xs:p-2 4xs:text-xs">SHOP NOW</button>
                    </div>

                    <div className='flex items-center justify-end'>
                        <img src={blob} alt="blob" className='flex relative md:w-[60%] 4xs:w-[70%]'  />
                        <img src={image} alt={title} className='flex absolute h-auto md:w-[40%] 4xs:w-[80%] ' />
                    </div>
                </div>

                <button className=' border-black' onClick={() => nextSliderHandler(id)}>
                    <FiChevronRight />
                </button>
            </div>
        );
      })}
    </div>
  );
}

export default Slider;