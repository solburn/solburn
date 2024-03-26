import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export const Context = createContext();

function App() {
  const [markeds, setMarkeds] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectList, setSelectList] = useState('Tokens');

  return (
    <div className="App">
      <Context.Provider
        value={{ markeds, setMarkeds, selectList, setSelectList, windowWidth, setWindowWidth }}>
        <div className="app-container">
          <Header />
          <Main />
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
