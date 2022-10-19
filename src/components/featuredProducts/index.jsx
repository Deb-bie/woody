import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef} from 'react';
import "./index.css";


import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const FeaturedProducts = ({addToCart, fp}) => {

    const sliderRef = useRef(null);
    // const data = featuredProducts;

    const renderSlides = () => fp.map((fp) => (
        <div className="block md:w-[40%] 4xs:w-full h-[300px] border-4 shadow-lg " key={fp.id}>
            <div className="block w-auto h-[50%] bg-teal-500">
                <img className="w-[100%] h-[100%] object-contain" src={fp.image} alt="Sunset in the mountains" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{fp.title}</div>
                <div className="text-red-500">${fp.price}</div>
                <div className=" flex flex-row mt-4">
                    <FavoriteBorderIcon className="mr-4 cursor-pointer" onClick={() => console.log("Hello")} />
                    <ShoppingCartOutlinedIcon className="cursor-pointer" onClick={() => addToCart(fp)} />
                </div>
            </div>
        </div>
    ));

    const sliderSettings = {
        ref: sliderRef,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: false,
    
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]

    }


  return (
    <div className=" md:m-32 4xs:mx-8 4xs: my-18">
        <h1 className="font-bold flex flex-row text-2xl text-red-800 text-center justify-center underline">Featured Products </h1>

        <div className="another">
            <div className="flex justify-end px-[10px] mt-[10px]">
                <div style={{display: "flex"}}>
                    <button className="sliderLeft button" onClick={() => sliderRef.current.slickPrev()}>
                        <FaChevronLeft />
                    </button>
                    <button className="sliderRight button" onClick={() => sliderRef.current.slickNext()}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            <div style={{gap:4}}>
                <Slider {...sliderSettings} >
                    {renderSlides()}
                </Slider>
            </div>
         </div>
    </div>
  )
}

export default FeaturedProducts;

