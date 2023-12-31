import { useState } from 'react';
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
    <div className="h-[24.5rem] w-full overflow-hidden rounded-2xl shadow-basic hover:shadow-[0px_0px_10px_3px_rgba(150,100,255,0.8)] dark:bg-darkModeBG3">
      <img
        className="h-2/5 w-full cursor-pointer"
        src="https://i.namu.wiki/i/w11dbZZeomJI4bD3_KItw3vq7tgglcM1YQA_xHULxMsixPpY1S7KcB8WrEFhJNuSuejiiQkicGKMH12JvpUqBQ.webp"
        alt="post-image"
        onClick={handleDetailPostClick}
      />
      <div className="p-[1.125rem]">
        <div className="flex justify-between ">
          <div className="relative flex w-[45%] items-center align-middle">
            <img
              src="assets/soondoo.jpeg"
              alt="profile_image"
              className="absolute h-[1.8rem] w-[1.8rem] rounded-full object-cover"
            />
            <div className="absolute left-7 w-[12.5rem] font-noto text-sm ">
              <span className="px-1 text-[#B4B4B4]">by</span>
              <span className="dark:text-[#9BA3AF font-medium -tracking-[.0437rem] text-darkModeText">
                닉네임여덟글자야
              </span>
            </div>
          </div>
          <div className="text-[1.25rem]">🥰</div>
        </div>
        <h1 className="post-title w-7/8 truncate text-[#292929] dark:text-darkModeTitle">
          용기가 필요할 땐 이노래를 추천
        </h1>
        <p
          onClick={handleDetailPostClick}
          className="line-clamp-3 max-h-[5rem] w-full cursor-pointer break-words font-noto text-xs leading-normal text-[#292929] dark:text-darkModeText"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam
          harum accusamus eveniet beatae, porro esse vitae a doloribus sit
          expedita enim nostrum obcaecati quam voluptatum doloremque asperiores
          pariatur ducimus.
        </p>
        <div className="flex items-center justify-between py-[1rem]">
          <div className="flex w-[80%] gap-x-1 overflow-x-scroll whitespace-nowrap scrollbar-hide ">
            <div className="flex h-[1.5rem] w-auto items-center justify-center rounded-[1.25rem] bg-tag px-[.5rem] py-[.25rem] text-sm text-purple dark:bg-darkModeTagBG dark:text-darkModeTagText">
              <span>#태그dsdasasdsa</span>
            </div>
            <div className="flex h-[1.5rem] w-auto items-center justify-center rounded-[1.25rem] bg-tag px-[.5rem] py-[.25rem] text-sm text-purple dark:bg-darkModeTagBG dark:text-darkModeTagText">
              <span>#태그sdsad</span>
            </div>
            <div className="flex h-[1.5rem] w-auto items-center justify-center rounded-[1.25rem] bg-tag px-[.5rem] py-[.25rem] text-sm text-purple dark:bg-darkModeTagBG dark:text-darkModeTagText">
              <span>#태그</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span className="font-inter text-xs font-medium text-[#000] dark:text-darkModeText">{`${postingDate.day} ${postingDate.month}`}</span>
          <div className="flex items-center gap-x-1">
            <Scrap
              onClick={handleScrapClick}
              className="cursor-pointer"
              fill={scrap ? '#fc2c03' : '#D5CDC2'}
            />
            <span className="font-inter text-xs font-medium text-[#B4B4B4]">
              10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
