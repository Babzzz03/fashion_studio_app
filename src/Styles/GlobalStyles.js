import { createGlobalStyle } from "styled-components";

import "@fontsource/kaushan-script";
import '@fontsource/sirin-stencil';


const GlobalStyles = createGlobalStyle`
*,*::before,*::after {
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5,h6 {
  
    margin: 0;
    padding: 0;
}

body {
 
    overflow-x: hidden;
   font-family: "Sirin Stencil";

}
a{
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyles