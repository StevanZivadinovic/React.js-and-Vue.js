import { Header } from "./components/Header/Header";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/Global";


function App() {

  const theme={
    colors:{
      header:'#ebfbff',
      body:'#fff',
      footer:'#003333'
    },
    mobile:'768px'
  }
  
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle/>
    <Header></Header>
    <Container>
        <h1>Hello world</h1>
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;




