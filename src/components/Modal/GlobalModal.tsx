import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modalState';
import AlertModal from './AlertModal';
import ConfirmModal from './ConfirmModal';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

export const MODAL_TYPES = {
  ConfirmModal: 'ConfirmModal',
  AlertModal: 'AlertModal',
  LoginModal: 'LoginModal',
  SignUpModal: 'SignUpModal',
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.AlertModal]: AlertModal,
  [MODAL_TYPES.ConfirmModal]: ConfirmModal,
  [MODAL_TYPES.LoginModal]: LoginModal,
  [MODAL_TYPES.SignUpModal]: SignUpModal,
};

const GlobalModal = () => {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};

  const renderComponent = () => {
    if (!modalType) {
      return null;
    }

    const ModalComponent = MODAL_COMPONENTS[modalType];

    return <ModalComponent {...modalProps} />;
  };

  return <>{renderComponent()}</>;
};

export default GlobalModal;
