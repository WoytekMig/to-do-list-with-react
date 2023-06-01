import styled from "styled-components";

export const ButtonsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const ButtonLayout = styled.button`
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