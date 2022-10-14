import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="flex flex-col flex-wrap justify-around bg-cyan-900 w-full h-full">
            <div className=" flex flex-row flex-wrap items-center justify-around text-white gap-4 ">
                <div className="flex flex-col gap-4 pt-8 underline">
                    <Link to="#">Home</Link>
                    <Link to="#">About</Link>
                    <Link to="#">Services</Link>
                    <Link to="#">Contact Us</Link>
                </div>

                <div className="flex flex-col gap-4 pt-8 underline">
                    <Link to="#">Careers</Link>
                    <Link to="#">Blogs</Link>
                    <Link to="#"></Link>
                    <Link to="#">Homes</Link>
                </div>

                <div className="flex flex-col gap-4 pt-8 underline">
                    <Link to="#">Twitter</Link>
                    <Link to="#">Facebook</Link>
                    <Link to="#">Instagram</Link>
                    <Link to="#">Youtube</Link>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center text-white gap-4 pt-8 ">
                <span>&copy; &nbsp;</span>
                <span>Woody &nbsp;</span>
                <span>2022</span>
            </div>
        </footer>
    )
}

export default Footer