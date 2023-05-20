import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --softRed: hsl(7, 99% , 70%);
        --yellow: hsl(51, 100%, 49%);
        --white: hsl(0, 0%, 100%);
        --whiteDesat: hsl(0, 0%, 100%, 0.25);
        --darkDesatCyan: hsl(167, 40%, 24%);
        --darkBlue: hsl(198, 62%, 26%);
        --darkModCyan: hsl(168, 44%, 70%);
        --veryDarkDesatBlue: hsl(212, 27%, 19%);
        --veryDarkGrayBlue: hsla(232, 10%, 55%);
        --grayishBlue: hsl(210, 4%, 67%);
    }

    ::-webkit-scrollbar {
        display: none;
    }
      
    * {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        -ms-overflow-style: none;
        scrollbar-width: none;

        a {
            text-decoration: none;
        }

        h1, h2 {
            margin: 0;
            font-family: 'Fraunces', Garamond, serif;
            font-style: normal;
        }

        p, input {
            margin: 0;
            font-family: 'Barlow', Helvetica, sans-serif;
            font-size: 18px;
            font-weight: 700;
        }
    }
`;
