import { useEffect } from 'react';
import './Card.css';

const Card = ({ image, name, info, price }) => {
  useEffect(() => {
    console.log('!');
  }, []);
  return (
    <div className="card">
      <img className="card-image" src={image} alt="Card" />
      <p className="card-name">{name}</p>
      <p className="card-info">{info}</p>
      <p className="card-price">{price}</p>
    </div>
  );
};

export default Card;
