import React from 'react';
import ModalBackground from '../../UI/ModalBackground';
import useModal from '../../hook/useModal';
import Button from '../../UI/Button';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';
import { Link } from 'react-router-dom';

export interface MobileMenuModalProps {
  onClick: () => void;
}
const MobileMenuModal = ({ onClick }: MobileMenuModalProps) => {
  const { hideModal, showModal } = useModal();
  const onClose = () => {
    hideModal();
  };

  const handleLoginClick = () => {
    showModal({
      modalType: 'LoginModal',
      modalProps: {
        title: '로그인',
        confirmText: '로그인',
      },
    });
  };

  const handleSignUpClick = () => {
    showModal({
      modalType: 'SignUpModal',
      modalProps: {
        title: '회원가입',
        confirmText: '완료',
      },
    });
  };

  return (
    <>
      <ModalBackground onClose={onClose}>
        <div
          className="h-screen w-[17rem] bg-white p-5 "
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="font-noto text-[1.3125rem] font-semibold">소록소록</h1>
          <div className="flex gap-x-2 py-5">
            <Button
              className="btn-purple rounded-2xl border-[.0625rem] border-[#9664FF] bg-white text-purple"
              onClick={handleLoginClick}
            >
              로그인
            </Button>
            <Button
              className="btn-purple rounded-2xl text-white"
              onClick={handleSignUpClick}
            >
              회원가입
            </Button>
          </div>
          <hr className="mb-5 h-[0.5px] border-none bg-neutral-200" />
          <div className="flex flex-col align-middle font-noto text-sm text-[#545557]">
            <span className="h-10 w-full cursor-pointer truncate">홈</span>
            <span className="h-10 w-full truncate">마이페이지</span>
          </div>
        </div>
      </ModalBackground>
    </>
  );
};

export default MobileMenuModal;
