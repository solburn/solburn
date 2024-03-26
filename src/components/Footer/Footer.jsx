import { useContext, useState } from 'react';
import './Footer.css';
import iconCripto from './../../image/iconCripto.svg';
import { Context } from '../../App';

const Footer = () => {
  const { markeds, setOpenModal } = useContext(Context);
  return (
    <div className="footer">
      <div className="footer-container">
        <p className="queued">{markeds.length} item queued</p>
        <div className="rectangle"></div>
        <p className="total">Total: 0,002</p>
        <div className="rectangle"></div>
        <button onClick={() => setOpenModal(true)} className="confirm-button">
          Confirm burns
        </button>
      </div>
    </div>
  );
};

export default Footer;
