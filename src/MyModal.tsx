import React, { useState } from "react";
import Modal from "react-modal";
import "./MyModal.css";

Modal.setAppElement("#root");

interface MyModalProps {
  triggerText: string;
}

const MyModal: React.FC<MyModalProps> = ({ triggerText }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>{triggerText}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h1 className="modal-title">Your Title</h1>
        <h3 className="modal-subtitle">Your Subtitle</h3>
        <div className="modal-content">
          <div className="column">
            <div className="info-section">
              <h4>Information Title 1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="info-section">
              <h4>Information Title 2</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="info-section">
              <h4>Information Title 3</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="info-section">
              <h4>Information Title 4</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <button onClick={closeModal} className="modal-close-button">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default MyModal;
