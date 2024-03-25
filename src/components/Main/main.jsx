import { useState, useEffect, useContext, useRef } from 'react';
import Footer from '../Footer/Footer';
import NFT from '../NFT/NFT';
import Tockens from '../Tokens/Tockens';
import './main.css';
import { Context } from '../../App';

const Main = () => {
  const { selectList, setSelectList, windowWidth, setWindowWidth } = useContext(Context);
  const refUnion = useRef();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className="main">
      <div className="main-container">
        <div ref={refUnion} className="union">
          {windowWidth > 660 ? (
            <>
              <Tockens refUnion={refUnion} />
              <NFT refUnion={refUnion} />
            </>
          ) : selectList === 'Tokens' ? (
            <Tockens refUnion={refUnion} />
          ) : (
            <NFT refUnion={refUnion} />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
