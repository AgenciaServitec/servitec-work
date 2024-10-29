import { css, createGlobalStyle } from "styled-components";

const global = css`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const GlobalStyle = createGlobalStyle`
${global}
`;
