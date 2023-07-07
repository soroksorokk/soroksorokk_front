import React from 'react';
import ModalBackground from '../../UI/ModalBackground';
import useModal from '../../hook/useModal';
import Button from '../../UI/Button';

export interface MobileMenuModalProps {
  onClick: () => void;
}
const MobileMenuModal = ({ onClick }: MobileMenuModalProps) => {
  const { hideModal } = useModal();
  const onClose = () => {
    hideModal();
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
              onClick={onClick}
            >
              로그인
            </Button>
            <Button
              className="btn-purple rounded-2xl text-white"
              onClick={onClick}
            >
              회원가입
            </Button>
          </div>
          <hr className="mb-5 h-[0.5px] border-none bg-neutral-200" />
          <div className="flex flex-col align-middle font-noto text-sm text-[#545557]">
            <span className="h-10 w-full truncate">홈</span>
            <span className="h-10 w-full truncate">마이페이지</span>
          </div>
        </div>
      </ModalBackground>
    </>
  );
};

export default MobileMenuModal;
