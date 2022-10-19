import React from 'react'
import tw from "twin.macro"
import {NavLink, Link} from 'react-router-dom';
import styled, { css } from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

import Badge from '@mui/material/Badge';
import {BsPersonCircle} from "react-icons/bs"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import LogoComponent from '../logo';

const Nav = styled.div`
    ${tw`
        flex justify-center sticky items-center max-w-full w-full h-[10vh] sm:h-[10vh] xl:h-20
    `};
`;

const NavContainer = styled.div`
    ${tw`
        w-full flex flex-row justify-around items-center flex-nowrap
        h-16 xl:h-20
    `};
`;

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
        flex cursor-pointer text-sm 2xl:text-2xl
    `};

    ${({ menu }) => menu && css`
      ${tw`
        text-white text-xl mb-3 focus:text-white
    `};
    `};
`;

const RightContainer = styled.div`
    ${tw`
        flex flex-row justify-evenly flex-nowrap lg:mr-24 mr-0
    `};
`;

const NavbarIcons = styled.div`
    ${tw`
        flex flex-row justify-evenly text-xl items-center w-full
    `};
`;

const FavoritesIcon = styled.div`
    ${tw`
        flex pl-4 cursor-pointer
    `};
`;

const CartIcon = styled.div`
    ${tw`
        flex pl-4 cursor-pointer
    `};
`;

const PersonIcon = styled.div`
    ${tw`
        flex pl-4 cursor-pointer
    `};
`;




const Navbar = ({cartItem}) => {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.md});

    const activeStyle = {
        color: "red",
    };

    if (isMobile)
    return (
        <>
            <Nav>
                <NavContainer>
                    <RightContainer>
                        <NavbarIcons>
                            <Link to=" favorite">
                                <FavoritesIcon className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                                    <Badge color="secondary" badgeContent={0}>
                                        <FavoriteBorderIcon />
                                    </Badge>
                                </FavoritesIcon>
                            </Link>

                            <Link to=" cart">
                                <CartIcon className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                                    <Badge color="secondary" badgeContent={0}>
                                        <ShoppingCartOutlinedIcon />
                                    </Badge>
                                </CartIcon>
                            </Link>
                        </NavbarIcons>
                    </RightContainer>

                    <LogoComponent />

                <Menu right styles={menuStyles}>
                <ListContainer>
                    <NavItem menu>
                        <Link to="/">Home</Link>
                    </NavItem>

                    <NavItem menu>
                        <Link to="/%chairs">Chairs</Link>
                    </NavItem>

                    <NavItem menu>
                        <Link to="/%tables">Tables</Link>
                    </NavItem>
                    
                    <NavItem menu>
                        <Link to="/%couches">Couches</Link>
                    </NavItem>
                    
                    <NavItem menu>
                        <Link to="/%my-beds">Beds</Link>
                    </NavItem>
                    
                    <NavItem menu>
                        <Link to="/%dining-sets">Dining Sets</Link>
                    </NavItem>
                    
                    <NavItem menu>
                        <Link to="/%login">Login</Link>
                    </NavItem>
                    
                    <NavItem menu>
                        <Link to="/%register">Register</Link>
                    </NavItem>
                </ListContainer>
            </Menu>

                </NavContainer>

            </Nav>

        </>
    );


  return (
    <Nav>
        <NavContainer>
            <LogoComponent />

            <MainContainer>
                <ListContainer>
                    <NavItem className="">
                        <NavLink to="/"
                         style={({ isActive }) => isActive ? activeStyle : undefined} 
                         className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500"
                         >
                            Home
                        </NavLink>
                    </NavItem>

                    <NavItem className="">
                        <NavLink to="/%chairs" 
                        style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500"
                        >
                            Chairs
                        </NavLink>
                    </NavItem>

                    <NavItem className="">
                        <NavLink to="%tables" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                            Tables
                        </NavLink>
                    </NavItem>

                    <NavItem className="">
                        <NavLink to="%couches" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                            Couches
                        </NavLink>
                    </NavItem>

                    <NavItem className="">
                        <NavLink to="%my-beds" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                            Beds
                        </NavLink>
                    </NavItem>

                    <NavItem className="">
                        <NavLink to="%dining-sets" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                            Dining Sets
                        </NavLink>
                    </NavItem>
                </ListContainer>
            </MainContainer>


            <RightContainer>
                <NavbarIcons>
                    <NavLink to=" favorite" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                        <FavoritesIcon>
                            <Badge color="secondary" badgeContent={1}>
                                <FavoriteBorderIcon />
                            </Badge>
                        </FavoritesIcon>
                    </NavLink>

                    <NavLink to=" cart" style={({ isActive }) => isActive ? activeStyle : undefined} className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                        <CartIcon>
                            <Badge color="secondary" badgeContent={cartItem.length === 0 ? 0 : cartItem.length}>
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </CartIcon>
                    </NavLink>

                    <div className="group relative">
                        <PersonIcon className="px-4 transform transition duration-500 hover:scale-125 hover:text-red-500">
                            <div className="inline-flex items-center group">
                                <BsPersonCircle />
                            </div>
                        </PersonIcon>

                        <ul className="rounded absolute hidden text-gray-700 pt-8 group-hover:block w-32">
                            <Link to="%login">
                                <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                                    Login
                                </li>
                            </Link>

                            <Link to="%register">
                                <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                                    Register
                                </li>
                            </Link>
                        </ul>
                    </div>
                </NavbarIcons>
            </RightContainer>
        </NavContainer>
    </Nav>
  )
}

export default Navbar;