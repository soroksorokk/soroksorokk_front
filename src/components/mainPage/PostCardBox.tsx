import React from 'react';
import { ChildrenProps } from '../../type/type';

const PostCardBox = ({ children }: ChildrenProps) => {
  /**
   * post card list가 담기는 컴포넌트임
   */
  return (
    <div className="mt-3 grid grid-cols-1 grid-rows-2 gap-4 px-[1.8125rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {children}
    </div>
  );
};

export default PostCardBox;
