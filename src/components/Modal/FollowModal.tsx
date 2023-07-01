import React from 'react';
import useModal from '../../hook/useModal';
import ModalBackground from '../../UI/ModalBackground';

import { ReactComponent as CloseBtn } from '../../../public/assets/closeBtn.svg';
interface FollowModalProps {
  title?: string;
}
const FollowModal = (title: FollowModalProps) => {
  const { hideModal } = useModal();

  const onClose = () => {
    hideModal();
  };
  return (
    <ModalBackground onClose={onClose}>
      <div className="modal-follow-box" onClick={(e) => e.stopPropagation()}>
        <header className="m-4 flex flex-row justify-between">
          <h1 className="text-2xl font-bold">팔로워</h1>
          <CloseBtn
            width={23}
            height={23}
            onClick={onClose}
            className="cursor-pointer"
          />
        </header>

        <div className=" my-2 flex flex-row justify-between">
          <div className="flew-row flex">
            <img
              src="/images/sample/soondoo.jpeg"
              className="m-2 h-9 w-9 rounded-full"
            />
            <div className="flex flex-col">
              <p
                className=" font-extrabold
        "
              >
                test@naver.com
              </p>
              <p>닉네임</p>
            </div>
          </div>
          <div>
            <button className="btn-follow">팔로우</button>
          </div>
        </div>
        <div className="my-2 flex flex-row justify-between ">
          <div className="flew-row flex">
            <img
              src="/images/sample/soondoo.jpeg"
              className="m-2 h-9 w-9 rounded-full"
            />
            <div className="flex flex-col">
              <p
                className=" font-extrabold
        "
              >
                test@naver.com
              </p>
              <p>닉네임</p>
            </div>
          </div>
          <div>
            <button className="btn-follow bg-beige-dark text-purple">
              팔로우
            </button>
          </div>
        </div>
      </div>
    </ModalBackground>
  );
};

export default FollowModal;
