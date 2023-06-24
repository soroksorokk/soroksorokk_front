import React from 'react';
import { ReactComponent as Home } from '../assets/homeIcon.svg';
import { ReactComponent as Music } from '../assets/musicIcon.svg';
import PostDetailPage from './PostDetailPage';
import { useRecoilState } from 'recoil';
import { isDetailPostOpenState } from '../store/isDetailPostOpenState';
import { ChildrenProps } from '../type/type';

const MainPageBox = ({ children }: ChildrenProps) => {
  const [isDetailPostOpen, setIsDetailPostOpen] = useRecoilState(
    isDetailPostOpenState,
  );

  const handleCloseDetailPost = () => {
    setIsDetailPostOpen(!isDetailPostOpen);
  };

  return (
    <div className="flex">
      <div className="flex w-1/6 flex-col items-center justify-start bg-transparent px-10">
        <div className="mt-5 flex h-[4.3125rem] w-[4.3125rem] cursor-pointer items-center justify-center rounded-full bg-purple shadow-light">
          <Home width={40} height={40} />
        </div>
        <div className="my-5 flex h-[4.3125rem] w-[4.3125rem] cursor-pointer items-center justify-center rounded-full bg-white shadow-light">
          <Music width={40} height={40} />
        </div>
      </div>
      <div className="flex h-full w-[59.125rem] flex-wrap rounded-[40px] bg-white px-[29px] py-[42px]">
        {children}
      </div>
      {isDetailPostOpen && (
        <div>
          <PostDetailPage onClose={handleCloseDetailPost}>
            여기다가 포스트디테일페이지 작업하면 될 듯{' '}
          </PostDetailPage>
        </div>
      )}
    </div>
  );
};
export default MainPageBox;
