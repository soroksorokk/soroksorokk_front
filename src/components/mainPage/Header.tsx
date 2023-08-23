import  { useLayoutEffect, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import useModal from '../../hook/useModal';
import useWidthResize from '../../hook/useWidthResize';
import { ReactComponent as HamburgerMenu } from '../../assets/menu-hamburger-Icon.svg';
import { useNavigate } from 'react-router-dom';
import useLoggedIn from '../../hook/useLoggedIn';
import { ReactComponent as DownBtn } from '../../assets/triangleDownBtn.svg';
import Toggle from './Toggle';
import isLoggedInState from '../../store/isLoggedInState';
import { useRecoilState } from 'recoil';
import useDarkMode from '../../hook/useDarkMode';

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const { isDark, setIsDark, handleToggleDarkMode } = useDarkMode();

  const navigate = useNavigate();
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

  const LogIn = useLoggedIn();

  const moveHomeHandler = () => {
    navigate('/');
  };

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

  /**
   * 모바일의 경우에 적용되는 메뉴 모달 핸들러
   */
  const handleMobileMenuClick = () => {
    showModal({
      modalType: 'MobileMenuModal',
      modalProps: {
        onClick: () => setMobileMenu(!mobileMenu),
      },
    });
  };

  /**
   * 모바일을 제외한 나머지에서 적용되는 메뉴 클릭 핸들러
   */
  const handleMenuClick = () => {
    setMenu(!menu);
  };

  const handleLogOutClick = () => {
    localStorage.removeItem('userToken');
    setMenu(false);
    setIsLoggedIn(false);
    navigate('/');
  };

  useLayoutEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('theme', 'dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('theme');
    }
  }, []);

  return (
    <>
      {windowWidth.width < 768 ? (
        <header className="flex h-[5rem] w-full flex-row items-center justify-between bg-beige px-10">
          <div>
            <HamburgerMenu
              width={50}
              height={50}
              onClick={handleMobileMenuClick}
              className="cursor-pointer"
            />
          </div>
          <div className="flex cursor-pointer justify-between">
            <span
              onClick={moveHomeHandler}
              className="ml-[.75rem] font-noto text-[1.3125rem] font-semibold"
            >
              소록소록
            </span>
          </div>
        </header>
      ) : (
        <header
          className={`flex h-[7.1875rem] w-full flex-row items-center justify-between bg-beige px-[10.0625rem] py-[2.2188rem] dark:bg-darkModeBG tablet:px-[4rem] notebook:px-[7rem] `}
        >
          <div className="flex cursor-pointer justify-between">
            <Logo
              width={19}
              height={22}
              fill={isDark ? '#9EAFC7' : '#292D32'}
              onClick={moveHomeHandler}
            />
            <span
              onClick={moveHomeHandler}
              className="ml-[.75rem] font-inter text-[1.3125rem] font-semibold"
            >
              소록소록
            </span>
          </div>

          {LogIn ? (
            <>
              <div className="relative flex w-auto items-center ">
                <Toggle
                  isActive={isDark}
                  leftText=""
                  rightText=""
                  width="small"
                  circleMove="short"
                  onClick={handleToggleDarkMode}
                />
                <div className="ml-3 mr-2 h-9 w-9 rounded-full bg-orange-700"></div>
                <DownBtn
                  fill={isDark ? '#9EAFC7' : '#fffff'}
                  onClick={handleMenuClick}
                  className="cursor-pointer"
                />
              </div>
              {menu && (
                <div className="absolute right-[8.75rem] top-20 z-20 h-[5.125rem] w-[6.8125rem] rounded-2xl bg-white shadow-light ">
                  <div className="flex h-full w-full flex-col items-center justify-evenly align-middle">
                    <p className="cursor-pointer" onClick={handleLogOutClick}>
                      로그아웃
                    </p>
                    <p className="cursor-pointer">마이페이지</p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="header-text flex justify-evenly font-inter text-[1.125rem] font-semibold">
              <p onClick={handleLoginModal}>로그인</p>
              <p className="cursor-default px-2 text-[#DCDCDC]">|</p>
              <p onClick={handleSignUpModal}>회원가입</p>
            </div>
          )}
        </header>
      )}
    </>
  );
}

export default Header;
