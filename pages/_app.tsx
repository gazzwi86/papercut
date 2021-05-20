import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../components/protons/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

interface AppProps {
  Component: any
  pageProps: unknown
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
