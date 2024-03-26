import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';

export const Context = createContext();

function App() {
  const [markeds, setMarkeds] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectList, setSelectList] = useState('Tokens');

  return (
    <div className="App">
      <Context.Provider
        value={{
          markeds,
          setMarkeds,
          selectList,
          setSelectList,
          windowWidth,
          setWindowWidth,
          openModal,
          setOpenModal,
        }}>
        <div className="app-container">
          <Header />
          <Main />
          {openModal && <Modal />}
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
