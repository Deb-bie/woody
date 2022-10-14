import styled from "styled-components";
import tw from "twin.macro"
import {Link} from "react-router-dom";

export const LogoContainer = styled(Link)`
    ${tw`
        flex flex-col justify-center items-center object-contain
        // flex h-8 ml-0 items-center cursor-pointer
    `};
`;

export const Logo = styled.img`
    ${tw`
        flex w-[200px] h-[80px] items-center justify-center object-contain
        // flex h-8 ml-0 w-auto items-center justify-self-start cursor-pointer
    `};
`;
