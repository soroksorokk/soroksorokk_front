import { ReactElement } from 'react';

type SubtitleType = {
  leftText: string | ReactElement;
  rightText: string;
  onClick: () => void | undefined;
  isLogin: boolean;
};

const Subtitle = ({ leftText, rightText, onClick, isLogin }: SubtitleType) => {
  return (
    <div
      className={
        'flex h-20 w-full  items-center justify-between border-b border-[#efefef] px-[1em]'
      }
    >
      <h2>{leftText}</h2>
      <span
        className={
          isLogin
            ? 'cursor-pointer text-slate-300 underline '
            : 'text-lg font-semibold'
        }
        onClick={isLogin ? onClick : undefined}
      >
        {rightText}
      </span>
    </div>
  );
};

Subtitle.defaultProps = {
  isLogin: false,
  onClick: undefined,
};
export default Subtitle;
