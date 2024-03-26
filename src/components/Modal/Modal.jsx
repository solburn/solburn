import { useContext } from 'react';
import './Modal.css';
import { Context } from '../../App';

const Modal = () => {
  const { openModal, setOpenModal } = useContext(Context);

  return (
    <div className="modal">
      <div className="modal-container">
        <div onClick={() => setOpenModal(false)} className="close"></div>
        <h2 className="modal-title">IT’S BURNING TIME</h2>
        <p className="modal-text">
          APPROVE THE TRANSACTION IN YOUR WALLET <br /> TO BURN 1 ITEM
        </p>
      </div>
    </div>
  );
};

export default Modal;
