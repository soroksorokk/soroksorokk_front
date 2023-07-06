import React, { useState } from 'react';
import ReplyComment from './ReplyComment';
const Comment = () => {
  const [isComment, setIsComment] = useState(true);

  return (
    <div className="flex w-[100%] flex-row  ">
      <div className="flex w-[15%] justify-end">
Expand All
	@@ -15,13 +17,13 @@ const Comment = () => {
          <p className="m-1 font-normal text-gray">2023.06.20</p>
        </div>
        <p className="m-1">최고최고 짱짱 </p>
        <div className=" flx-row flex items-center">
          <button className="h-7 w-7 bg-[url('/images/sample/thumbsUp.svg')]"></button>
          <p>2</p>
          <button className="m-2">답글</button>
        </div>

        {isComment ? <ReplyComment /> : <div className=" hidden " />}
      </div>
    </div>
  );