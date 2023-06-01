import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  background-color: #ededed;
}

*,
::after, ::before {
  box-sizing: inherit;
}
`;