import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: rgb(221, 219, 215);
    --color-secondary: rgb(177, 171, 165);
    --dark-purple: rgb(56, 9, 122);
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
}

ul,
ol,
a,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

p {
  line-height: 1.5;
  font-family: sans-serif;
}

input,
button,
select,
textarea {
  outline: none;
  border: none;
}

`;

export default GlobalStyle;
