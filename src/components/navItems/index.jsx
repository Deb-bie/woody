import React from 'react'
import tw from "twin.macro"
import {NavLink, Link} from 'react-router-dom';
import styled, { css } from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "../navbar/menuStyles";


const MainContainer = styled.div`
    ${tw`
        flex flex-row justify-between items-center
    `};
`;

const ListContainer = styled.div`
    ${tw`
        flex list-none flex-row justify-evenly
    `};
`;

const NavItem = styled.li`
    ${tw`
        flex cursor-pointer
        text-sm
        2xl:text-2xl
    `};

    ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
        `};
`;

const NavItems = () => {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.md});

    let activeStyle = {
        color: "red",
    };


    if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="#">Home</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Cars</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Services</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );


  return (
    <MainContainer>
                <ListContainer>
                    <NavItem className="">
                        <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                            Home
                        </NavLink>
                    </NavItem>

                    <NavItem className="">
                        <NavLink to="/ chairs" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                            Chairs
                        </NavLink>
                    </NavItem>

                    <NavItem className="">
                        <NavLink to="/ tables" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                            Tables
                        </NavLink>
                    </NavItem>

                    <NavItem className="">
                        <NavLink to="/ couches" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                            Couches
                        </NavLink>
                    </NavItem>

                    <NavItem className="">
                        <NavLink to="/ beds" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                            Beds
                        </NavLink>
                    </NavItem>

                    <NavItem className="">
                        <NavLink to="/ dining-sets" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                            Dining Sets
                        </NavLink>
                    </NavItem>
                </ListContainer>
            </MainContainer>
  )
}

export default NavItems