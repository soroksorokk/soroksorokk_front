import ModalBackground from '../../UI/ModalBackground';
import useModal from '../../hook/useModal';
import Button from '../../UI/Button';
import useLoggedIn from '../../hook/useLoggedIn';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import isLoggedInState from '../../store/isLoggedInState';

export interface MobileMenuModalProps {
  onClick: () => void;
}
const MobileMenuModal = ({ onClick }: MobileMenuModalProps) => {
  const { hideModal, showModal } = useModal();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

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

  const handleLogoutClick = () => {
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
    hideModal();
    navigate('/');
  };

  const login = useLoggedIn();

  return (
    <>
      <ModalBackground onClose={onClose}>
        <div
          className="h-screen w-[17rem] bg-white p-5 "
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="font-noto text-[1.3125rem] font-semibold">소록소록</h1>
          <div className="flex gap-x-2 py-5">
            {login ? (
              <>
                <Button
                  className="btn-purple rounded-2xl border-[.0625rem] border-[#9664FF] bg-white text-purple"
                  onClick={handleLogoutClick}
                >
                  로그아웃
                </Button>
                <Button className="btn-purple rounded-2xl text-white">
                  마이페이지
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
          <hr className="mb-5 h-[0.5px] border-none bg-neutral-200" />
          <div className="flex flex-col align-middle font-noto text-sm text-[#545557]">
            <span className="h-10 w-full cursor-pointer truncate">홈</span>
          </div>
        </div>
      </ModalBackground>
    </>
  );
};

export default MobileMenuModal;
