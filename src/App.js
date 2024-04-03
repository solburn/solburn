import React, { createContext, useMemo, useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";
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
import { clusterApiUrl } from "@solana/web3.js";
import {
  SolanaMobileWalletAdapter,
  createDefaultAddressSelector,
  createDefaultAuthorizationResultCache,
  createDefaultWalletNotFoundHandler,
} from "@solana-mobile/wallet-adapter-mobile";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

export const Context = createContext();

function App() {
  const network = WalletAdapterNetwork.Mainnet;
  const [markeds, setMarkeds] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectList, setSelectList] = useState("Tokens");
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new CoinbaseWalletAdapter(),
      // new BitKeepWalletAdapter(),
      new TrustWalletAdapter(),
      new SolflareWalletAdapter({
        network: "mainnet-beta",
      }),
      new LedgerWalletAdapter(),
      new SolanaMobileWalletAdapter({
        addressSelector: createDefaultAddressSelector(),
        appIdentity: {
          name: "Solburn",
          uri: "https://solburn.app/",
          icon: "favicon.png",
        },
        authorizationResultCache: createDefaultAuthorizationResultCache(),
        cluster: "mainnet-beta",
        onWalletNotFound: createDefaultWalletNotFoundHandler(),
      }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  return (
    <div className="App">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Context.Provider
              value={{
                markeds,
                setMarkeds,
                selectList,
                setSelectList,
                windowWidth,
                setWindowWidth,
                openModal,
                setOpenModal,
              }}
            >
              <div className="app-container">
                <Main />
                {openModal && <Modal />}
              </div>
            </Context.Provider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
