import React, { useState } from 'react';
import { ToggleWidth } from '../../type/type';
import { ToggleCircleMove } from '../../type/type';

interface ToggleProps {
  leftText: string;
  rightText: string;
  width?: keyof ToggleWidth;
  circleMove?: keyof ToggleCircleMove;
}

const Toggle = ({
  leftText,
  rightText,
  width = 'basic',
  circleMove = 'basic',
}: ToggleProps) => {
  const [toggleOn, setToggleOn] = useState(false);

  const ToggleWidths: ToggleWidth = {
    basic: 'w-[4.25]',
    small: 'w-[2.5rem]',
  };

  const ToggleCircleMoves: ToggleCircleMove = {
    basic: 'left-[2.75rem]',
    short: 'left-[1rem]',
  };
  /**
   * toggleOn의 값(true, false)에 따라서 className이 달라지게 설정함
   */
  const handleToggle = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <div
      onClick={handleToggle}
      className={`${
        toggleOn ? 'toggle-container' : 'toggle-container-checked'
      } ${ToggleWidths[width]}`}
    >
      <div
        className={
          toggleOn
            ? 'toggle-circle'
            : `toggle-circle-checked ${ToggleCircleMoves[circleMove]}`
        }
      ></div>
      {toggleOn ? (
        <span className="absolute right-[.125rem] py-0.5 pr-1 text-xs">
          {leftText}
        </span>
      ) : (
        <span className="absolute py-0.5 pl-1 text-xs ">{rightText}</span>
      )}
    </div>
  );
};

export default Toggle;
