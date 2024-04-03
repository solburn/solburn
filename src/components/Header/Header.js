import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
import logo from "./../../image/logo.png";
import "./Header.css";

const Header = ({ publicKey }) => {
  function login() {
    document
      .getElementsByClassName(
        "wallet-adapter-button wallet-adapter-button-trigger"
      )[0]
      .click();
  }
  return (
    <div className="header">
      <a href="/" className="logo-link">
        <img className="logo" src={logo} alt="Solburn logo" />
      </a>
      <p className="header-text">
        To burn any unwanted NFTs or tokens and reclaim the rent, <br /> please
        connect your wallet
      </p>

      {
        !publicKey ?
        <button className="connect-button" onClick={login}>
          Connect Wallet
        </button>
        :
        <p className="header-text" style={{
          padding: "10px 20px",
          fontSize: "18px",
          color: "#686ffb",
          wordBreak: "break-all",
          width: "100%"
        }}>
        {publicKey.toString()}
      </p>
      }

      <ul className="social-network-list">
        <li className="social-network-list-item">
          <a
            href="https://discord.gg/JvhSK4YxjY"
            target="_blank"
            rel="noreferrer"
            className="social-network discord"
          >
            <img src="/dist/img/discord.svg"></img>
          </a>
        </li>
        <li className="social-network-list-item">
          <a
            href="https://twitter.com/solburnapp"
            target="_blank"
            rel="noreferrer"
            className="social-network twitter"
          >
            <img src="/dist/img/twitter.svg"></img>
            </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;
