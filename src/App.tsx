import React, { useState } from 'react';
import './App.css';
import MainLayout from './UI/MainLayout';
import PostListHeader from './components/mainPage/PostListHeader';
import MainPostListBox from './UI/MainPostListBox';
import PostListNav from './components/mainPage/PostListNav';
import PostCard from './components/mainPage/PostCard';
import PostCardBox from './components/mainPage/PostCardBox';
import { CategoryEmoji } from '../src/type/type';

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
    <div className="m-3 h-full w-full bg-beige underline">
      베이지 부분은 커스텀 theme이랑 일반 tailwind 적용한거임
      <button className="btn-purple">
        보라 부분은 커스텀 클래스 적용한거임
      </button>
    </div>
  );
}

export default App;
