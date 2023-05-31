import styled from "styled-components";

export const FormStyle = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
    grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: #ededed solid 1px;
    font-weight: 300;
    word-break: break-word;

    @media (max-width: 767px) {
    margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background-color: hsl(180, 100%, 25%);
    border: none;
    color: white;
    font-weight: 100;

&:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
    transition: 0.5s;
}

&:active {
    background-color: hsl(180, 100%, 35%);
}
`;