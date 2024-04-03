import { useContext, useState } from 'react';
import React from 'react';

import './Footer.css';
import iconCripto from './../../image/iconCripto.svg';
import { Context } from '../../App';
import {
  closeAccountInstructionData,
  createAssociatedTokenAccountInstruction,
  createCloseAccountInstruction,
  createTransferInstruction,
  getAssociatedTokenAddress,
  getOrCreateAssociatedTokenAccount,
} from "@solana/spl-token";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  ComputeBudgetProgram,
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

const Footer = ({publicKey, connection, signAllTransactions}) => {
  const { markeds, setOpenModal } = useContext(Context);

  async function burn() {
    if(!publicKey) {
      return;
    }
    setOpenModal(true)
    try {
      const connection = new Connection(process.env.RPC_URL);
      let transactions = [];
      let latestBlockhash = await connection.getLatestBlockhash();

      markeds.map(token => {
        const tx = new Transaction({
          feePayer: publicKey,
          recentBlockhash: latestBlockhash.blockhash
        });
        const associatedTokenAddress = new PublicKey(token.associatedTokenAddress);
        const tokenMint = new PublicKey(token.mint);

        tx.add(createCloseAccountInstruction(associatedTokenAddress, publicKey, publicKey))

        transactions.push(tx);
        connection.simulateTransaction(tx).then(res => console.log(res));
      });


      latestBlockhash = await connection.getLatestBlockhash();
      transactions = transactions.map(tx => {
        tx.recentBlockhash = latestBlockhash.blockhash;

        return tx;
      })

      const signedTransactions = await signAllTransactions(transactions);

      signedTransactions.map((tx)=> [
        connection.sendRawTransaction(tx.serialize())
      ]);

      setOpenModal(false);
    }
    catch(e) {
      console.log(e);
      setOpenModal(false)
    }
  }

  return (
    <div className="footer">
      <div className="footer-container">
        <p className="queued">{markeds.length} item queued</p>
        <div className="rectangle"></div>
        {/* <p className="total" style={{display: "none"}}>Total: 0,002</p> */}
        {/* <div className="rectangle"></div> */}
        <button onClick={() => burn()} className="confirm-button" disabled={!markeds.length}>
          Confirm burns
        </button>
      </div>
    </div>
  );
};

export default Footer;
