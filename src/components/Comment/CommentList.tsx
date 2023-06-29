import React from 'react';
import Comment from './Comment';
import CommentInput from './Commentinput';
const CommentList = () => {
  return (
    <div className="m-2 flex w-[444px] flex-col border-b border-[#dcdcdc] bg-white py-4">
      <CommentInput />
      <Comment />
    </div>
  );
};

export default CommentList;
