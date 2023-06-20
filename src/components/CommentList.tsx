import React from 'react';
import Comment from './Comment';
const CommentList = () => {
  return (
    <div className="flex w-[444px] flex-col border-b border-[#dcdcdc] bg-white py-4">
      <Comment />
      <div className="flex flex-row">
        <div className="flex w-[15%]" />
        <div className="flex w-[75%] flex-col">
          <div className="flex flex-row items-center">
            <button className="h-4 w-4 bg-upward  bg-center bg-no-repeat" />
            <p className="m-2 font-bold text-purple">답글</p>
            <p className=" font-bold text-purple">2개</p>
          </div>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default CommentList;
