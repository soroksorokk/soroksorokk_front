import React from 'react';
import { getTodayDate } from '../../utils/utils';
import { ReactComponent as PostBtn } from '../../assets/writeBtn.svg';
import { useRecoilState } from 'recoil';
import { isDetailPostOpenState } from '../../store/isDetailPostOpenState';
import { isNewPostState } from '../../store/isNewPostState';
import { Link } from 'react-router-dom';

const PostListHeader = () => {
  const currentDate = getTodayDate();

  const [isDetailPostOpen, setIsDetailPostOpen] = useRecoilState(
    isDetailPostOpenState,
  );
  const [isNewPost, setIsNewPost] = useRecoilState(isNewPostState);

  const handleNewPostClick = () => {
    setIsNewPost(!isNewPost);
    setIsDetailPostOpen(false);
  };

  return (
    <div className="flex h-full w-full justify-between">
      <h1>오늘의 음악</h1>
      <div className="flex items-center justify-between text-lg font-semibold">
        <div className="px-4">{currentDate}</div>
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
