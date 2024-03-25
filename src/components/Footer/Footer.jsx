import { useState } from 'react';
import './Footer.css';
import iconCripto from './../../image/iconCripto.svg';

const Footer = () => {
  return (
    <div className="footer">
      <p className="queued">1 item queued</p>
      <div className="rectangle"></div>
      <p className="total">Total: 0,002</p>
      <div className="rectangle"></div>
      <button className="confirm-button">Confirm burns</button>
    </div>
  );
};

export default Footer;
