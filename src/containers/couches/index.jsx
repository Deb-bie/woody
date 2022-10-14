import React from "react";
import Navbar from "../../components/navbar/index.jsx"
import FeaturedProductsData from "../../data/featuredProductsData.js";
import TabProduct from "../../components/latestProducts/tabProduct.jsx"
import Footer from "../../components/footer/index.jsx"



const Couches = () => {

    const data = FeaturedProductsData;

    return (
        <div>
            <Navbar />

            <div className="bg-teal-50 h-[20vh] flex items-center justify-center">
                <h1 className="text-3xl font-bold text-center justify-self-center">There is nothings better than a Good Couch!</h1>
            </div>

            <div className="p-12 flex flex-row flex-wrap justify-evenly items-center">
                {
                    data.map((item) => (
                        <TabProduct item={item} />
                    ))
                }

            </div>

            <Footer />
        </div>
    )
}

export default Couches;