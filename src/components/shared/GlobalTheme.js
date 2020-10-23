import { createGlobalStyle } from "styled-components";

const GlobalTheme = createGlobalStyle`
    *,   
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: none;
    }
    body {
        background: #363636;
        color: white;
        font-family: 'Noto Sans JP', sans-serif;
    }
    .CodeMirror { min-height: 100% }
`;

export default GlobalTheme;
