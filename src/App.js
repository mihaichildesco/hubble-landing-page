import * as styled from "./components/styles/styled.Container";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <styled.Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </styled.Container>
      </>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
