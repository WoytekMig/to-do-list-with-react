import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
height: 40px;
width: 100%;

background: ${({ theme }) => theme.color.teal}; 
display: flex;
justify-content: space-around;
`;

const activeClassName = "active";
export const LinkButton = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
height: 40px;
width: 200px;
text-decoration: none; 
color: white;
display: flex;
align-items: center; 
&.${activeClassName} {
    font-weight: bolder;
    font-size: larger;
}
`;