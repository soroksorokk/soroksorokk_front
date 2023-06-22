import React, { useState } from 'react';
import Toggle from './Toggle';
import { isCategoryShowProps } from '../../type/type';
import { CategoryEmoji } from '../../type/type';

const PostListNav = ({
  isCategoryShow,
  setIsCategoryShow,
  categoryEmojis,
  setCategoryEmojis,
}: isCategoryShowProps) => {
  const handleCategoryClick = () => {
    setIsCategoryShow(!isCategoryShow);
  };

  const handleChangeEmoji = (emoji: CategoryEmoji, desc: string) => {
    if (isCategoryShow && setCategoryEmojis) {
      setCategoryEmojis({ feel: emoji, desc: desc });
    }
  };

  return (
    <div className="relative flex h-full w-full justify-between py-[17px]">
      <div
        onClick={handleCategoryClick}
        className="flex h-[2.25rem] w-[12.625rem] cursor-pointer items-center justify-center rounded-[1.5rem] bg-beige text-sm"
      >
        {!isCategoryShow && (
          <>
            <span>{categoryEmojis?.feel}</span>
            <span>{categoryEmojis?.desc}</span>
          </>
        )}

        {isCategoryShow && (
          <>
            <span>{categoryEmojis?.feel}</span>
            <span>{categoryEmojis?.desc}</span>
          </>
        )}
      </div>
      {isCategoryShow && (
        <div className="absolute left-0 right-0 top-11 mt-2 w-[12.5rem] rounded-lg bg-white p-2">
          <div className="flex scale-[1.125] justify-evenly">
            <span
              className="main-category hover:main-category-hover"
              onMouseOver={() =>
                handleChangeEmoji(CategoryEmoji.angry, '속풀리는 노래')
              }
            >
              😠
            </span>
            <span
              className="main-category hover:main-category-hover"
              onMouseOver={() =>
                handleChangeEmoji(CategoryEmoji.happy, '듣기 좋은 노래')
              }
            >
              🥰
            </span>{' '}
            <span
              className="main-category hover:main-category-hover"
              onMouseOver={() =>
                handleChangeEmoji(CategoryEmoji.sad, '슬픔 날릴 노래')
              }
            >
              😭
            </span>{' '}
            <span
              className="main-category hover:main-category-hover"
              onMouseOver={() =>
                handleChangeEmoji(CategoryEmoji.calm, '듣기 좋은 노래')
              }
            >
              😌
            </span>{' '}
            <span
              className="main-category hover:main-category-hover"
              onMouseOver={() =>
                handleChangeEmoji(CategoryEmoji.delight, '듣기 좋은 노래')
              }
            >
              🤩
            </span>{' '}
            <span
              className="main-category hover:main-category-hover"
              onMouseOver={() =>
                handleChangeEmoji(CategoryEmoji.depressed, '듣기 좋은 노래')
              }
            >
              🥺
            </span>
          </div>
        </div>
      )}
      <div>
        <Toggle />
      </div>
    </div>
  );
};

export default PostListNav;
