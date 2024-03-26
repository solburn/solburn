import { useEffect, useContext, useState, useRef } from 'react';
import './Card.css';
import { Context } from '../../App';

const Card = ({ id, image, name, info, price, icon, isNFT }) => {
  const { markeds, setMarkeds } = useContext(Context);
  const [isMarked, setIsMarked] = useState(false);
  const refMarker = useRef();

  useEffect(() => {
    if (isMarked) {
      refMarker.current.style.background = '#686FFB';
    } else {
      refMarker.current.style.background = '#151619';
    }
  }, [isMarked]);

  useEffect(() => {
    const isItemExists = markeds.some((item) => item.id === id);

    if (isItemExists) {
      setIsMarked(!isMarked);
    }
  }, []);

  const onClickCard = () => {
    const isItemExists = markeds.some((item) => item.id === id);

    if (isItemExists) {
      const updatedMarkeds = markeds.filter((item) => item.id !== id);
      setMarkeds(updatedMarkeds);
    } else {
      setMarkeds([...markeds, { id, image, name, info, price, icon, isNFT }]);
    }

    setIsMarked(!isMarked);
  };

  return (
    <div className="card">
      <div onClick={() => onClickCard()} className="image-vrapper">
        <img className="card-image" src={image} alt="Card" />
        <div ref={refMarker} className="marker"></div>
        {isMarked && (
          <p className="marked-text">
            MARKED <br /> FOR BURN
          </p>
        )}
      </div>
      <p className="card-name">{name}</p>
      <p className="card-info" style={{ backgroundImage: `url(${icon})` }}>
        {info}
      </p>
      <p className="card-price">{price}</p>
    </div>
  );
};

export default Card;
