import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.div`
height: 40px;
width: 100%;
background: ${({ theme }) => theme.color.teal}; 
display: flex;
justify-content: center;
font-family: 'Montserrat', sans-serif;
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
    font-weight: bold;
    font-size: larger;
}
&:hover {
    text-decoration: underline;
}
`;