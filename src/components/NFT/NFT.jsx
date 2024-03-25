import { useState } from 'react';
import Card from '../Card/Card';
import './NFT.css';
import cardImage from './../../image/NFT.png';
import icon from './../../image/icon.svg';

const NFT = () => {
  const [cardsNFT, setCardsNFT] = useState([
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
    },
    {
      image: cardImage,
      name: 'Jito Foundation',
      info: '4c8A...pDLm',
      price: 'Token',
      icon: icon,
    },
  ]);

  return (
    <div className="nft card-block">
      <h2 className="block-title block-title-nft">NFT</h2>
      <ul className="card-list">
        {cardsNFT.map((card, index) => (
          <li className="card-item">
            <Card
              key={`Token-${index}`}
              image={card.image}
              name={card.name}
              info={card.info}
              price={card.price}
              icon={card.icon}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NFT;
