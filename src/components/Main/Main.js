import { useState, useEffect, useContext, useRef, useMemo } from "react";
import React from "react";
import Footer from "../Footer/Footer";
import NFT from "../NFT/NFT";
import Tockens from "../Tokens/Tockens";
import "./main.css";
import { Context } from "../../App";
import axios from "axios";
import {
  ConnectionProvider,
  WalletProvider,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  CoinbaseWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TrustWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import {
  SolanaMobileWalletAdapter,
  createDefaultAddressSelector,
  createDefaultAuthorizationResultCache,
  createDefaultWalletNotFoundHandler,
} from "@solana-mobile/wallet-adapter-mobile";
import Header from "../Header/Header";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
require("@solana/wallet-adapter-react-ui/styles.css");

const Main = () => {
  const { selectList, setSelectList, windowWidth, setWindowWidth } =
    useContext(Context);
  const refUnion = useRef();
  const [tokens, setTokens] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { connection } = useConnection();
  const { publicKey, sendTransaction, signAllTransactions } = useWallet();

  // You can also provide a custom RPC endpoint.

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getTockens();
  }, [publicKey, signAllTransactions]);

  const getTockens = async () => {
    try {
      if (!publicKey) {
        return;
      }

      const connection = new Connection(process.env.RPC_URL);
      const tokensAccounts = await connection.getParsedTokenAccountsByOwner(
        publicKey,
        { programId: TOKEN_PROGRAM_ID }
      );
      const filteredAccounts = tokensAccounts.value.filter(
        (account) => account.account.data.parsed.info.tokenAmount.uiAmount === 0
      );
      const filteredAccountsPubKeys = filteredAccounts.map((el) => {
        return el.pubkey.toString();
      });

      const tokens = (
        await axios.get(
          `https://solana-gateway.moralis.io/account/mainnet/${publicKey}/portfolio`,
          {
            headers: {
              "X-API-Key": process.env.REACT_APP_MORALIS_TOKEN,
            },
          }
        )
      ).data;

      let allTokens = [];
      allTokens.push(
        ...tokens.tokens.map((el) => {
          return {
            ...el,
            type: "token",
          };
        })
      );

      allTokens.push(
        ...tokens.nfts.map((el) => {
          return {
            ...el,
            type: "nft",
            cost: 0,
          };
        })
      );

      setTokens(allTokens);
    } catch (e) {
      console.log(e);
      getTockens();
    }
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <WalletMultiButton />
        <WalletDisconnectButton />
      </div>
      <Header publicKey={publicKey} />

      <div className="main">
        <div className="main-container">
          {tokens && (
            <div ref={refUnion} className="union">
              {windowWidth > 660 ? (
                <>
                  <Tockens
                    tokens={tokens.filter((el) => el.type === "token")}
                    refUnion={refUnion}
                  />
                  <NFT
                    nfts={tokens.filter((el) => el.type === "nft")}
                    refUnion={refUnion}
                  />
                </>
              ) : selectList === "Tokens" ? (
                <Tockens
                  tokens={tokens.filter((el) => el.type === "token")}
                  refUnion={refUnion}
                />
              ) : (
                <NFT
                  nfts={tokens.filter((el) => el.type === "nft")}
                  refUnion={refUnion}
                />
              )}
            </div>
          )}
          <Footer
            publicKey={publicKey}
            connection={connection}
            signAllTransactions={signAllTransactions}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
