import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </Overlay>,
    document.getElementById("modal-root")
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 100px;
  position: relative;
`;

export default Modal;