import React from 'react';
import useModal from '../../hook/useModal';
import ModalBackgound from '../../UI/ModalBackground';

export interface AlertModalProps {
  message?: string;
  confirmText?: string;
}

const AlertModal = ({ message, confirmText }: AlertModalProps) => {
  const { hideModal } = useModal();

  const onClose = () => {
    hideModal();
  };

  const onConfirm = () => {
    console.log('확인쓰');
  };

  return (
    <ModalBackgound onClose={onClose}>
      <div className="modal-box">
        <div>{message}</div>
      </div>
      <div>
        <button onClick={onConfirm}>{confirmText}</button>
      </div>
    </ModalBackgound>
  );
};

export default AlertModal;
