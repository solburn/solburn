import logo from '../image/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="logo-link">
        <img className="logo" src={logo} alt="Solburn logo" />
      </a>
      <p className="header-text">
        To burn any unwanted NFTs or tokens and reclaim the rent, <br /> please connect your wallet
      </p>
      <button className="connect-button">Connect Wallet</button>
      <ul className="social-network-list">
        <li className="social-network-list-item">
          <a href="https://discord.gg/JvhSK4YxjY" className="social-network discord"></a>
        </li>
        <li className="social-network-list-item">
          <a href="https://twitter.com/solburnapp" className="social-network tviter"></a>{' '}
        </li>
      </ul>
    </div>
  );
};

export default Header;
