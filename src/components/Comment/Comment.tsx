import React, { useState } from 'react';
import ReplyComment from './ReplyComment';
const Comment = () => {
  const [isComment, setIsComment] = useState(true);
  const today = new Date().toDateString().slice(4, -4);

  return (
    <div className="flex w-[100%] flex-col  ">
      <div className="flex flex-row">
        <img
          src="/assets/soondoo.jpeg"
          className=" h-[2.875rem] w-[2.875rem] rounded-full object-cover"
        />
        <div className="flex w-[85%] flex-col">
          <div className="m-2 flex flex-row ">
            <p className="m-1 font-semibold">닉네임</p>
            <p className="m-1 font-normal text-gray">{today}</p>
          </div>
          <p className="m-1">최고최고 짱짱 </p>
          <div className=" flx-row flex items-center">
            <button className="h-7 w-7 bg-[url('/public/assets/thumbsUp.svg')]"></button>
            <p>2</p>
            <button className="m-2">답글</button>
          </div>

          {isComment ? <ReplyComment /> : <div className=" hidden " />}
        </div>
      </div>
    </div>
  );
};
export default Comment;
