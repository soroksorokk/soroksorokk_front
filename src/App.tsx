import React, { useState } from 'react';
import './App.css';
import MainLayout from './UI/MainLayout';
import PostListHeader from './components/mainPage/PostListHeader';
import MainPostListBox from './UI/MainPostListBox';
import PostListNav from './components/mainPage/PostListNav';
import PostCard from './components/mainPage/PostCard';
import PostCardBox from './components/mainPage/PostCardBox';
import { CategoryEmoji } from '../src/type/type';
import Profile from './components/Profile';
function App() {
  const [isCategoryShow, setIsCategoryShow] = useState(false);
  const [categoryEmojis, setCategoryEmojis] = useState<{
    feel: CategoryEmoji;
    desc: string;
  }>({
    feel: CategoryEmoji.happy,
    desc: '듣기 좋은 노래',
  });

  return (
    <>
      <MainLayout>
        <MainPostListBox>
          <div className="sticky -top-[2.6rem] h-[6.25rem] w-full bg-white px-[1.8125rem]">
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
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </PostCardBox>
        </MainPostListBox>
      </MainLayout>
      <Profile />
    </>
  );
}

export default App;
