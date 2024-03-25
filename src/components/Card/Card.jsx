import { useEffect } from 'react';
import './Card.css';

const Card = ({ image, name, info, price, icon }) => {
  useEffect(() => {
    console.log(icon);
  }, []);
  return (
    <div className="card">
      <img className="card-image" src={image} alt="Card" />
      <p className="card-name">{name}</p>
      <p className="card-info" style={{ backgroundImage: `url(${icon})` }}>
        {info}
      </p>
      <p className="card-price">{price}</p>
    </div>
  );
};

export default Card;
