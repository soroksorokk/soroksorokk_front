import { ReactElement } from 'react';

type SubtitleType = {
  leftText: string | ReactElement;
  rightText: string;
  onClick: () => void | undefined;
  isLoggin: boolean;
};

const Subtitle = ({ leftText, rightText, onClick, isLoggin }: SubtitleType) => {
  return (
    <div className="flex h-20 w-full  items-center justify-between border-b border-[#efefef] px-[1em]">
      <h2>{leftText}</h2>
      <span
        className={isLoggin ? 'cursor-pointer text-slate-300 underline ' : ''}
        onClick={isLoggin ? onClick : undefined}
      >
        {rightText}
      </span>
    </div>
  );
};

Subtitle.defaultProps = {
  isLogin: false,
};
export default Subtitle;
