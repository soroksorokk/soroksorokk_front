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

  /**
   *
   * @param emoji type.tsx의 enum을 타입으로 사용함
   * @param desc 이모지마다 들어가는 설명
   *
   * 메인 페이지에서 카테고리를 눌렀을 때(isCategoryShow === true)
   * onMouseOver의 콜백함수로 handleChangeEmoji를 설정하고 인자로 emoji와 desc을 받아서
   * categoryEmojis state를 저장한다
   * 그리고 메인 페이지에서 카테고리를 닫을 때(isCategoryShow === false)
   * categoryEmojis state에 저장된 emoji와 desc을 카테고리란에 보여준다
   *
   */
  const handleChangeEmoji = (emoji: CategoryEmoji, desc: string) => {
    if (isCategoryShow && setCategoryEmojis) {
      setCategoryEmojis({ feel: emoji, desc: desc });
    }
  };

  return (
    <div className="relative flex w-full justify-between py-[1.0625rem]">
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
                handleChangeEmoji(CategoryEmoji.angry, '듣기 좋은 노래')
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
                handleChangeEmoji(CategoryEmoji.sad, '듣기 좋은 노래')
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
                handleChangeEmoji(CategoryEmoji.exciting, '듣기 좋은 노래')
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
