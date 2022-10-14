import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef} from 'react';

import SliderData from '../../data/sliderData';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import data from '../../data/sliderData';

const Sliders = () => {
    const sliderRef = useRef(null);
    const data = SliderData;

    const renderSlides = () => data.map(item => (
    //   <div className="fpItem">
    //     <img src={item.image} className="fpImg" />
    //     <span className="fpName">{item.title}</span>
    //     <span className="fpCity">{item.price}</span>
    //   </div>
    <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-col items-center text-center justify-center pl-8'>
            <h3 className=' flex text-2xl text-pink-500'>{item.title}</h3>
            <br />
            <h2 className=' flex text-5xl font-bold'>{item.heading}</h2>
            <br />
            <p className="flex xxs:text-sm">{item.random}</p>
            <br />
            <button className="flex bg-rose-600 p-4 text-white text-center items-center justify-center">SHOP NOW</button>
        </div>

        <div className='flex flex-row items-center justify-end'>
            <img src={item.blob} alt="blob" className='flex relative w-[20px]' />
            <img src={item.image} alt={item.title} className='flex absolute h-auto w-[20px]' />
        </div>
    </div>
    ));

    const sliderSettings = {
        ref: sliderRef,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,

    }


  return (
    <div>
        <div className="another">
            <div style={{ margin:10 }}>
                <Slider {...sliderSettings} >
                {renderSlides()}
                </Slider>
            </div>
         </div>
    </div>
  )
}

export default Sliders