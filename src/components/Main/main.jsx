import NFT from '../NFT/NFT';
import Tockens from '../Tokens/Tockens';
import './main.css';

const Main = () => {
  return (
    <div className="main">
      <div className="union">
        <Tockens />
        <NFT />
      </div>
    </div>
  );
};

export default Main;
