import { createGlobalStyle, ThemeProvider } from "styled-components";

import Meta from "./meta";
import Footer from "./footer";
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

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default Theme;
