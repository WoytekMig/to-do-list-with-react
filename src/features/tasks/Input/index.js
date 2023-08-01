import styled from "styled-components";

export default styled.input`
    padding: 10px;
    border: solid 1px ${({ theme }) => theme.color.gallery};
    font-weight: 300;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 10px;
    }
`;