import styled from "styled-components";

export const ButtonsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    color: hsl(180, 100%, 25%);
    text-decoration: dotted;  
    
    @media (max-width: 767px) {
    .buttons {
        grid-template-columns: 1fr;
    }
}
`;

export const ButtonLayout = styled.button`
    margin: auto;
    background: transparent;
    border: none;
    color: hsl(180, 100%, 25%);

&:hover {
    color: hsl(180, 100%, 35%);
    transition: 0.3s;
}

&:disabled {
    color: #ccc;
}
`;