import { css, createGlobalStyle } from "styled-components";

const global = css`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Space Rave";
        src: url("../../assets/fonts/Space Rave.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Space Rave";
        src: url("../../assets/fonts/Space RaveItalic.ttf") format("truetype");
        font-weight: normal;
        font-style: italic;
    }

    ${global}
`;
