import React, { useState } from "react";
import { Parallax } from "react-parallax";
import One from "../../assets/1.jpg";
import B1 from "../../assets/blobs/BL1.svg"
import CH4 from "../../assets/chairs/CH4.png"

export default function Trial() {
   return (
    <div className="flex flex-row w-[98vw] md:h-[70vh] ">
      <Parallax bgImage={One} blur={10} strength={500} className="w-full h-[70vh] object-contain">
      <div className="flex items-center justify-center align-middle absolute p-12 ">
        {/* <div className=" flex flex-row justify-center w-[100%] bg-teal-100 text-uppercase text-white text-2xl">A Trip</div> */}
        <div className='flex md:flex-row 4xs:flex-col-reverse items-center justify-between w-full '>
          <div className='flex items-center justify-center w-[50%]'>
            <img src={B1} alt="blob" className='flex relative md:w-[50%] 4xs:w-[70%]'  />
            <img src={CH4} alt='title' className='flex absolute h-auto md:w-[60%] 4xs:w-[80%] ' />
          </div>

          <div className='flex flex-col items-center text-center justify-center align-middle w-[50%]'>
            <h1 className=' flex md:text-5xl 4xs:text-lg text-blue-800 font-bold 4xs:text-xl'>Unique Products from around the world</h1>
            <br />
            <p className="flex 3xs:text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tenetur corporis impedit aperiam nisi. 
              Porro quasi pariatur quaerat error deleniti ullam accusantium sint magni, quisquam asperiores consectetur, 
              officia molestiae dolorum!
            </p>
            <br />
            <button className="flex bg-rose-600 md:p-4 text-white text-center items-center justify-center 4xs:p-2 4xs:text-xs">SHOP NOW</button>
          </div>
        </div>
      </div>
    </Parallax>
    </div>
  );
}