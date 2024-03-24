import { useState } from 'react';
import Card from '../Card/Card';
import './NFT.css';
import cardImage from './../../image/CardImage.jpg';

const NFT = () => {
  const [cardsNFT, setCardsNFT] = useState([
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
  ]);

  return (
    <div className="nft">
      <ul className="card-list">
        {cardsNFT.map((card, index) => (
          <li className="card-item">
            <Card
              key={`Token-${index}`}
              image={card.image}
              name={card.name}
              info={card.info}
              price={card.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NFT;
