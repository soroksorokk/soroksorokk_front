import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import useModal from '../../hook/useModal';

function Header() {
  const { showModal } = useModal();

  /**
   * useModal에서 showModal의 인자로 받는 modalType과 modalProps를 작성해
   * 로그인을 클릭하면 modal state가 변경되면서 Global modal에서 설정한
   * modal type에 따라 해당 컴포넌트가 렌더링 되고
   * modal props도 같이 넘겨짐
   */
  const handleLoginModal = () => {
    showModal({
      modalType: 'LoginModal',
      modalProps: {
        title: '로그인',
        confirmText: '로그인',
      },
    });
  };

  const handleSignUpModal = () => {
    showModal({
      modalType: 'SignUpModal',
      modalProps: {
        title: '회원가입',
        confirmText: '완료',
      },
    });
  };

  return (
    <header className="flex h-[7.1875rem] w-full flex-row items-center justify-between px-[10.0625rem] py-[2.2188rem]">
      <div className="flex cursor-pointer justify-between">
        <Logo width={19} height={22} />
        <span className="ml-[.75rem] font-inter text-[1.3125rem] font-semibold">
          소록소록
        </span>
      </div>
      <div className="header-text flex justify-evenly font-inter text-[1.125rem] font-semibold">
        <p onClick={handleLoginModal}>로그인</p>
        <p className="cursor-default px-2 text-[#DCDCDC]">|</p>
        <p onClick={handleSignUpModal}>회원가입</p>
      </div>
    </header>
  );
}

export default Header;
