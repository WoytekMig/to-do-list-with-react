import React from "react";
import styled from "styled-components";

const Main = styled.main`
    font-family: 'Montserrat', sans-serif;
    margin: 0 auto;
    padding: 20px;
    display: block;
    max-width: 900px;
`;

const Containter = ({ children }) => (
    <Main>
        {children}
    </Main>
);

export default Containter;