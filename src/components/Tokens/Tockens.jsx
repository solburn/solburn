import { useEffect, useState } from 'react';
import './Tockens.css';
import cardImage from './../../image/CardImage.jpg';
import Card from '../Card/Card';

const Tockens = () => {
  const [cardsToken, setCardsToken] = useState([
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
    { image: cardImage, name: '$Anal Airdrop', info: '64y8...GNBW', price: '2 $Anal' },
  ]);

  return (
    <div className="tockens">
      <ul className="card-list">
        {cardsToken.map((card, index) => (
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

export default Tockens;
