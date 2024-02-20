import Container from "./components/Container";
import Button from "./components/Button";

function App() {
  return <main>
   <Container as={Button}>Click me</Container>
  </main>
}

export default App;
