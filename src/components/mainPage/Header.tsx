import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import useModal from '../../hook/useModal';

function Header() {
  const { showModal, hideModal } = useModal();

  const handleLoginModal = () => {
    showModal({
      modalType: 'LoginModal',
      modalProps: {
        title: '로그인',
        confirmText: '로그인',
        handleClose: () => hideModal(),
        handleConfirm: () => hideModal(),
      },
    });
  };

  const handleSignUpModal = () => {
    showModal({
      modalType: 'SignUpModal',
      modalProps: {
        title: '회원가입',
        confirmText: '완료',
        handleClose: () => hideModal(),
        handleConfirm: () => hideModal(),
      },
    });
  };

  return (
    <header className="flex h-[7.1875rem] w-full flex-row items-center justify-between bg-beige px-[161px] py-[35.5px]">
      <div className="flex cursor-pointer justify-between">
        <Logo width={19} height={22} />
        <span className="ml-[12px] font-inter text-[21px] font-semibold">
          소록소록
        </span>
      </div>
      <div className="header-text flex justify-evenly font-inter text-[18px] font-semibold">
        <p onClick={handleLoginModal}>로그인</p>
        <p className="cursor-default px-2 text-[#DCDCDC]">|</p>
        <p onClick={handleSignUpModal}>회원가입</p>
      </div>
    </header>
  );
}

export default Header;
