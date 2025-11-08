import "./App.css";

import { AnimalProvider } from "./contexts/AnimalContext.jsx";
import { List } from "./components/List/List.jsx";
import { Search } from "./components/Search/Search.jsx";
import { GlobalStyle } from "./GlobalStyles.js";
import { Main, Container } from "./App.js";

export const App = () => {
  return (
    <Main className="App">
      <GlobalStyle />
      <AnimalProvider>
        <Container>
          <Search />
          <List />
        </Container>
      </AnimalProvider>
    </Main>
  );
};

export default App;
