import React from 'react';
import useModal from '../../hook/useModal';
import ModalBackgound from '../../UI/ModalBackground';

export interface ConfirmModalProps {
  title?: string;
  message?: string;
  cancelText?: string;
  confirmText?: string;
}

const ConfirmModal = ({
  title,
  message,
  cancelText,
  confirmText,
}: ConfirmModalProps) => {
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
        <div>{title}</div>
        <div>{message}</div>
      </div>
      <div>
        <button onClick={onClose}>{cancelText}</button>
        <button onClick={onConfirm}>{confirmText}</button>
      </div>
    </ModalBackgound>
  );
};

export default ConfirmModal;
