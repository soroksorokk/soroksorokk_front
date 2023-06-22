import React from 'react';
import useModal from '../hook/useModal';

export interface ModalBackgroundProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalBackground = ({ onClose, children }: ModalBackgroundProps) => {
  return (
    <div className="modal-background" onClick={onClose}>
      {children}
    </div>
  );
};

export default ModalBackground;
