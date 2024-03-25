import { useEffect, useState } from 'react';
import './Tockens.css';
import cardImage from './../../image/CardImage.jpg';
import icon from './../../image/icon.svg';
import Card from '../Card/Card';

const Tockens = () => {
  const [cardsToken, setCardsToken] = useState([
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal', icon: icon },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal', icon: icon },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal', icon: icon },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal', icon: icon },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal', icon: icon },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal', icon: icon },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal', icon: icon },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal', icon: icon },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal', icon: icon },
  ]);

  return (
    <div className="tockens">
      <h2 className="block-title block-title-tockens">Tokens</h2>
      <ul className="card-list">
        {cardsToken.map((card, index) => (
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

export default Tockens;
