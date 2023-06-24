import React, { useState } from 'react';

const ReplyComment = () => {
  const [isMoreComment, setIsMoreComment] = useState(false);

  const onClickMoreCommentButton = () => {
    setIsMoreComment(!isMoreComment);
  };
  const today = new Date().toDateString().slice(4, -4);

  return (
    <div className="flex w-[100%] flex-col ">
      <div>
        {!isMoreComment ? (
          <div
            className="flex w-[100px] cursor-pointer flex-row items-center"
            onClick={() => onClickMoreCommentButton()}
          >
            <button className="h-4 w-4 bg-upward  bg-center bg-no-repeat" />
            <p className="m-2 font-bold text-purple">답글</p>
            <p className=" font-bold text-purple">2개</p>
          </div>
        ) : (
          <div onClick={() => onClickMoreCommentButton()}>
            <div className="flex flex-row items-center ">
              <button className="h-4 w-4 bg-downward bg-center bg-no-repeat" />

              <p className="m-2 font-bold text-purple">답글</p>
              <p className=" font-bold text-purple">2개</p>
            </div>

            <div className="flex w-[100%] flex-row  ">
              <div className="flex w-[15%] justify-end">
                <img
                  src="/images/sample/soondoo.jpeg"
                  className=" h-[46px] w-[46px] rounded-full border object-cover"
                />
              </div>
              <div className="w-[85%] ">
                <div className="m-2 flex flex-row ">
                  <p className="m-1 font-semibold">닉네임</p>
                  <p className="m-1 font-normal text-gray">{today}</p>
                </div>
                <p className="m-1">최고최고 짱짱 </p>
                <div className=" flx-row flex items-center">
                  <button className="h-7 w-7 bg-[url('/images/sample/thumbsUp.svg')]"></button>
                  <p>2</p>
                  <button className="m-2">답글</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReplyComment;