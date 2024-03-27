import { useEffect, useRef, useState, useContext } from 'react';
import './Tockens.css';
import cardImage from './../../image/CardImage.jpg';
import icon from './../../image/icon.svg';
import Card from '../Card/Card';
import { Context } from '../../App';

const Tockens = ({ tokens, refUnion }) => {
  const { selectList, setSelectList, windowWidth } = useContext(Context);
  const refSecondTitle = useRef();
  const refMainTitle = useRef();
  const [visibleTokens, setVisibleTokens] = useState(9);

  useEffect(() => {
    openChange();
  }, []);

  useEffect(() => {
    if (windowWidth >= 660) {
      refSecondTitle.current.style.display = 'none';
      refMainTitle.current.style.top = '-170px';
      refUnion.current.style.marginTop = '50px';
    }
  }, [windowWidth]);

  const openChange = () => {
    if (refSecondTitle.current.style.display === 'none') {
      refSecondTitle.current.style.display = 'block';
      refMainTitle.current.style.top = '-200px';
      refUnion.current.style.marginTop = '91px';
    } else {
      refSecondTitle.current.style.display = 'none';
      refMainTitle.current.style.top = '-170px';
      refUnion.current.style.marginTop = '50px';
    }
  };

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

    if (bottom) {
      setVisibleTokens((prevVisibleTokens) => prevVisibleTokens + 9);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="tockens card-block">
      <h2
        ref={refMainTitle}
        onClick={() => windowWidth <= 660 && openChange()}
        className="block-title block-title-tockens">
        Tokens
      </h2>
      <h3 ref={refSecondTitle} onClick={() => setSelectList('NFT')} className="second-title">
        NFT
      </h3>
      <ul className="card-list">
        {tokens.slice(0, visibleTokens).map((token, index) => (
          <li className="card-item" key={`Token-${index}`}>
            <Card id={`Token-${index}`} token={token} isNFT={false} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tockens;
