import { useState } from "react";
import FeaturedProductsData from "../../data/featuredProductsData";
import TabProduct from "./tabProduct";


const LatestProducts = ({addToCart}) => {

  const data = FeaturedProductsData;

    const tabsData = [
        {
          label: "Home",
          content: data
        },
        {
          label: "Chairs",
          content: data
        },
        {
          label: "Couches",
          content: data
        },  
        {
          label: "Beds",
          content: data
        },
        {
          label: "Dining Sets",
          content: data
        },
    ];


  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="mx-24">
      <h1 className="font-bold flex flex-row text-2xl text-blue-800 text-center justify-center underline">Latest Products </h1>

      <div className="flex space-x-3 flex-row align-middle justify-center align-center flex-wrap my-12">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`flex flex-row justify-center py-2 cursor-pointer transition-colors duration-300 align-middle text-center ${
                idx === activeTabIndex
                  ? "border-teal-500 bg-teal-100 p-4 transform transition duration-500 hover:scale-125 hover:text-red-500"
                  : " hover:border-gray-200"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}>
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className="flex flex-row flex-wrap justify-evenly items-center py-4 gap-8">
        {
          tabsData[activeTabIndex].content.map((item) => (
            <TabProduct item={item} addToCart={addToCart} />
          ))
        }
      </div>
    </div>
  );
}

export default LatestProducts;