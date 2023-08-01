import styled from "styled-components";

export const StyledButton = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;