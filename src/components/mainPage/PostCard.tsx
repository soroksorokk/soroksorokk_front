import React from 'react';
import { getTodayDate } from '../../utils/utils';
import { ReactComponent as Scrap } from '../../assets/scrapIcon.svg';
import { useRecoilState } from 'recoil';
import { isDetailPostOpenState } from '../../store/isDetailPostOpenState';
import { isNewPostState } from '../../store/isNewPostState';

const PostCard = () => {
  const postingDate = getTodayDate();

  const [isDetailPostOpen, setIsDetailPostOpen] = useRecoilState(
    isDetailPostOpenState,
  );
  const [isNewPost, setIsNewPost] = useRecoilState(isNewPostState);

  const handleDetailPostClick = () => {
    setIsDetailPostOpen(!isDetailPostOpen);
    if (isNewPost) {
      setIsNewPost(false);
    }
  };

  return (
    <div
      onClick={handleDetailPostClick}
      className="h-[24.5rem] w-full cursor-pointer overflow-hidden rounded-2xl shadow-basic hover:shadow-[0px_0px_10px_3px_rgba(150,100,255,0.8)]"
    >
      <img
        className="h-2/5 w-full"
        src="https://i.namu.wiki/i/w11dbZZeomJI4bD3_KItw3vq7tgglcM1YQA_xHULxMsixPpY1S7KcB8WrEFhJNuSuejiiQkicGKMH12JvpUqBQ.webp"
        alt="bg"
      />
      <div className="p-[1.125rem]">
        <div className="flex justify-between ">
          <h1 className="post-title w-7/8 truncate">
            용기가 필요할 땐 이노래를...
          </h1>
          <div>🥰</div>
        </div>
        <p className="mt-2 line-clamp-3 max-h-[80px] w-full break-words font-noto font-normal leading-tight text-[#292929]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam
          harum accusamus eveniet beatae, porro esse vitae a doloribus sit
          expedita enim nostrum obcaecati quam voluptatum doloremque asperiores
          pariatur ducimus.
        </p>
        <div className="mt-[1.5rem] flex items-center justify-between">
          <div className="flex w-9/12 gap-x-1">
            <div className="flex h-[24px] w-[60px] items-center justify-center rounded-[20px] bg-tag px-[.5rem] py-[.25rem] text-sm text-purple">
              #태그
            </div>
            <div className="flex h-[24px] w-[60px] items-center justify-center rounded-[20px] bg-tag px-[.5rem] py-[.25rem] text-sm text-purple">
              #태그
            </div>
            <div className="flex h-[24px] w-[60px] items-center justify-center rounded-[20px] bg-tag px-[.5rem] py-[.25rem] text-sm text-purple">
              #태그
            </div>
          </div>
          <div>
            <Scrap className="cursor-pointer" />
          </div>
        </div>
        <div className="align-center mt-[1rem] flex items-center justify-between">
          <div className="flex w-[45%] items-center justify-around">
            <img
              alt="profile_image"
              className="bg-red-500 h-[34px] w-[34px] rounded-full"
            />
            <span className="text-sm text-[#B4B4B4]">by</span>
            <span>닉네임</span>
          </div>
          <div>{postingDate}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
