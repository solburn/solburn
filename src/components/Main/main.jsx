import { useState, useEffect, useContext, useRef } from 'react';
import Footer from '../Footer/Footer';
import NFT from '../NFT/NFT';
import Tockens from '../Tokens/Tockens';
import './main.css';
import { Context } from '../../App';
import axios from 'axios';

const Main = () => {
  const { selectList, setSelectList, windowWidth, setWindowWidth } = useContext(Context);
  const refUnion = useRef();
  const [tokens, setTokens] = useState();
  const [isLoading, setLoading] = useState(true);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    getTockens();
  }, []);

  const getTockens = async () => {
    try {
      const tokens = (
        await axios.get(
          `https://solana-gateway.moralis.io/account/mainnet/${process.env.REACT_APP_WALLET}/portfolio`,
          {
            headers: {
              'X-API-Key': process.env.REACT_APP_MORALIS_TOKEN,
            },
          },
        )
      ).data;

      let allTokens = [];
      allTokens.push(
        ...tokens.tokens.map((el) => {
          return {
            ...el,
            type: 'token',
          };
        }),
      );

      allTokens.push(
        ...tokens.nfts.map((el) => {
          return {
            ...el,
            type: 'nft',
            cost: 0,
          };
        }),
      );

      setTokens(tokens);
    } catch {
      getTockens();
    }
  };

  return (
    <div className="main">
      <div className="main-container">
        {tokens && (
          <div ref={refUnion} className="union">
            {windowWidth > 660 ? (
              <>
                <Tockens tokens={tokens.tokens} refUnion={refUnion} />
                <NFT nfts={tokens.nfts} refUnion={refUnion} />
              </>
            ) : selectList === 'Tokens' ? (
              <Tockens tokens={tokens.tokens} refUnion={refUnion} />
            ) : (
              <NFT nfts={tokens.nfts} refUnion={refUnion} />
            )}
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
