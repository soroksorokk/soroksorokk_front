import React, { useState } from 'react';
import { ToggleWidth } from '../../type/type';
import { ToggleCircleMove } from '../../type/type';
// import useToggle from '../../hook/useToggle';

interface ToggleProps {
  leftText: string;
  rightText: string;
  width?: keyof ToggleWidth;
  circleMove?: keyof ToggleCircleMove;
  onClick: () => void;
  isActive: boolean;
}

const Toggle = ({
  leftText,
  rightText,
  width = 'basic',
  circleMove = 'basic',
  onClick,
  isActive,
}: ToggleProps) => {
  const ToggleWidths: ToggleWidth = {
    basic: 'w-[4.25]',
    small: 'w-[2.5rem]',
  };

  const ToggleCircleMoves: ToggleCircleMove = {
    basic: 'left-[2.75rem]',
    short: 'left-[1rem]',
  };

  return (
    <div
      onClick={onClick}
      className={`
      ${ToggleWidths[width]}
      ${isActive ? 'toggle-container' : 'toggle-container-checked'} 
      `}
    >
      <div
        className={
          isActive
            ? 'toggle-circle'
            : `toggle-circle-checked ${ToggleCircleMoves[circleMove]}`
        }
      ></div>
      {isActive ? (
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
