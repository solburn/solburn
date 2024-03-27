import { useEffect, useContext, useState, useRef } from 'react';
import './Card.css';
import { Context } from '../../App';
import icon from './../../image/icon.svg';
import defaultImage from './../../image/NFT.png';
import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';

const Card = ({ id, token, isNFT }) => {
  const { markeds, setMarkeds } = useContext(Context);
  const [image, setImage] = useState();
  const [isMarked, setIsMarked] = useState(false);
  const refMarker = useRef();

  useEffect(() => {
    console.log(markeds);
  }, [markeds]);

  async function func(mint) {
    try {
      const tokenListProvider = new TokenListProvider();
      const tokenList = await tokenListProvider.resolve().then((tokens) => {
        const filteredTokenList = tokens.filterByClusterSlug('mainnet-beta').getList();
        return filteredTokenList;
      });

      const token = tokenList.find((el) => el.address === mint);

      if (token) {
        setImage(token.logoURI);
      } else {
        setImage(defaultImage);
        console.log('Token not found.');
      }
    } catch (error) {
      setImage(defaultImage);
      console.error('An error occurred:', error);
    }
  }

  useEffect(() => {
    if (isMarked) {
      refMarker.current.style.background = '#686FFB';
    } else {
      refMarker.current.style.background = '#151619';
    }
  }, [isMarked]);

  useEffect(() => {
    func(token?.mint || defaultImage);

    const isItemExists = markeds.some((item) => item.id === id);

    if (isItemExists) {
      setIsMarked(!isMarked);
    }
  }, []);

  const onClickCard = () => {
    if (!token) {
      console.error('Token is undefined');
      return;
    }

    const isItemExists = markeds.some((item) => item.id === id);

    if (isItemExists) {
      const updatedMarkeds = markeds.filter((item) => item.id !== id);
      setMarkeds(updatedMarkeds);
    } else {
      let apdateToken = { ...token, id, isNFT };
      setMarkeds([...markeds, apdateToken]);
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
      <p className="card-name">{token?.name || 'Unknown'}</p>
      <a
        target="_blank"
        href="solscan.io/token/HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3"
        className="card-info"
        style={{ backgroundImage: `url(${icon})` }}>
        {token && token.mint ? token.mint.slice(0, 4) + '...' + token.mint.slice(-4) : 'Unknown'}{' '}
      </a>
      <p className="card-price">
        {Math.ceil(token?.amount || 1) + ' ' + token?.symbol || 'Unknown'}
      </p>
    </div>
  );
};

export default Card;
