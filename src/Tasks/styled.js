import styled, { css } from "styled-components";

export const List = styled.ul`
 list-style-type: none;
 padding: 0;
 margin: 0;
 `;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: right;
    border-bottom: 1px solid #ededed;
    padding: 10px;
    word-break: break-all;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.article`
    display: grid;
    grid: 1fr;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 5px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    ` }
`;

export const Button = styled.button`
    border: none;
    width: 30px;
    height: 30px;
    color: white;
    padding: 0;

    ${({ done }) => done && css`
        background-color: hsl(120, 60%, 35%);
    
        &:hover {
            background-color: hsl(135, 60%, 40%);
            transition: 0.3s;
        }

        &:active {
            background-color: hsl(135, 60%, 45%);
        }
    ` }


    ${({ remove }) => remove && css`
    background-color: hsl(348, 83%, 47%);

    &:hover {
        background-color: hsl(348, 83%, 52%);
        transition: 0.3s;
    }

    &:active {
        background-color: hsl(348, 83%, 57%);
    }
    ` }
`;