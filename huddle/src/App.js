import { Header } from "./components/Header/Header";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/Global";
import content from "./content";
import { Card } from "./components/Card/Card";


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
        {content.map((item, index)=>{
         return <Card item={item} key={index}>{item.title}</Card>
        })}
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;




