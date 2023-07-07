import React, { useState } from 'react';
import { getTodayDate } from '../../utils/utils';
import { ReactComponent as Scrap } from '../../assets/scrapIcon.svg';
import { useRecoilState } from 'recoil';
import { isDetailPostOpenState } from '../../store/isDetailPostOpenState';
import { isNewPostState } from '../../store/isNewPostState';

const PostCard = () => {
  const [isDetailPostOpen, setIsDetailPostOpen] = useRecoilState(
    isDetailPostOpenState,
  );
  const [isNewPost, setIsNewPost] = useRecoilState(isNewPostState);
  const [scrap, setScrap] = useState(false);
  /**
   * 임시로 utils에 있는 함수를 가져옴.
   * 하지만 사용자의 post date값을 가져와서 바꿀 예정임
   */
  const postingDate = getTodayDate();

  /**
   * 포스트 카드를 클릭하면 detailPostOpen이 true로 설정되면서 열림
   * 이전에 글쓰기 버튼을 눌러 isNewPost가 false가 되게 함
   */
  const handleDetailPostClick = () => {
    setIsDetailPostOpen(!isDetailPostOpen);
    if (isNewPost) {
      setIsNewPost(false);
    }
  };

  const handleScrapClick = () => {
    setScrap(!scrap);
    // 눌렀을 때 로그인 했는지 여부 판단 -> 로그인이 안 되어있다면 로그인으로 넘어감
    // 로그인이 되어있고 scrap을 눌렀다면 scrap이 true로 변함
    // 그리고 해당 사용자의 scrap 배열에 해당 글의 id가 추가됨
    // 다시 누른다면 scrap이 false, 해당 사용자의 scrap 배열에 해당 글의 id가 제거됨
  };

  return (
    <div className="h-[24.5rem] w-full overflow-hidden rounded-2xl shadow-basic hover:shadow-[0px_0px_10px_3px_rgba(150,100,255,0.8)]">
      <img
        className="h-2/5 w-full cursor-pointer"
        src="https://i.namu.wiki/i/w11dbZZeomJI4bD3_KItw3vq7tgglcM1YQA_xHULxMsixPpY1S7KcB8WrEFhJNuSuejiiQkicGKMH12JvpUqBQ.webp"
        alt="post-image"
        onClick={handleDetailPostClick}
      />
      <div className="p-[1.125rem]">
        <div
          className="flex cursor-pointer justify-between"
          onClick={handleDetailPostClick}
        >
          <h1 className="post-title w-7/8 truncate">
            용기가 필요할 땐 이노래를 추천
          </h1>
          <div>🥰</div>
        </div>
        <p
          onClick={handleDetailPostClick}
          className="mt-2 line-clamp-3 max-h-[5rem] w-full cursor-pointer break-words font-noto font-normal leading-tight text-[#292929]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam
          harum accusamus eveniet beatae, porro esse vitae a doloribus sit
          expedita enim nostrum obcaecati quam voluptatum doloremque asperiores
          pariatur ducimus.
        </p>
        <div className="mt-[1.5rem] flex items-center justify-between">
          <div className="flex w-[80%] gap-x-1 overflow-x-scroll whitespace-nowrap scrollbar-hide">
            <div className="flex h-[1.5rem] w-auto items-center justify-center rounded-[1.25rem] bg-tag px-[.5rem] py-[.25rem] text-sm text-purple">
              <span>#태그dsdasasdsa</span>
            </div>
            <div className="flex h-[1.5rem] w-auto items-center justify-center rounded-[1.25rem] bg-tag px-[.5rem] py-[.25rem] text-sm text-purple">
              <span>#태그sdsad</span>
            </div>
            <div className="flex h-[1.5rem] w-auto items-center justify-center rounded-[1.25rem] bg-tag px-[.5rem] py-[.25rem] text-sm text-purple">
              <span>#태그</span>
            </div>
          </div>
          <div>
            <Scrap
              onClick={handleScrapClick}
              className="cursor-pointer"
              fill={scrap ? '#fc2c03' : '#D5CDC2'}
            />
          </div>
        </div>
        <div className="align-center mt-[2rem] flex items-center justify-between">
          <div className="relative flex w-[45%] items-center mobile_xs:w-[100%] mobile_sm:w-[75%]">
            <img
              src="assets/soondoo.jpeg"
              alt="profile_image"
              className={` object-fit absolute
                ${
                  isDetailPostOpen
                    ? 'h-[1.5rem] w-[1.5rem] rounded-full mobile_xs:h-[2rem] mobile_xs:w-[2rem] mobile_sm:h-[2.125rem] mobile_sm:w-[2.125rem] tablet:h-[2.125rem] tablet:w-[2.125rem] notebook:h-[2.125rem] notebook:w-[2.125rem]'
                    : 'h-[2.125rem] w-[2.125rem] rounded-full mobile_xs:h-[2rem] mobile_xs:w-[2rem] '
                }
              `}
            />
            <div className="absolute left-9 w-[12.5rem]">
              <span className="px-[.3125rem] text-sm text-[#B4B4B4]">by</span>
              <span>닉네임여덟글자만</span>
            </div>
          </div>
          <div className="flex justify-end mobile_xs:hidden">{`${postingDate.day} ${postingDate.month}`}</div>
        </div>
      </div>
      <div className="mt-1 flex justify-start px-[1.125rem] mobile_sm:hidden tablet:hidden notebook:hidden desktop:hidden">
        <span>{`${postingDate.month} ${postingDate.day}`}</span>
      </div>
    </div>
  );
};

export default PostCard;
