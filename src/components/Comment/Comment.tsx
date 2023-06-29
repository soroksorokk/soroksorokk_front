import React, { useState } from 'react';
import ReplyComment from './ReplyComment';
const Comment = () => {
  const [isComment, setIsComment] = useState(true);
  const today = new Date().toDateString().slice(4, -4);

  return (
    <div className="flex w-[100%] flex-row  ">
      <div className="flex w-[15%] justify-end">
        <img
          src="/assets/soondoo.jpeg"
          alt="profile_img"
          className=" h-[2.875rem] w-[2.875rem] rounded-full border object-cover"
        />
      </div>
      <div className="w-[85%] ">
        <div className="m-2 flex flex-row ">
          <p className="m-1 font-semibold">닉네임</p>
          <p className="m-1 font-normal text-gray">{today}</p>
        </div>
        <p className="m-1">최고최고 짱짱 </p>
        <div className="flx-row flex items-center">
          <img src="/assets/thumbsUp.svg" className="h-7 w-7" />
          <p>2</p>
          <button className="m-2">답글</button>
        </div>

        {isComment ? <ReplyComment /> : <div className=" hidden " />}
      </div>
    </div>
  );
};

export default Comment;
