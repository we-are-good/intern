import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
background-color: rgba(213, 241, 254, 1);
color: black;
font-family: 'system-ui', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default GlobalStyle;
