import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
height: 40px;
width: 100%;

background: ${({ theme }) => theme.color.teal}; 
display: flex;
justify-content: space-around;
`;

export const LinkButton = styled(Link)`
height: 40px;
width: 200px;
text-decoration: none;
color: white;
display: flex;
align-items: center; 
`;