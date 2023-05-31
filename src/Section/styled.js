import styled from "styled-components";

export const SectionElement = styled.section`
    box-shadow: 0 0 5px #ddd;
    background-color: white;
    margin: 10px 0;
`;

export const SectionHeader = styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 20px;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        margin: 0;
        border-bottom: 1px solid #ddd;

        @media (max-width: 767px) {
        grid-template-columns: 1fr;
        }
    `;

export const SubHeader = styled.h2`
        padding: 0;
        margin: 0;
    `;

export const Container = styled.div`
        padding: 20px;
    `;