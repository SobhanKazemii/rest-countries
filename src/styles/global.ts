import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.eng}, ${({ theme }) =>
    theme.fonts.fa}, sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.colors.bg_primary};
        color: ${({ theme }) => theme.colors.txt_primary};
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.txt_primary};
    }

`;

export default GlobalStyles;
