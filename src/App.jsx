import "./App.css";
import { useEffect, useState } from "react";
import { AnimalProvider } from "./contexts/AnimalContext.jsx";
import { List } from "./components/List/List.jsx";
import { Search } from "./components/Search/Search.jsx";
import { GlobalStyle } from "./GlobalStyles.js";
import { Main, Container } from "./App.js";
import { Modal } from "./components/Modal/Modal.jsx";
import { useModal } from "./use/useModal.js";

export const App = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleOpenModal = (animal) => {
    setSelectedAnimal(animal);
    openModal();
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <Main className="App">
      <GlobalStyle />
      <AnimalProvider>
        <Container>
          <Search />
          <List openModal={handleOpenModal} />
          {isOpen && selectedAnimal && (
            <Modal
              {...selectedAnimal}
              isOpen={isOpen}
              closeModal={closeModal}
            />
          )}
        </Container>
      </AnimalProvider>
    </Main>
  );
};

export default App;
