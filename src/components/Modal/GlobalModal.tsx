import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modalState';
import AlertModal from './AlertModal';
import ConfirmModal from './ConfirmModal';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import FollowModal from './FollowModal';

export const MODAL_TYPES = {
  ConfirmModal: 'ConfirmModal',
  AlertModal: 'AlertModal',
  LoginModal: 'LoginModal',
  SignUpModal: 'SignUpModal',
  FollowModal: 'FollowModal',
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.AlertModal]: AlertModal,
  [MODAL_TYPES.ConfirmModal]: ConfirmModal,
  [MODAL_TYPES.LoginModal]: LoginModal,
  [MODAL_TYPES.SignUpModal]: SignUpModal,
  [MODAL_TYPES.FollowModal]: FollowModal,
};

const GlobalModal = () => {
  /**
   * 전역에서 modalState를 구독함
   */

  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};

  const renderComponent = () => {
    // 모달 타입이 없다면 null을 리턴함(모달이 없는 상태))
    if (!modalType) {
      return null;
    }

    /**
     * 만약 모달 타입이 있다면 해당 컴포넌트를 return 하라는 뜻임
     * 예를 들면 modalType이 alertModal이라면 MODAL_COMPONENTS 객체에서
     * 해당하는 값을 가져욤
     * 여기에서 해당하는 값은 modaltype에 해당하는 컴포넌트 자체이므로
     * 해당 타입의 모달 컴포넌트와 props를 리턴하라는 뜻임
     */

    const ModalComponent = MODAL_COMPONENTS[modalType];

    return <ModalComponent {...modalProps} />;
  };

  return <>{renderComponent()}</>;
};

export default GlobalModal;
