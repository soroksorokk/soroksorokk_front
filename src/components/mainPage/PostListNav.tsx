import Toggle from './Toggle';
import { isCategoryShowProps } from '../../type/type';
import { CategoryEmoji } from '../../type/type';

const PostListNav = ({
  isCategoryShow,
  setIsCategoryShow,
  categoryEmojis,
  setCategoryEmojis,
  toggleOn,
  setToggleOn,
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

  const handleToggle = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <div className="relative flex w-full justify-between py-[1.0625rem] dark:bg-darkModeBG2 mobile_xs:py-3">
      <div
        onClick={handleCategoryClick}
        className="flex h-[2.25rem] w-auto cursor-pointer items-center justify-center rounded-[1.5rem] bg-beige px-[8px] mobile_xs:text-xs"
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
                handleChangeEmoji(CategoryEmoji.ANGRY, '화날 떄 듣기 좋은 노래')
              }
            >
              😠
            </span>
            <span
              className="main-category hover:main-category-hover"
              onMouseOver={() =>
                handleChangeEmoji(CategoryEmoji.HAPPY, '기쁠 때 듣기 좋은 노래')
              }
            >
              🥰
            </span>{' '}
            <span
              className="main-category hover:main-category-hover"
              onMouseOver={() =>
                handleChangeEmoji(CategoryEmoji.SAD, '슬플 때 듣기 좋은 노래')
              }
            >
              😭
            </span>{' '}
            <span
              className="main-category hover:main-category-hover"
              onMouseOver={() =>
                handleChangeEmoji(CategoryEmoji.CALM, '평온한 듣기 좋은 노래')
              }
            >
              😌
            </span>{' '}
            <span
              className="main-category hover:main-category-hover"
              onMouseOver={() =>
                handleChangeEmoji(
                  CategoryEmoji.EXCITED,
                  '신나는 듣기 좋은 노래',
                )
              }
            >
              🤩
            </span>{' '}
            <span
              className="main-category hover:main-category-hover"
              onMouseOver={() =>
                handleChangeEmoji(CategoryEmoji.MOVED, '감동적 듣기 좋은 노래')
              }
            >
              🥺
            </span>
          </div>
        </div>
      )}
      <div className="flex items-center">
        <Toggle
          isActive={toggleOn}
          leftText="최신글"
          rightText="인기글"
          onClick={handleToggle}
        />
      </div>
    </div>
  );
};

export default PostListNav;
