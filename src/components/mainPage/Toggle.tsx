import React, { useState } from 'react';

const Toggle = () => {
  const [toggleOn, setToggleOn] = useState(false);

  const handleToggle = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <div
      onClick={handleToggle}
      className={toggleOn ? ' toggle-container' : ' toggle-container-checked'}
    >
      <div
        className={toggleOn ? ' toggle-circle' : 'toggle-circle-checked'}
      ></div>
      {toggleOn ? (
        <span className="absolute right-[2px] py-0.5 pr-1 text-xs">인기글</span>
      ) : (
        <span className="absolute py-0.5 pl-1 text-xs ">최신글</span>
      )}
    </div>
  );
};

export default Toggle;
