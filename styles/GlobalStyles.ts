import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-light:#94F311;
        --primary: #97ce4c;
        --primary-dark: #89A85E;
        --primary-text: #EEF7E0;

        --darker: #0d0d0d;

        --gray-700: #0d0d0d;
        --gray-600: #1a1a1a;
        --gray-500: #262626;
        --gray-400: #333333;
        --gray-300: #808080;
        --gray-200: #d9d9d9;
        --gray-100: #f2f2f2;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    body,
    input,
    textarea,
    button {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }

    body {
        background: var(--darker);
        color: var(--primary-text);
        -webkit-font-smoothing: antialiased;
    }
`;
