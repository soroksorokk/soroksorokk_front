import React from 'react';

const Comment = () => {
  return (
    <div className="flex w-[100%] flex-row  ">
      <div className="flex w-[15%] justify-end">
        <img
          src="/images/sample/soondoo.jpeg"
          className=" h-[46px] w-[46px] rounded-full border object-cover"
        />
      </div>
      <div className="w-[75%]">
        <div className="m-2 flex flex-row ">
          <p className="m-1 font-semibold">닉네임</p>
          <p className="m-1 font-normal text-gray">2023.06.20</p>
        </div>
        <p className="m-1">최고최고 짱짱 </p>
        <div className="flx-row flex items-center">
          <button className="h-7 w-7 bg-[url('/images/sample/thumbsUp.svg')]"></button>
          <p>2</p>
          <button className="m-2">답글</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
