import { useState, useEffect, useContext, useRef } from 'react';
import Card from '../Card/Card';
import './NFT.css';
import cardImage from './../../image/NFT.png';
import icon from './../../image/icon.svg';
import { Context } from '../../App';

const NFT = ({ refUnion }) => {
  const { selectList, setSelectList } = useContext(Context);
  const [cardsNFT, setCardsNFT] = useState([
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
      isNFT: true,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
      isNFT: true,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
      isNFT: true,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
      isNFT: true,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
      isNFT: true,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
      isNFT: true,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
      isNFT: true,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
      isNFT: true,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
      isNFT: true,
    },
  ]);
  const refSecondTitle = useRef();
  const refMainTitle = useRef();

  useEffect(() => {
    openChange();
  }, []);

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
      <h2 ref={refMainTitle} onClick={openChange} className="block-title block-title-nft">
        NFT
      </h2>
      <h3 ref={refSecondTitle} onClick={() => setSelectList('Tokens')} className="second-title">
        Tokens
      </h3>
      <ul className="card-list">
        {cardsNFT.map((card, index) => (
          <li className="card-item">
            <Card
              key={`NFT-${index}`}
              id={`NFT-${index}`}
              image={card.image}
              name={card.name}
              info={card.info}
              price={card.price}
              icon={card.icon}
              isNFT={card.isNFT}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NFT;
