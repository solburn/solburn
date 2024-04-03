import { useState, useEffect, useContext, useRef } from 'react';
import Card from '../Card/Card';
import './NFT.css';
import cardImage from './../../image/NFT.png';
import icon from './../../image/icon.svg';
import React from 'react';
import { Context } from '../../App';

const NFT = ({ nfts, refUnion }) => {
  const [visibleTokens, setVisibleTokens] = useState(9);
  const { selectList, setSelectList, windowWidth } = useContext(Context);
  const refSecondTitle = useRef();
  const refMainTitle = useRef();

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

  return (
    <div className="nft card-block">
      <h2
        ref={refMainTitle}
        onClick={() => windowWidth <= 660 && openChange()}
        className="block-title block-title-nft">
        NFT
        <img src='/Arrow.svg' className='block-title-arrow'></img>

      </h2>
      <h3 ref={refSecondTitle} onClick={() => setSelectList('Tokens')} className="second-title">
        Tokens
      </h3>
      <ul className="card-list">
        {nfts.slice(0, visibleTokens).map((token, index) => (
          <li className="card-item" key={`Token-${index}`}>
            <Card id={`NFT-${index}`} token={token} isNFT={true} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NFT;
