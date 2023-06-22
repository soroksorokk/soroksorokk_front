import React from 'react';
import useModal from '../../hook/useModal';
import ModalBackground from '../../UI/ModalBackground';
import { ReactComponent as CloseBtn } from '../../assets/closeBtn.svg';
import Button from '../../UI/Button';
import { ReactComponent as GoogleLogin } from '../../assets/googleIcon.svg';
import { ReactComponent as GitHubLogin } from '../../assets/githubIcon.svg';

export interface LoginModalProps {
  title?: string;
  confirmText?: string;
}

const LoginModal = ({ title, confirmText }: LoginModalProps) => {
  const { hideModal } = useModal();

  const onClose = () => {
    hideModal();
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ModalBackground onClose={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end">
          <CloseBtn
            width={23}
            height={23}
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        <h1 className="pt-[1.25rem]">{title}</h1>
        <form onSubmit={onSubmitHandler} className="flex flex-col">
          <input
            type="email"
            className="placeholder:placeholder:text=[#909090] my-3 border-b-[.0625rem] border-[#909090] p-4 text-sm outline-none focus:border-[#9664FF]"
            placeholder="이메일을 입력해주세요"
          />
          <input
            type="password"
            className="placeholder:placeholder:text=[#909090] my-3 border-b-[.0625rem] border-[#909090] p-4 text-sm outline-none focus:border-[#9664FF]"
            placeholder="비밀번호를 입력해주세요"
          />
          <div className="flex flex-col items-center justify-center">
            <Button className={'btn-purple' + ' mb-2 bg-white text-[#838383]'}>
              회원가입
            </Button>
            <Button className={'btn-purple' + ' mb-6 text-white'}>
              {confirmText}
            </Button>
          </div>
          <div className="flex items-center justify-center ">
            <GoogleLogin width={40} height={40} className="mx-2" />
            <GitHubLogin width={40} height={40} className="mx-2" />
          </div>
        </form>
      </div>
    </ModalBackground>
  );
};

export default LoginModal;
