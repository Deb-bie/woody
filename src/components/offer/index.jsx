import React from 'react'
import Offer from './offer';

const Offers = () => {

  const offerData = [
    {
      label: "Home",
      content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sit, distinctio amet maxime ipsum quas vitae. "
    },
    {
      label: "Chairs",
      content: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus porro aut facilis soluta quos, repudiandae "
    },
    {
      label: "Couches",
      content: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus porro aut facilis soluta quos, repudiandae "
    },
    {
      label: "Beds",
      content: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus porro aut facilis soluta quos, repudiandae "
    },
];



  return (
    <div className="flex flex-col flex-wrap justify-center items-center py-4 m-12">
      <h1 className="flex flex-row text-rose-600 flex-nowrap underline items-stretch justify-evenly p-12 text-2xl font-bold decoration-solid">
        What we offer
      </h1>
      
      <div className="flex flex-row flex-wrap justify-center items-center align-middle gap-4">
        {
          offerData.map((item) => (
            <Offer item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Offers