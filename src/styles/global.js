import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    html {
    @media (min-width: 720px) {
      font-size: 75%;
   
    }
  }
    
}

body{
    color:black;
    -webkit-font-smoothing: antialiased;
}
:focus{
outline: 0;
box-shadow: none;
border: 0;
}


`;
