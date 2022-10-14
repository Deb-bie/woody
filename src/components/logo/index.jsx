import React from 'react'
import {Link} from 'react-router-dom';
import styled from "styled-components";
import tw from "twin.macro";


import Logo from "../../assets/logo/woody_logo1.png"

const LogoLink = styled(Link)`
    ${tw`
        flex h-8
        ml-0
        // lg:h-12 lg:ml-8
        xl:h-16 xl:ml-12
        items-center cursor-pointer
    `};
`;

const LogoContainer = styled.img`
    ${tw`
        flex h-8
        ml-0
        // lg:h-12 lg:ml-8
        xl:h-16 xl:ml-12
        w-auto items-center justify-self-start cursor-pointer
    `};
`;


const LogoComponent = () => {
  return (
    <LogoLink to ="/">
        <LogoContainer src={Logo} />
    </LogoLink>
  )
}

export default LogoComponent;