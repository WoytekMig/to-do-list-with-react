import styled from "styled-components";

export const TransparentButton = styled.button`
    margin: 0 0 0 20px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.color.teal}; 
    transition: filter 0.3s;

&:hover {
    filter: brightness(110%);
}

&:active {
    filter: brightness(120%);
}

&:disabled {
    color: ${({ theme }) => theme.color.silver};
}
`;