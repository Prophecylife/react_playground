import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const Globalstyle = createGlobalStyle`
    body {
        margin: 0;
    }

    code {
        margin: 0;
    }
    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }
    *{
        box-sizing: border-box;
    }
`