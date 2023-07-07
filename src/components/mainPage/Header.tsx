import react, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import useModal from '../../hook/useModal';
import useWidthResize from '../../hook/useWidthResize';
import { ReactComponent as HamburgerMenu } from '../../assets/menu-hamburger-Icon.svg';

function Header() {
  const [menu, setMenu] = useState(false);
  const windowWidth = useWidthResize();
  /**
   * winddow 창의 width를 감지하는 커스텀 훅
   * 미디어 쿼리 중 mobile_sm의 경우가 애매해서 사용하게 됨
   */
  const { showModal } = useModal();
  /**
   * useModal에서 showModal의 인자로 받는 modalType과 modalProps를 작성해
   * 로그인을 클릭하면 modal state가 변경되면서 Global modal에서 설정한
   * modal type에 따라 해당 컴포넌트가 렌더링 되고 modal props도 같이 넘겨짐
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

  const handleMenuClick = () => {
    showModal({
      modalType: 'MobileMenuModal',
      modalProps: {
        onClick: () => setMenu(!menu),
      },
    });
  };

  return (
    <>
      {windowWidth.width < 768 ? (
        <header className="flex h-[5rem] w-full flex-row items-center justify-between px-10 ">
          <div>
            <HamburgerMenu
              width={50}
              height={50}
              onClick={handleMenuClick}
              className="cursor-pointer"
            />
          </div>
          <div className="flex cursor-pointer justify-between">
            {/* <Logo width={19} height={22} /> */}
            <span className="ml-[.75rem] font-noto text-[1.3125rem] font-semibold">
              소록소록
            </span>
          </div>
        </header>
      ) : (
        <header className="flex h-[7.1875rem] w-full flex-row items-center justify-between px-[10.0625rem] py-[2.2188rem] tablet:px-[4rem] notebook:px-[7rem]">
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
      )}
    </>
  );
}

export default Header;
