import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: solid 1px ${({ theme }) => theme.color.gallery};
    font-weight: 300;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background: ${({ theme }) => theme.color.teal};
    border: none;
    color: ${({ theme }) => theme.color.white};
    font-weight: 100;
    transition: filter 0.5s;

&:hover {
    filter: brightness(110%);
    transform: scale(1.1);
}

&:active {
    filter: brightness(120%);
}
`;