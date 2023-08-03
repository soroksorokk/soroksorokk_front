import React, { useState } from 'react';
import PostListHeader from '../components/mainPage/PostListHeader';
import PostListNav from '../components/mainPage/PostListNav';
import PostCardBox from '../components/mainPage/PostCardBox';
import PostCard from '../components/mainPage/PostCard';
import { CategoryEmoji } from '../type/type';

const Main = () => {
  const [isCategoryShow, setIsCategoryShow] = useState(false);
  const [categoryEmojis, setCategoryEmojis] = useState<{
    feel: CategoryEmoji;
    desc: string;
  }>({
    feel: CategoryEmoji.happy,
    desc: '듣기 좋은 노래',
  });

  console.log(import.meta.env.VITE_APP_PUBLIC_KEY);
  // env 사용하는 방법

  return (
    <>
      <div className="sticky -top-[2.6rem] z-10 h-[6.25rem] w-full bg-white px-[1.8125rem] mobile_xs:h-[8rem] mobile_sm:h-[8.5rem]">
        <PostListHeader />
        <PostListNav
          isCategoryShow={isCategoryShow}
          setIsCategoryShow={setIsCategoryShow}
          categoryEmojis={categoryEmojis}
          setCategoryEmojis={setCategoryEmojis}
        />
      </div>
      <PostCardBox>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCardBox>
    </>
  );
};

export default Main;
