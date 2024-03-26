import { useEffect, useRef, useState, useContext } from 'react';
import './Tockens.css';
import cardImage from './../../image/CardImage.jpg';
import icon from './../../image/icon.svg';
import Card from '../Card/Card';
import { Context } from '../../App';

const Tockens = ({ refUnion }) => {
  const { selectList, setSelectList, windowWidth } = useContext(Context);
  const [cardsToken, setCardsToken] = useState([
    {
      image: cardImage,
      name: '$Anal Airdrop',
      info: '64y8...GNBW',
      price: '2 $Anal',
      icon: icon,
      isNFT: false,
    },
    {
      image: cardImage,
      name: '$Anal Airdrop',
      info: '64y8...GNBW',
      price: '2 $Anal',
      icon: icon,
      isNFT: false,
    },
    {
      image: cardImage,
      name: '$Anal Airdrop',
      info: '64y8...GNBW',
      price: '2 $Anal',
      icon: icon,
      isNFT: false,
    },
    {
      image: cardImage,
      name: '$Anal Airdrop',
      info: '64y8...GNBW',
      price: '2 $Anal',
      icon: icon,
      isNFT: false,
    },
    {
      image: cardImage,
      name: '$Anal Airdrop',
      info: '64y8...GNBW',
      price: '2 $Anal',
      icon: icon,
      isNFT: false,
    },
    {
      image: cardImage,
      name: '$Anal Airdrop',
      info: '64y8...GNBW',
      price: '2 $Anal',
      icon: icon,
      isNFT: false,
    },
    {
      image: cardImage,
      name: '$Anal Airdrop',
      info: '64y8...GNBW',
      price: '2 $Anal',
      icon: icon,
      isNFT: false,
    },
    {
      image: cardImage,
      name: '$Anal Airdrop',
      info: '64y8...GNBW',
      price: '2 $Anal',
      icon: icon,
      isNFT: false,
    },
    {
      image: cardImage,
      name: '$Anal Airdrop',
      info: '64y8...GNBW',
      price: '2 $Anal',
      icon: icon,
      isNFT: false,
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
        {cardsToken.map((card, index) => (
          <li className="card-item">
            <Card
              key={`Token-${index}`}
              id={`Token-${index}`}
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

export default Tockens;
