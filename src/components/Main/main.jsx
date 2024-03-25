import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import NFT from '../NFT/NFT';
import Tockens from '../Tokens/Tockens';
import './main.css';

const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Очистка слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main">
      <div className="main-container">
        <div className="union">
          <Tockens />
          <NFT />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
