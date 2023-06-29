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
            className="flex w-[6.25rem] cursor-pointer flex-row items-center"
            onClick={() => onClickMoreCommentButton()}
          >
            <img src="assets/downArrow.svg" className="h-4 w-4" />
            <p className="m-2 font-bold text-purple">답글</p>
            <p className=" font-bold text-purple">2개</p>
          </div>
        ) : (
          <div>
            <div
              onClick={() => onClickMoreCommentButton()}
              className="flex cursor-pointer flex-row items-center "
            >
              <img src="/assets/upArrow.svg" />

              <p className="m-2 font-bold text-purple">답글</p>
              <p className=" font-bold text-purple">2개</p>
            </div>

            <div className="flex w-[100%] flex-row justify-start ">
              <div>
                <img
                  src="/assets/soondoo.jpeg"
                  className=" h-[2.875rem] w-[2.875rem] rounded-full border object-cover"
                />
              </div>
              <div>
                <div className="m-2 flex flex-row ">
                  <p className="m-1 font-semibold">닉네임</p>
                  <p className="m-1 font-normal text-gray">{today}</p>
                </div>
                <p className="m-1">최고최고 짱짱 </p>
                <div className=" flx-row flex items-center">
                  <img src="/assets/thumbsUp.svg" className="h-7 w-7"></img>
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
