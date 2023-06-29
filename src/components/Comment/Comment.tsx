import React from 'react';
import ReplyComment from './ReplyComment';

const Comment = () => {
  return (
    <div className="flex w-[100%] flex-row  ">
      <div className="flex w-[15%] justify-end">
        <img
          src="/assets/soondoo.jpeg"
          className=" h-[2.875rem] w-[2.875rem] rounded-full border object-cover"
        />
      </div>
      <div className="w-[85%] ">
        <div className="m-2 flex flex-row ">
          <p className="m-1 font-semibold">닉네임</p>
          <p className="m-1 font-normal text-gray">2023.06.20</p>
        </div>
        <p className="m-1">최고최고 짱짱 </p>
        <div className="flx-row flex items-center">
          <button className="h-7 w-7 bg-[url('/assets/thumbsUp.svg')]"></button>
          <p>2</p>
          <button className="m-2">답글</button>
        </div>

        <ReplyComment />
      </div>
    </div>
  );
};

export default Comment;

// 이미지업로드 버튼
