import { createGlobalStyle, ThemeProvider } from "styled-components";

import Meta from "./meta";
import Footer from "./footer/index.jsx";
import Navigation from "./navigation";

const Theme = ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Meta />
        <Navigation />
        {children}
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};
const theme = {
  white: "#fff",
  black: "#000",
  textWhite: "#333",
  textFaded: "#757575",
};

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "EBGaramond";
  src: url("/fonts/NetflixSans/NetflixSans_W_Rg.woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "EBGaramond";
  src: url("/fonts/NetflixSans/NetflixSans_W_Md.woff2");
  font-style: medium;
  font-weight: 500;
  font-display: swap;
}
  html { 
    font-size: 10px; 
    direction: ltr; 
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.black};
    color: ${theme.textWhite};
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media screen and (min-width: 740px){
    h1 {
      font-size: 3.8rem;
    }
    h2 {
      font-size: 2.7rem;
    }
    h3 {
      font-size: 2.3rem;
    }
  }
  h1 {
    font-size: 2.7rem;
    margin: 0 0 .4em;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  h2, h3, h4, h5 {
    margin: .75em 0 .25em;
  }
  a {
    font-size: 13px;
    text-decoration: none;
  }
`;

export default Theme;
