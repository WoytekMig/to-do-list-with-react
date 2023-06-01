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
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
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
    color: ${({ theme }) => theme.color.white};
    padding: 0;
    transition: 0.3s;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
 `;

export const ToggleDoneButton = styled(Button)`
    background: ${({ theme }) => theme.color.forestGreen};
 `;

export const RemoveButton = styled(Button)`
    background: ${({ theme }) => theme.color.crimson};
 `;