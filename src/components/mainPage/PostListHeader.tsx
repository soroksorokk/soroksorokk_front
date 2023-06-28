import React from 'react';
import { getTodayDate } from '../../utils/utils';
import { ReactComponent as PostBtn } from '../../assets/writeBtn.svg';
import { useRecoilState } from 'recoil';
import { isDetailPostOpenState } from '../../store/isDetailPostOpenState';
import { isNewPostState } from '../../store/isNewPostState';
import { Link } from 'react-router-dom';

const PostListHeader = () => {
  /**
   * util에 있는 현재 시간을 리턴하는 함수를 import 해옴
   */
  const currentDate = getTodayDate();

  const [isDetailPostOpen, setIsDetailPostOpen] = useRecoilState(
    isDetailPostOpenState,
  );
  const [isNewPost, setIsNewPost] = useRecoilState(isNewPostState);

  /**
   * 글쓰기 버튼을 누르면 isNewPost가 true가 됨
   * 만약 포스트카드가 눌려 디테일 포스트가 보인다면(true인 상태)
   * false로 만들어주어 디테일 포스트를 닫히게 함
   */
  const handleNewPostClick = () => {
    setIsNewPost(!isNewPost);
    setIsDetailPostOpen(false);
  };

  return (
    <div className="mt-2 flex w-full items-center justify-between">
      <h1>오늘의 음악</h1>
      <div className="flex items-center justify-between text-lg font-semibold">
        <div className="px-4 ">{currentDate}</div>
        <Link to="/newPost/:id">
          <PostBtn
            width={40}
            height={40}
            className="cursor-pointer"
            onClick={handleNewPostClick}
          />
        </Link>
      </div>
    </div>
  );
};

export default PostListHeader;
