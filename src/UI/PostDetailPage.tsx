import React from 'react';
import { ChildrenProps } from '../type/type';

const PostDetailPage = ({ children }: ChildrenProps) => {
  return (
    <div className="flex h-full w-[27.125rem] flex-wrap rounded-[2.5rem] bg-white tablet:w-[21rem] notebook:w-[25rem] desktop:w-[27.125rem] ">
      {children}
    </div>
  );
};

export default PostDetailPage;
