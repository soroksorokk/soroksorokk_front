import React from 'react';
import { ChildrenProps } from '../type/type';

const PostDetailPage = ({ children }: ChildrenProps) => {
  return (
    <div className="mx-6 flex h-full w-[27.125rem] flex-wrap rounded-[40px] bg-white ">
      {children}
    </div>
  );
};

export default PostDetailPage;