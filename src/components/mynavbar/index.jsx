import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { LogoContainer, Logo } from './NavLogo';
import One from "../../assets/x.jpg";
import {FaBars, FaTimes} from 'react-icons/fa';


const MyNav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <nav className='flex flex-row h-[80px] justify-center sticky z-10 bg-green-500 '>
        <div className='flex flex-row justify-evenly h-[80px] z-1 w-[100%]'>
            <LogoContainer>
                <Logo src={One} alt="Logo" />
            </LogoContainer>

            <div className="hidden" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>

            <div className={click ? "button-container active" : "button-container"}>
                    <div 
                        className="nav-button" onClick={handleClick}
                    >
                        <Link to="/add" className="nav-btn-link" onClick={handleClick} >Add Contacts</Link>
                    </div>

                    <div 
                        className="nav-button" onClick={handleClick}
                    >
                        <Link to="/view" className="nav-btn-link">View Contacts</Link>
                    </div>
                </div>
        </div>
    </nav>
  )
}

export default MyNav;